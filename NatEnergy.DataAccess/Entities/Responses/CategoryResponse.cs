using NatEnergy.DataAccess.Entities.Models;

namespace NatEnergy.DataAccess.Entities.Responses;

public class CategoryResponse: Response
{
    public List<Category>? Categories { get; set; }
}
