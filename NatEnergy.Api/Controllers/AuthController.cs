using Microsoft.AspNetCore.Mvc;
using NatEnergy.DataAccess.Entities.Dtos;
using NatEnergy.DataAccess.Entities.Enums;
using NatEnergy.DataAccess.Entities.Interfaces.Services;
using NatEnergy.DataAccess.Entities.Models;
using NatEnergy.DataAccess.Entities.Responses;

namespace NatEnergy.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IUserServices _userServices;
    private readonly ITokenServices _tokenServices;
    public AuthController(
        IUserServices userServices,
        ITokenServices tokenServices
    )
    {
        _userServices = userServices;
        _tokenServices = tokenServices;
    }

    [HttpPost(nameof(Login))]
    public async Task<IActionResult> Login([FromBody] Login model)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return UnprocessableEntity(ModelState);
            }
            bool check = await _userServices.VerifyUser(model.Email, model.Password);
            if (check == true)
            {
                string token = await _tokenServices.CreateToken(model.Email);
                string refreshToken = await _userServices.CreateRefreshToken(model.Email);
                if (refreshToken != "false")
                {
                    return Ok(
                        new UserResponse
                        {
                            IsSuccess = true,
                            AccessToken = token,
                            RefreshToken = refreshToken
                        }
                    );
                }
                return BadRequest(
                    new UserResponse
                    {
                        IsSuccess = false,
                        ErrorCode = ErrorCodes.ServerError,
                        ErrorMessage = "Pls try again few moment later"
                    }
                );
            }
            return Unauthorized();
        }
        catch (Exception ex)
        {
            return BadRequest(
                new UserResponse
                {
                    IsSuccess = false,
                    ErrorCode = ErrorCodes.ServerError,
                    ErrorMessage = ex.Message
                }
            );
        }
    }

    //TODO: Rol sistemi entegre edilicek
    [HttpPost(nameof(Register))]
    public async Task<IActionResult> Register([FromBody] Register user)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return UnprocessableEntity(ModelState);
            }
            bool result = await _userServices.SaveUser(user);
            if (result != true)
            {
                return BadRequest(
                    new UserResponse
                    {
                        IsSuccess = false,
                        ErrorCode = ErrorCodes.ServerError,
                        ErrorMessage = "Please try few moments later"
                    }
                );
            }
            return Ok(
                new UserResponse
                {
                    IsSuccess = true
                }
            );
        }
        catch (Exception ex)
        {
            return BadRequest(
                new UserResponse
                {
                    IsSuccess = false,
                    ErrorCode = ErrorCodes.ServerError,
                    ErrorMessage = ex.Message
                }
            );
        }
    }

    [HttpPost("token")]
    public async Task<IActionResult> RefreshToken([FromBody] RefreshToken model)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return UnprocessableEntity(ModelState);
            }
            bool statu = await _userServices.RefreshTokenVerify(model.Token, model.Email);
            if (statu == true)
            {
                string token = await _tokenServices.CreateToken(model.Email);
                return Ok(
                    new UserResponse
                    {
                        IsSuccess = true,
                        AccessToken = token
                    }
                );
            }
            return BadRequest(new UserResponse
            {
                IsSuccess = false,
                ErrorCode = ErrorCodes.RefreshTokenIsValid,
                ErrorMessage = "Refresh token is not valid"
            });
        }
        catch (System.Exception ex)
        {
            return BadRequest(
                new UserResponse
                {
                    IsSuccess = false,
                    ErrorCode = ErrorCodes.ServerError,
                    ErrorMessage = ex.Message
                }
            );
        }
    }
}
