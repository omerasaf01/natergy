using NatEnergy.DataAccess.Entities.Models;

namespace NatEnergy.DataAccess.Entities.Responses;

public class UserResponse : Response
{
    public User? UserData { get; set; }
    public string? AccessToken { get; set; } = string.Empty;
    public string? RefreshToken { get; set; } = string.Empty;
}
