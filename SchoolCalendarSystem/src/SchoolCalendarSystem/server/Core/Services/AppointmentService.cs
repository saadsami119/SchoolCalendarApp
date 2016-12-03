using SchoolCalendarSystem.server.Core.Interfaces;
using SchoolCalendarSystem.server.Core.Interfaces.Services;
using SchoolCalendarSystem.server.Core.Model;

namespace SchoolCalendarSystem.server.Core.Services
{
    public class AppointmentService : IAppoitmentService
    {
        private readonly IRepository<Appointment> _appointmentRepository;
        private readonly IUnitOfWork _uow;
        public AppointmentService(IUnitOfWork uow)
        {
            this._appointmentRepository = uow.AppointmentRepository;
            this._uow = uow;
        }

        public void CreateAppointment(Appointment appointment)
        {
            this._appointmentRepository.Add(appointment);
            this._uow.SaveChanges();
        }
    }
}
