using System.Collections.Generic;
using SchoolCalendarSystem.server.Core.Model;

namespace SchoolCalendarSystem.server.Core.Interfaces.Services
{
    public interface IAppoitmentService
    {
        void CreateAppointment(Appointment appointment);

        IEnumerable<Appointment> GetMonthlyAppointmentsForUser(int month , int year, int userId);
       
    }
}
