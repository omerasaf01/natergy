using Microsoft.AspNetCore.Mvc;
using NatEnergy.DataAccess.Entities.Enums;
using NatEnergy.DataAccess.Entities.Interfaces.Repositories;
using NatEnergy.DataAccess.Entities.Models;
using NatEnergy.DataAccess.Entities.Responses;

namespace NatEnergy.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DiscusionController : ControllerBase
{
    private readonly IDiscusionRepository _discusionRepository;
    public DiscusionController(IDiscusionRepository discusionRepository)
    {
        _discusionRepository = discusionRepository;
    }

    [HttpGet]
    public async Task<IActionResult> GetDiscusion()
    {
        try
        {
            List<Discusion> discusions = await _discusionRepository.GetAllAsync();

            return Ok(
                new DiscusionResponse
                {
                    IsSuccess = true,
                    Discusions = discusions
                }
            );
        }
        catch (System.Exception ex)
        {
            return BadRequest(
                new DiscusionResponse
                {
                    ErrorCode = ErrorCodes.ServerError,
                    ErrorMessage = ex.Message,
                    IsSuccess = false
                }
            );
        }
    }

    [HttpPost]
    public async Task<IActionResult> SaveDiscusion(Discusion model)
    {
        try
        {
            await _discusionRepository.AddAsync(model);
            
            return Ok(
                new DiscusionResponse
                {
                    IsSuccess = true
                }
            );
        }
        catch (System.Exception ex)
        {
            return BadRequest(
                new DiscusionResponse
                {
                    ErrorCode = ErrorCodes.ServerError,
                    ErrorMessage = ex.Message,
                    IsSuccess = false
                }
            );
        }
    }
}
