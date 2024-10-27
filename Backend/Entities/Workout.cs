using System;

namespace Backend.Entities;

public class Workout
{
    public int Id {get ; set;}
    public required string UserId {get; set;}
    public User? User {get ; set;}
    public int WorkoutTypeId {get ; set;}
    public required WorkoutType? WorkoutType {get ; set;}
    public required int Length {get ; set;}
    public DateOnly Date {get; set;}

    public int Calories {get; set;}

}
