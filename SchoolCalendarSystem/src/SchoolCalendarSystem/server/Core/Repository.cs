using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using SchoolCalendarSystem.server.Core.Interfaces;

namespace SchoolCalendarSystem.server.Core
{
    public class Repository <TEntity> : IRepository<TEntity> where TEntity : class ,IEntity
    {
        private readonly DbSet<TEntity> _dbSet;
        public Repository(IDatabaseContext dbContext)
        {
            _dbSet = dbContext.Set<TEntity>();
        }

        public void Add(TEntity entity)
        {
            _dbSet.Add(entity);
        }

        public void Update(TEntity entity)
        {
            _dbSet.Update(entity);
        }

        public void Delete(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntity> Get(Expression<Func<TEntity, bool>> filter = null)
        {
            throw new NotImplementedException();
        }

        public TEntity SingleOrDefault(Expression<Func<TEntity, bool>> filter = null)
        {
            return _dbSet.SingleOrDefault(filter);
        }

    }
}
