﻿using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class RegisterModel
    {
        [Required, StringLength(100)]
        public string FirstName { get; set; }
        [Required, StringLength(100)]
        public string LastName { get; set; }
        [Required, StringLength(100)]
        public string UserName { get; set; }
        [Required, StringLength(280)]
        public string Email { get; set; }
        [Required, StringLength(250)]
        public string Password { get; set; }
    }
}
