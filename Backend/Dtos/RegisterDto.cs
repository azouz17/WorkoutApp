using System;

namespace Backend.Dtos;

public record class RegisterDto(
    string Email,
    string Password
);
