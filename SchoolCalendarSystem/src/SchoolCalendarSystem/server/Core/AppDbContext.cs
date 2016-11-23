﻿using Microsoft.EntityFrameworkCore;
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

    }
}