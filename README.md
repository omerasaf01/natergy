```sh
dotnet ef migrations remove --project NatEnergy.DataAccess/NatEnergy.DataAccess.csproj --startup-project NatEnergy.Api/NatEnergy.Api.csproj --force &&
dotnet ef migrations add NatEnergy_Template --project NatEnergy.DataAccess/NatEnergy.DataAccess.csproj --startup-project NatEnergy.Api/NatEnergy.Api.csproj &&
dotnet ef database update --project NatEnergy.DataAccess/NatEnergy.DataAccess.csproj --startup-project NatEnergy.Api/NatEnergy.Api.csproj
```