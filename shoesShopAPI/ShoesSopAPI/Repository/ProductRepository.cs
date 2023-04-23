using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using ShoesSopAPI.Data;
using ShoesSopAPI.Models;
using ShoesSopAPI.Repository.Interface;

namespace ShoesSopAPI.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly DBShop _dBShop;

        public ProductRepository(DBShop dBShop)
        {
            _dBShop = dBShop;
        }

        public bool DeleteProduct(int id)
        {
            SanPham sanPham =  _dBShop.SanPhams.FirstOrDefault(n => n.Id == id);
            if (sanPham == null)
                return false;
            else
            {
                _dBShop.SanPhams.Remove(sanPham);
                _dBShop.SaveChangesAsync();
                return true;
            }
        }

        public async Task<IEnumerable<SanPham>> GetListProductByNgayTao()
        {
           return await _dBShop.SanPhams.OrderByDescending(n => n.NgayTao).ToListAsync();
           
        }
        public async Task<IEnumerable<SanPham>> GetListProductBySale()
        {
            return await _dBShop.SanPhams.OrderByDescending(n => n.Sale).ToListAsync();
        }

        public async Task<IEnumerable<SanPham>> GetListProductByType(int type)
        {
            return await _dBShop.SanPhams.Where(n => n.Loai == type).ToListAsync();
        }

        public async Task<SanPham> GetProductById(int id)
        {
            return await _dBShop.SanPhams.FindAsync(id);
        }

        public async Task<SanPham> PostProduct(SanPham product)
        {
            _dBShop.SanPhams.Add(product);
            await _dBShop.SaveChangesAsync();
            return product;
        }
    }
}
