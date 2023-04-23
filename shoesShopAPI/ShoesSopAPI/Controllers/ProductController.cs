using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShoesSopAPI.Data;
using ShoesSopAPI.Models;
using ShoesSopAPI.Services.Interfaces;

namespace ShoesSopAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly DBShop _dbShop;
        public ProductController(IProductService productService, DBShop dB)
        {
            _dbShop = dB;
            _productService = productService;
        }


        // GET: api/Product
        [HttpGet]
        public async Task<IEnumerable<SanPham>> GetSanPham()
        {
            return await _productService.GetListProductBySale();
        }

        // GET: api/Product/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SanPham>> GetSanPham(int id)
        {
            var sanPham = await _productService.GetProductById(id);

            if (sanPham == null)
            {
                return NotFound();
            }

            return sanPham;
        }
        // danh sach san pham theo loai
        [Route("loai")]
        [HttpGet]
        public async Task<IEnumerable<SanPham>> GetLoaiSanPhams(int id)
        {
            var list = await _productService.GetListProductByType(id);
            return list;
        }
        // danh sach san pham moi 
        [Route("new")]
        [HttpGet]
        public async Task<IEnumerable<SanPham>> GetListSanPhamMoi()
        {
            var list = await _productService.GetListProductByNgayTao();
            return list;
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSanPham(int id, SanPham sanPham)
        {
            var sp = await _dbShop.SanPhams.FirstOrDefaultAsync(x => x.Id == id);
            if (sp == null) return StatusCode(404, "not found san pham");
            _dbShop.Entry(sp).CurrentValues.SetValues(sanPham);
            await _dbShop.SaveChangesAsync();
            return Ok(sp);
        }

        // POST: api/Product
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SanPham>> PostSanPham(SanPham sanPham)
        {
            var product = await _dbShop.SanPhams.AddAsync(sanPham);
            await _dbShop.SaveChangesAsync();
            return Ok(sanPham);
            //  return product;
        }

        // DELETE: api/Product/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSanPham(int id)
        {
            Boolean sanPham = _productService.DeleteProduct(id);
            if (sanPham == null)
            {
                return NotFound();
            }

            return NoContent();
        }

    }
}
