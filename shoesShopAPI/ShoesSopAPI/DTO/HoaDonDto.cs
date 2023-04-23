using ShoesSopAPI.Models;

namespace ShoesSopAPI.DTO
{
    public class HoaDonDto
    {
        public int Id { get; set; }
        public int SoLuong { get; set; }
        public int SanPhamId { get; set; }
        public int KhachHangId { get; set; }

        public  KhachHang KhachHang { get; set; }
        public  SanPham SanPham { get; set; }
    }
}
