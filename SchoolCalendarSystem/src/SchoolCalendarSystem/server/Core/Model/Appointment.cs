using System;
using System.ComponentModel.DataAnnotations;
using SchoolCalendarSystem.server.Core.Interfaces;

namespace SchoolCalendarSystem.server.Core.Model
{
    public class Appointment : IEntity
    {
        [Key]
        public int Id { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public string Description { get; set; }
    }
}
