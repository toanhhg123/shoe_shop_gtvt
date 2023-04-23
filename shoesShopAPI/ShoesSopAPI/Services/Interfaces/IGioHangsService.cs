using ShoesSopAPI.Models;

namespace ShoesSopAPI.Services.Interfaces
{
    public interface IGioHangsService
    {
        Task<IEnumerable<GioHang>> GetListAllGioHang();
        Task<IEnumerable<SanPham>> GetListByCustomerId(string id);
        Task<GioHang> PostProductToGioHang(int khachHangId, int sanPhamId);
        Task<GioHang> DeleteGioHang(int id);
    }
}
