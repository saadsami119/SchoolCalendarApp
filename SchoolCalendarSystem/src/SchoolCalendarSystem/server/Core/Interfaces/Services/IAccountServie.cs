using SchoolCalendarSystem.server.Core.Model;

namespace SchoolCalendarSystem.server.Core.Interfaces.Services
{
    public interface IAccountServie
    {
        User GetUser(User user);
        void RegisterUser(User user);

    }
}
