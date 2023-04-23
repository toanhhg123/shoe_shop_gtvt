using ShoesSopAPI.Models;

namespace ShoesSopAPI.Services.Interfaces
{
    public interface IProductService
    {
        Task<IEnumerable<SanPham>> GetListProductByNgayTao();
        Task<SanPham> GetProductById(int id);
        Task<IEnumerable<SanPham>> GetListProductByType(int type);
        Task<IEnumerable<SanPham>> GetListProductBySale();
        Task<SanPham> PostProduct(SanPham product);
        Boolean DeleteProduct(int id);

    }
}
