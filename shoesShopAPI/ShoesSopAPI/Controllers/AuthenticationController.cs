using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShoesSopAPI.Data;
using ShoesSopAPI.DTO;
using ShoesSopAPI.Services.Interfaces;

namespace ShoesSopAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IAuthenticationService _authenticationService;
        public AuthenticationController(IAuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }
        [Route("login")]
        [HttpPost]
        public async Task<ActionResult<Account>> Login(string phone, string password)
        {
            var account = await _authenticationService.Login(phone, password);
            IActionResult response = Unauthorized();

            if (account == null)
            {
                return NotFound();
            }
            //X-Access-Token

            var cookieOpt = new CookieOptions()
            {
                Path = "/",
                IsEssential = true,
                HttpOnly = false,
                Secure = true,
                SameSite = SameSiteMode.None
            };

            Response.Cookies.Append("X-Access-Token", account.Token, cookieOpt);

            return Ok(account);
        }

        [Route("register")]
        [HttpPost]
        public async Task<ActionResult<Account>> Register(KhachHangDto khachHang)
        {
            var account = await _authenticationService.Register(khachHang);
            IActionResult response = Unauthorized();

            if (account == null)
            {
                return NotFound();
            }
            return Ok(account);
        }



    }
}
