using Microsoft.AspNetCore.Mvc;
using NatEnergy.DataAccess.Entities.Enums;
using NatEnergy.DataAccess.Entities.Interfaces.Repositories;
using NatEnergy.DataAccess.Entities.Models;
using NatEnergy.DataAccess.Entities.Responses;

namespace NatEnergy.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoryController : ControllerBase
{
    private readonly ICategoryRepository _categoryyRepository;
    public CategoryController(ICategoryRepository categoryRepository)
    {
        _categoryyRepository = categoryRepository;
    }

    [HttpGet]
    public async Task<IActionResult> GetCategory()
    {
        try
        {
            List<Category> categories = await _categoryyRepository.GetAllAsync();

            return Ok(
                new CategoryResponse
                {
                    IsSuccess = true,
                    Categories = categories
                }
            );
        }
        catch (System.Exception ex)
        {
            return BadRequest(
                new CategoryResponse
                {
                    ErrorCode = ErrorCodes.ServerError,
                    ErrorMessage = ex.Message,
                    IsSuccess = false
                }
            );
        }
    }

    [HttpPost]
    public async Task<IActionResult> SaveCategory(Category model)
    {
        try
        {
            await _categoryyRepository.AddAsync(model);
            
            return Ok(
                new CategoryResponse
                {
                    IsSuccess = true
                }
            );
        }
        catch (System.Exception ex)
        {
            return BadRequest(
                new CategoryResponse
                {
                    ErrorCode = ErrorCodes.ServerError,
                    ErrorMessage = ex.Message,
                    IsSuccess = false
                }
            );
        }
    }
}
