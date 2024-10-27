using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Backend.Entities;

public class ApplicationDBContext : IdentityDbContext<User>
{
public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options):base(options)
{

}

public DbSet<Workout> Workouts { get; set; }
public DbSet<WorkoutType> WorkoutTypes { get; set; }
  protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<WorkoutType>().HasData(
            new {Id = 1,  Name= "Indoor Run"},
            new {Id = 2,  Name= "Outdoor Run"},
            new {Id = 3,  Name= "Swimming"},
            new {Id = 4,  Name= "Football"},
            new {Id = 5,  Name= "Weighlifting"},
            new {Id = 6,  Name= "Tennis"},
            new {Id = 7,  Name= "Basektball"},
            new {Id = 8,  Name= "Volleyball"},
            new {Id = 9,  Name= "Squash"},
            new {Id = 10,  Name= "Walk"}
        );

        modelBuilder.Entity<Workout>()
        .HasOne(w => w.User)
        .WithMany(u => u.Workouts)
        .HasForeignKey(w => w.UserId)
        .OnDelete(DeleteBehavior.Cascade);
}
    }


