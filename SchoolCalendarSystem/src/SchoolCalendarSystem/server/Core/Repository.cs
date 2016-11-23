using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using SchoolCalendarSystem.server.Core.Interfaces;

namespace SchoolCalendarSystem.server.Core
{
    public class Repository : IRepository<IEntity>
    {
        private readonly IUnitOfWork _uow;
        private readonly DbSet<IEntity> _dbSet;
        public Repository(IDatabaseContext dbContext, IUnitOfWork uow)
        {
            _uow = uow;
            _dbSet = dbContext.Set<IEntity>();
        }

        public void Add(IEntity entity)
        {
            _dbSet.Add(entity);
            _uow.SaveChanges();
        }

        public void Update(IEntity entity)
        {
            _dbSet.Update(entity);
            _uow.SaveChanges();
        }

        public void Delete(IEntity entity)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<IEntity> Get(Expression<Func<IEntity, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public IEntity SingleOrDefault(Expression<Func<IEntity, bool>> filter)
        {
            return _dbSet.SingleOrDefault(filter);
        }
    }
}
