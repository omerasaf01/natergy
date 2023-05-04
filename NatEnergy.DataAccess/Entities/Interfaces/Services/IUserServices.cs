using NatEnergy.DataAccess.Entities.Dtos;
using NatEnergy.DataAccess.Entities.Models;

namespace NatEnergy.DataAccess.Entities.Interfaces.Services;

public interface IUserServices
{
    Task<bool> SaveUser(Register model);
    Task<User> GetUserByEmail(string email);
    Task<bool> VerifyUser(string email, string password);
    Task<string> CreateRefreshToken(string email);
    Task<bool> RefreshTokenVerify(string token, string email);
}
