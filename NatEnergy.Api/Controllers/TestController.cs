using Microsoft.AspNetCore.Mvc;

namespace NatEnergy.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TestController : ControllerBase
{
    [HttpGet]
    public IActionResult GetTest()
    {
        return Ok(new { name = "Ömer"});
    }
}
