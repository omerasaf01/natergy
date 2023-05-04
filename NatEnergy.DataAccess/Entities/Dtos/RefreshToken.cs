using System.ComponentModel.DataAnnotations;

namespace NatEnergy.DataAccess.Entities.Dtos;

public class RefreshToken
{
    [EmailAddress]
    public string Email { get; set; } = string.Empty;

    [Required]
    public string Token { get; set; } = string.Empty;
}
