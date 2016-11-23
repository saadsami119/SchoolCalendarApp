using System;
using Microsoft.EntityFrameworkCore;

namespace SchoolCalendarSystem.server.Core.Interfaces
{
    public interface IDatabaseContext : IDisposable
    {
        DbSet<TEntity> Set<TEntity>() where TEntity : class;
        int SaveChanges();
    }
}
