using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using NatEnergy.DataAccess.Entities.Models;

namespace NatEnergy.DataAccess;

public class ApplicationDbContext : IdentityDbContext<User>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    public DbSet<Category> Categories { get; set; }
    public DbSet<Discusion> Discusions { get; set; }
    protected override void OnModelCreating(ModelBuilder builder)
    {
        SetTableNamesAsSingle(builder);

        base.OnModelCreating(builder);
    }
    private static void SetTableNamesAsSingle(ModelBuilder builder)
    {
        // Use the entity name instead of the Context.DbSet<T> name
        foreach (var entityType in builder.Model.GetEntityTypes())
        {
            builder.Entity(entityType.ClrType).ToTable(entityType.ClrType.Name);
        }
    }

    // #region User Db Config
    // private void ConfigureUser(EntityTypeBuilder<Users> builder)
    // {
    //     // check for conventions - http://www.entityframeworktutorial.net/efcore/configure-many-to-many-relationship-in-ef-core.aspx

    //     // add self reference table configuration
    //     // https://github.com/aspnet/EntityFrameworkCore/issues/10698 
    //     // https://stackoverflow.com/questions/27613117/introducing-foreign-key-constraint-may-cause-cycles-or-multiple-cascade-paths-s

    //     builder.HasKey(k => k.Id);
    // }
    // #endregion
}