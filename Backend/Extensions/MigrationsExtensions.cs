using System;
using Backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Extensions;

public static class MigrationsExtensions
{
    public static async Task MigrateDbAsync(this WebApplication app){
        using var scope = app.Services.CreateScope();
        var DbContext = scope.ServiceProvider.GetRequiredService<ApplicationDBContext>();
        await DbContext.Database.MigrateAsync();

}
}
