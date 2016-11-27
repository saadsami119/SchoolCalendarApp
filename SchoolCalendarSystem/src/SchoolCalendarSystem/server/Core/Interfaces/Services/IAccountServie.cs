using SchoolCalendarSystem.server.Core.Model;

namespace SchoolCalendarSystem.server.Core.Interfaces.Services
{
    public interface IAccountServie
    {
        bool IsAuthenticUser(User user);
        void RegisterUser(User user);

    }
}
