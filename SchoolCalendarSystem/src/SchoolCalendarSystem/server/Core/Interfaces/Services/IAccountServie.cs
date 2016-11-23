using SchoolCalendarSystem.server.Core.Model;

namespace SchoolCalendarSystem.server.Core.Interfaces.Services
{
    public interface IAccountServie
    {
        void VerifyUser(User user);
        void RegisterUser(User user);

    }
}
