using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShoesSopAPI.Data;
using ShoesSopAPI.Models;
using ShoesSopAPI.Services.Interfaces;

namespace ShoesSopAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GioHangsController : ControllerBase
    {
        private readonly IGioHangsService _gioHangsService;
        private readonly DBShop _dBShop;
        public GioHangsController(IGioHangsService gioHangsService, DBShop dBShop)
        {
            _gioHangsService = gioHangsService;
            _dBShop = dBShop;
        }

        // GET: api/GioHangs
        [HttpGet]
        public async Task<IEnumerable<GioHang>> GetGioHangs()
        {
            return await _gioHangsService.GetListAllGioHang();
        }

        // GET: api/GioHangs/id khach hang 
        [HttpGet("{id}")]
        public async Task<IEnumerable<SanPham>> GetGioHang(string id)
        {
            return await _gioHangsService.GetListByCustomerId(id);
        }

        /*[Authorize]
        [HttpPut("{id}")]*/
        /*  public async Task<IActionResult> PutGioHang(int id, GioHang gioHang)
          {
              if (id != gioHang.Id)
              {
                  return BadRequest();
              }

              _context.Entry(gioHang).State = EntityState.Modified;

              try
              {
                  await _context.SaveChangesAsync();
              }
              catch (DbUpdateConcurrencyException)
              {
                  if (!GioHangExists(id))
                  {
                      return NotFound();
                  }
                  else
                  {
                      throw;
                  }
              }

              return NoContent();
          }*/

        // POST: api/GioHangs
        [HttpPost]
        [Authorize]
        public async Task<ActionResult> PostGioHang(int sanPhamId)
        {
            var khachHangId = User.FindFirst("Id")?.Value;
            if (khachHangId == null) throw new Exception("not dound user");
            var result = await _gioHangsService.PostProductToGioHang(sanPhamId, Convert.ToInt32(khachHangId));
            if (result != null)
                return NoContent();
            return NotFound();
        }

        // DELETE: api/GioHangs/ id san pham 
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGioHang(int id)
        {
            var result = await _dBShop.GioHangs.FirstOrDefaultAsync(x => x.Id == id);
            if (result == null)
            {
                return NotFound();
            }
            _dBShop.GioHangs.Remove(result);
            await _dBShop.SaveChangesAsync();
            return NoContent();
        }

    }
}
