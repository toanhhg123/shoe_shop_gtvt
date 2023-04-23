using ShoesSopAPI.Models;

namespace ShoesSopAPI.Repository.Interface
{
    public interface IAuthenticationRepository
    {
         Task<KhachHang> FindBySDTAsync(string SDT);
    }
}
