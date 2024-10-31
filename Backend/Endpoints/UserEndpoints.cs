using System;
using Backend.Dtos;
using Backend.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Backend.Endpoints;

public static class UserEndpoints
{

    public static RouteGroupBuilder MapUserEndpoints (this WebApplication app){
        var group = app.MapGroup("user");

        group.MapPost("/login", async (LoginDto loginDto, SignInManager<User> signInManager) =>
            {
                var result = await signInManager.PasswordSignInAsync(loginDto.Email, loginDto.Password, isPersistent: false, lockoutOnFailure: false);

                if (result.Succeeded)
                {
                    return Results.Ok(new { message = "Login successful" });
                }

                return Results.Unauthorized();
            });
        return group;
    }

}
