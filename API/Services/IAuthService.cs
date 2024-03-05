using API.Entities;

namespace API.Services
{
    public interface IAuthService
    {
        Task<AuthModel> ReginsterAsync(RegisterModel model);
        Task<AuthModel> LoginAsync(LoginModel model);
        Task<string> AddRoleAsync(AddRoleModel model);

    }
}
