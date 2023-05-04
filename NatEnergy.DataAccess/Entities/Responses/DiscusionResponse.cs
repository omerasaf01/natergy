using NatEnergy.DataAccess.Entities.Models;

namespace NatEnergy.DataAccess.Entities.Responses;

public class DiscusionResponse: Response
{
    public List<Discusion>? Discusions { get; set; }
    public Discusion? Discusion { get; set; }
}
