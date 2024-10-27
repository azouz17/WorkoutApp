using System;
using Microsoft.AspNetCore.Identity;

namespace Backend.Entities;

public class User : IdentityUser
{
    public ICollection<Workout> Workouts {get; set;} = [];
}
