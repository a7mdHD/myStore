﻿namespace API.Entities
{
    public class AuthModel
    {
        public string Message { get; set; }
        public bool IsAuthenticated { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public List<string> Roles { get; set; }
        public string token { get; set; }
        public DateTime ExpiresOn { get; set; }
    }
}