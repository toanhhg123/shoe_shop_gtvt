namespace ShoesSopAPI.DTO
{
    public class SanPhamDto
    {
        public int Id { get; set; }
        public string TenSanPham { get; set; }
        public int Gia { get; set; }
        public int? Sale { get; set; }
        public int Loai { get; set; }
        public string MoTa { get; set; }
        public string Anh { get; set; }
        public DateTime? NgayTao { get; set; }
        public int? CreatedbyId { get; set; }
    }
}
