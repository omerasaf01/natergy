using System.Security.Cryptography;
using Microsoft.AspNetCore.Identity;
using NatEnergy.DataAccess.Entities.Dtos;
using NatEnergy.DataAccess.Entities.Interfaces.Services;
using NatEnergy.DataAccess.Entities.Models;

namespace NatEnergy.Business.Services;

public class UserServices : IUserServices
{
    private readonly UserManager<User> _userManager;
    public UserServices(UserManager<User> userManager)
    {
        _userManager = userManager;
    }

    public async Task<bool> SaveUser(Register model)
    {
        var randomNumber = new byte[64];
        using var rng = RandomNumberGenerator.Create();
        rng.GetBytes(randomNumber);
        string token = Convert.ToBase64String(randomNumber);

        User user = new User
        {
            UserName = model.Username,
            Name = model.Name,
            SurName = model.Surname,
            Email = model.Email,
            RefreshToken = token,
            RefreshTokenExpiredDate = DateTime.UtcNow.AddDays(7)
        };

        if (token == "false")
        {
            return false;
        }
        var res = await _userManager.CreateAsync(user, model.Password);

        if (res.Succeeded)
        {
            return true;
        }
        return false;
    }

    public async Task<User> GetUserByEmail(string email)
    {
        return await _userManager.FindByEmailAsync(email);
    }

    public async Task<bool> VerifyUser(string email, string password)
    {
        User user = await _userManager.FindByEmailAsync(email);
        return await _userManager.CheckPasswordAsync(user, password);
    }

    public async Task<string> CreateRefreshToken(string email)
    {
        var randomNumber = new byte[64];
        using var rng = RandomNumberGenerator.Create();
        rng.GetBytes(randomNumber);
        string token = Convert.ToBase64String(randomNumber);

        User user = await _userManager.FindByEmailAsync(email);
        user.RefreshToken = token;
        user.RefreshTokenExpiredDate = DateTime.UtcNow.AddDays(7);
        var res = await _userManager.UpdateAsync(user);

        if (!res.Succeeded)
        {
            return "false";
        }
        return token;
    }

    public async Task<bool> RefreshTokenVerify(string token, string email)
    {
        User user = await _userManager.FindByEmailAsync(email);
        if (user.RefreshTokenExpiredDate == null || user.RefreshToken == null)
        {
            return false;
        }
        else
        {
            int time = DateTime.Compare(user.RefreshTokenExpiredDate, DateTime.UtcNow);

            if (time <= 0)
            {
                return false;
            }
            return true;
        }
    }
}
