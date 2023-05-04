using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using NatEnergy.DataAccess.Entities.Interfaces.Services;
using NatEnergy.DataAccess.Entities.Models;

namespace NatEnergy.Business.Services;

public class TokenServices : ITokenServices
{
    private readonly IUserServices _userServices;
    public TokenServices(IUserServices service)
    {
        _userServices = service;
    }
    public async Task<List<Claim>> DecodeToken(string token)
    {
        var handler = new JwtSecurityTokenHandler();
        var splittedToken = token.Split(" ");

        var decodedToken = handler.ReadJwtToken(splittedToken[1]);

        return decodedToken.Claims.ToList();
    }

    public async Task<string> CreateToken(string email)
    {
        var bytes = Encoding.UTF8.GetBytes("7A24432646294A404E635266546A576E5A7234753778214125442A472D4B6150");
        SymmetricSecurityKey key = new SymmetricSecurityKey(bytes);
        SigningCredentials cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        User user = await _userServices.GetUserByEmail(email);

        var Claims = new Claim[]
        {
                new Claim("Id", user.Id.ToString()),
                new Claim("Username", user.UserName),
                new Claim("Name", user.Name),
                new Claim("Surname", user.SurName),
                new Claim("Email", user.Email)
        };

        JwtSecurityToken token = new JwtSecurityToken(
            expires: DateTime.UtcNow.AddDays(1),
            notBefore: DateTime.UtcNow,
            signingCredentials: cred,
            claims: Claims
        );

        JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();
        return handler.WriteToken(token);
    }
}