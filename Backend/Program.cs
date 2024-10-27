using Backend.Entities;
using Backend.Extensions;
using Microsoft.AspNetCore.Identity;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddAuthorization();
builder.Services.AddAuthentication().AddCookie(IdentityConstants.ApplicationScheme);
builder.Services.AddIdentityCore<User>().AddEntityFrameworkStores<ApplicationDBContext>().AddApiEndpoints();

var ConnString = builder.Configuration.GetConnectionString("WorkoutStore");
builder.Services.AddSqlite<ApplicationDBContext>(ConnString);

var app = builder.Build();

await app.MigrateDbAsync();
app.MapIdentityApi<User>();




app.Run();
