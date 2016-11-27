using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace SchoolCalendarSystem.server.Core.Interfaces
{
    public interface IRepository<TEntity>
    {
        void Add(TEntity entity);

        void Update(TEntity entity);

        void Delete(TEntity entity);

        IEnumerable<TEntity> Get(Expression<Func<TEntity, bool>> filter = null);
        
        TEntity SingleOrDefault(Expression<Func<TEntity, bool>> filter = null);
    }
}
