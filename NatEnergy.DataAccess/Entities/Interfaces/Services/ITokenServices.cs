using System.Security.Claims;

namespace NatEnergy.DataAccess.Entities.Interfaces.Services;

public interface ITokenServices
{
    Task<List<Claim>> DecodeToken(string token);
    Task<string> CreateToken(string email);
}
