using NatEnergy.DataAccess.Entities.Interfaces.Repositories;
using NatEnergy.DataAccess.Entities.Models;

namespace NatEnergy.DataAccess.Repositories;

public class DiscusionRepository : Repository<Discusion>, IDiscusionRepository
{
    public DiscusionRepository(ApplicationDbContext context) : base(context)
    {

    }
}
