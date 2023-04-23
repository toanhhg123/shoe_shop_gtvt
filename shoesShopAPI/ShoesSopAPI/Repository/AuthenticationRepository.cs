using Microsoft.EntityFrameworkCore;
using ShoesSopAPI.Data;
using ShoesSopAPI.Models;
using ShoesSopAPI.Repository.Interface;

namespace ShoesSopAPI.Repository
{
    public class AuthenticationRepository : IAuthenticationRepository
    {
        private readonly DBShop _dBShop;

        public AuthenticationRepository()
        {
        }

        public AuthenticationRepository(DBShop dBShop)
        {
            _dBShop = dBShop;
        }

        public async Task<KhachHang> FindBySDTAsync(string SDT)
        {
                return await _dBShop.KhachHangs.Where(n => n.Sđt == SDT).FirstOrDefaultAsync();
        }
    }
}
