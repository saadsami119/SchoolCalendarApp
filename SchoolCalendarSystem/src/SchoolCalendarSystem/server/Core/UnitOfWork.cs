using SchoolCalendarSystem.server.Core.Interfaces;
using SchoolCalendarSystem.server.Core.Model;

namespace SchoolCalendarSystem.server.Core
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly IDatabaseContext _dbContext;

        public IRepository<User> UserRepository => new Repository<User>(_dbContext);
        public IRepository<Appointment> AppointmentRepository => new Repository<Appointment>(_dbContext);

        public UnitOfWork(AppDbContext databaseContext)
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
