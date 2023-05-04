using NatEnergy.DataAccess.Entities.Enums;

namespace NatEnergy.DataAccess.Entities.Responses;

public class Response
{
    public bool IsSuccess { get; set; }
    public ErrorCodes? ErrorCode { get; set; }
    public string? ErrorMessage { get; set; } = string.Empty;
}
