using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SchoolCalendarSystem.server.Core.Model;

namespace SchoolCalendarSystem.server.Core.Interfaces.Services
{
    public interface IAppoitmentService
    {
        void CreateAppointment(Appointment appointment);
    }
}
