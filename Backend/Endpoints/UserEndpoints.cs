using System;
using Backend.Dtos;
using Backend.Entities;
using Backend.Helpers;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Backend.Endpoints;

public static class UserEndpoints
{

    public static RouteGroupBuilder MapUserEndpoints (this WebApplication app){
        var group = app.MapGroup("user");

        group.MapGet("",  (ApplicationDBContext dbContext) =>
            {
                 var users = dbContext.Users.Select(user => user.ToDto()).ToList();
                 return users;
            });

        group.MapDelete("Delete/{id}", async(string id , ApplicationDBContext dbContext) =>{

                await dbContext.Users.Where(user => user.Id == id).ExecuteDeleteAsync();
                await dbContext.SaveChangesAsync();
                return Results.NoContent();
        });

        return group;
    }

}
