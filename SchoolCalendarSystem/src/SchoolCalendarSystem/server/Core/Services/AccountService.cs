﻿using System;
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

        public User GetUser(User user)
        {
            var foundUser = this._useRepository.SingleOrDefault(u => u.Username == user.Username && u.Password == user.Password);
            return foundUser;
        }

        public void RegisterUser(User user)
        {
            this._useRepository.Add(user);
        }
    }
}
