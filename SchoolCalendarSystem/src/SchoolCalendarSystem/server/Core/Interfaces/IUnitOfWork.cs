using System;
using SchoolCalendarSystem.server.Core.Model;

namespace SchoolCalendarSystem.server.Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<User> UserRepository { get; set; }

        void SaveChanges();
    }
}
