using Microsoft.AspNetCore.Identity;

namespace NatEnergy.DataAccess.Entities.Models;

public class User: IdentityUser
{
    public string Name { get; set; } = string.Empty;
    public string SurName { get; set; } = string.Empty;
    public bool IsActive { get; set; } = false;
    public string RefreshToken { get; set; } = string.Empty;
    public DateTime RefreshTokenExpiredDate { get; set; }
}
