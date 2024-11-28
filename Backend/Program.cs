using Backend.Endpoints;
using Backend.Entities;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.BearerToken;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy  =>
                      {
                          policy.WithOrigins("http://localhost:3000").AllowAnyHeader()
                                                  .AllowAnyMethod();;
                      });
});

// Configure authentication to use Identity.Bearer explicitly
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = "Identity.Bearer";
    options.DefaultChallengeScheme = "Identity.Bearer";
})
.AddBearerToken("Identity.Bearer");

// Add Authorization to enable [Authorize] attribute usage
builder.Services.AddAuthorization();

// Configure Identity with Entity Framework storage
builder.Services.AddIdentityCore<User>()
    .AddEntityFrameworkStores<ApplicationDBContext>()
    .AddApiEndpoints(); // Enable Identity API endpoints

var ConnString = builder.Configuration.GetConnectionString("WorkoutStore");
builder.Services.AddDbContext<ApplicationDBContext>(options => 
    options.UseSqlite(ConnString));

var app = builder.Build();

app.UseAuthentication(); // Adds authentication middleware
app.UseAuthorization();  // Adds authorization middleware

// Map default Identity API endpoints
app.MapIdentityApi<User>();
app.MapUserEndpoints();
app.UseCors(MyAllowSpecificOrigins);

app.Run();