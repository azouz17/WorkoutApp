using System;

namespace Backend.Dtos;

public record class LoginDto(
    string Email,
    string Password
);
