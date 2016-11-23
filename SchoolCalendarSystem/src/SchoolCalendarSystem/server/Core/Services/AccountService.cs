using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SchoolCalendarSystem.server.Core.Interfaces;
using SchoolCalendarSystem.server.Core.Interfaces.Services;
using SchoolCalendarSystem.server.Core.Model;

namespace SchoolCalendarSystem.server.Core.Services
{
    public class AccountService : IAccountServie
    {
        private readonly IRepository<User> _useRepository;
        
        public AccountService(IUnitOfWork uow)
        {
            _useRepository = uow.UserRepository;
        }
        
        public void VerifyUser(User user)
        {
            this._useRepository.SingleOrDefault(u=>u.Password == user.Username && u.Password == user.Password);  
        }

        public void RegisterUser(User user)
        {
            this._useRepository.Add(user);
        }
    }
}
