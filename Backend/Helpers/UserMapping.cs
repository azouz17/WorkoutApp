using System;
using Backend.Dtos;
using Backend.Entities;

namespace Backend.Helpers;

public static class UserMapping
{
     public static UserDto ToDto( this User user){
        return new UserDto(user.Email, user.Id);
    }
}
