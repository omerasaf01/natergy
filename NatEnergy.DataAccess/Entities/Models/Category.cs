namespace NatEnergy.DataAccess.Entities.Models;

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public ICollection<Discusion>? Discusions { get; set; }
}
