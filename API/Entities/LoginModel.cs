﻿using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class LoginModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
