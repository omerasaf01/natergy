using NatEnergy.DataAccess.Entities.Interfaces.Repositories;
using NatEnergy.DataAccess.Entities.Models;

namespace NatEnergy.DataAccess.Repositories;

public class CategoryRepository : Repository<Category>, ICategoryRepository
{
    public CategoryRepository(ApplicationDbContext context) : base(context)
    {
        
    }
}
