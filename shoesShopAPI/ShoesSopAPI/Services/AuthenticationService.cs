using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using ShoesSopAPI.Data;
using ShoesSopAPI.DTO;
using ShoesSopAPI.Models;
using ShoesSopAPI.Repository;
using ShoesSopAPI.Repository.Interface;
using ShoesSopAPI.Services.Interfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Web.Providers.Entities;

namespace ShoesSopAPI.Services
{
    public class AuthenticationService : IAuthenticationService
    {

        private readonly IConfiguration _config;
        private readonly IAuthenticationRepository _repository;
        private readonly DBShop _db;


        public AuthenticationService(IConfiguration config, IAuthenticationRepository repository, DBShop dB)
        {
            _config = config;
            _repository = repository;
            _db = dB;
        }
        public async Task<Account?> Login(string phone, string password)
        {
            var account = await _repository.FindBySDTAsync(phone);
            if (account == null)
            {
                return null;
            }
            else
            {
                if (account.MatKhau == password)
                {
                    Account acc = new Account();
                    var tokenStr = GenerateJWT(account);
                    acc.Id = account.Id;
                    acc.Name = account.HoTen;
                    acc.Username = account.Sđt;
                    acc.Password = account.MatKhau;
                    acc.Token = tokenStr;
                    return acc;
                }
                return null;
            }
        }
        private string GenerateJWT(KhachHang account)
        {
            var issuer = _config["Jwt:Issuer"];
            var audience = _config["Jwt:Audience"];
            var key = Encoding.ASCII.GetBytes
            (_config["Jwt:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                new Claim("Id", account.Id.ToString()),
                new Claim("Email", account.Email.ToString()),
                new Claim("UserName", account.HoTen.ToString()),
                new Claim("Sdt", account.Sđt.ToString()),
                new Claim(JwtRegisteredClaimNames.Jti,
                Guid.NewGuid().ToString())
             }),
                Expires = DateTime.UtcNow.AddDays(5),
                Issuer = issuer,
                Audience = audience,
                SigningCredentials = new SigningCredentials
                (new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha512Signature)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var jwtToken = tokenHandler.WriteToken(token);
            var stringToken = tokenHandler.WriteToken(token);
            return stringToken;
        }



        public async Task<Account> Register(KhachHangDto khachHang)
        {
            var isExist = await _repository.FindBySDTAsync(khachHang.Sđt);
            if (isExist != null)
                throw new Exception("phone number is exist");
            var khachHangNew = new KhachHang()
            {
                HoTen = khachHang.HoTen,
                Sđt = khachHang.Sđt,
                GioiTinh = khachHang.GioiTinh,
                Ngaysinh = khachHang.Ngaysinh,
                Email = khachHang.Email,
                MatKhau = khachHang.MatKhau
            };
            await _db.KhachHangs.AddAsync(khachHangNew);
            await _db.SaveChangesAsync();

            Account acc = new Account();
            var tokenStr = GenerateJWT(khachHangNew);
            acc.Id = khachHangNew.Id;
            acc.Name = khachHangNew.HoTen;
            acc.Username = khachHangNew.Sđt;
            acc.Password = khachHangNew.MatKhau;
            acc.Token = tokenStr;
            return acc;
        }
    }
}
