using System;
using System.Collections.Generic;
using System.Linq;
using SchoolCalendarSystem.server.Core.Interfaces;
using SchoolCalendarSystem.server.Core.Interfaces.Services;
using SchoolCalendarSystem.server.Core.Model;

namespace SchoolCalendarSystem.server.Core.Services
{
    public class AppointmentService : IAppoitmentService
    {
        private readonly IRepository<Appointment> _appointmentRepository;
        private readonly IRepository<User> _userRepository;
        private readonly IUnitOfWork _uow;
        public AppointmentService(IUnitOfWork uow)
        {
            this._appointmentRepository = uow.AppointmentRepository;
            this._userRepository = uow.UserRepository;
            this._uow = uow;
        }

        public void CreateAppointment(Appointment appointment)
        {
            var user =  this._userRepository.SingleOrDefault(x=>x.Id == appointment.UserId);
            appointment.User = user;
            this._appointmentRepository.Add(appointment);
            this._uow.SaveChanges();
        }

        public IEnumerable<Appointment> GetMonthlyAppointmentsForUser(int month , int year, int userId)
        {
            var totalDaysInMonth = DateTime.DaysInMonth(year, month);
            var startDate = new DateTime(year,month,01);
            var endDate = new DateTime(year,month,totalDaysInMonth);
                   
            return this._appointmentRepository
                    .Get(x=>x.StartDateTime >= startDate && x.StartDateTime <= endDate
                            && x.UserId == userId)
                    .OrderBy(a=>a.StartDateTime);           
            
        }
    }
}
