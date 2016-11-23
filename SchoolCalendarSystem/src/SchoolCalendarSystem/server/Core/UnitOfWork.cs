using SchoolCalendarSystem.server.Core.Interfaces;
using SchoolCalendarSystem.server.Core.Model;

namespace SchoolCalendarSystem.server.Core
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly IDatabaseContext _dbContext;
        public IRepository<User> UserRepository { get; set; }

        public UnitOfWork(IDatabaseContext databaseContext)
        {
            _dbContext = databaseContext;
        }

        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }

        public void Dispose()
        {
           
        }
    }
}
