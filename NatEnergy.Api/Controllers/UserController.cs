using Microsoft.AspNetCore.Mvc;
using NatEnergy.DataAccess.Entities.Enums;
using NatEnergy.DataAccess.Entities.Interfaces.Services;
using NatEnergy.DataAccess.Entities.Models;
using NatEnergy.DataAccess.Entities.Responses;

namespace NatEnergy.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserServices _userServices;
    public UserController(IUserServices userServices, ILogger<User> logger)
    {
        _userServices = userServices;
    }

    [HttpGet("GetUserByEmail/{email}")]
    public async Task<IActionResult> GetUserByEmail(string email)
    {
        try
        {
            User user = await _userServices.GetUserByEmail(email);
            return Ok(
                new UserResponse
                {
                    IsSuccess = true,
                    UserData = user
                }
            );
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
