using ShoesSopAPI.Models;

namespace ShoesSopAPI.Repository.Interface
{
    public interface IProductRepository
    {
        Task<IEnumerable<SanPham>> GetListProductByNgayTao();
        Task<SanPham> GetProductById(int id);
        Task<IEnumerable<SanPham>> GetListProductByType(int type);
        Task<IEnumerable<SanPham>> GetListProductBySale();
        Task<SanPham> PostProduct(SanPham product);
        Boolean DeleteProduct(int id);
    }
}
