using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using SchoolCalendarSystem.server.Core.Interfaces;
using SchoolCalendarSystem.server.Core.Model;

namespace SchoolCalendarSystem.server.Core
{
    public class AppDbContext : DbContext, IDatabaseContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=./students_calendar.db");
        }

        public DbSet<User> Users { get; set; }

        public DbSet<Appointment> Appointments { get; set; }

    }
}
