using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using SchoolCalendarSystem.server.Core.Interfaces;

namespace SchoolCalendarSystem.server.Core.Model
{
    public class User : IEntity
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        
        public List<Appointment> Appointments { get; set; }
    }
}
