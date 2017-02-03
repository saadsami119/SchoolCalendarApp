using System;
using Microsoft.AspNetCore.Mvc;
using SchoolCalendarSystem.server.Core.Interfaces.Services;
using SchoolCalendarSystem.server.Core.Model;

namespace SchoolCalendarSystem.server.Controllers
{
    [Route("api/[controller]")]
   
    public class AppointmentController : Controller
    {
        private readonly IAppoitmentService _appointmentService;

        public AppointmentController(IAppoitmentService appointmentService)
        {
            this._appointmentService = appointmentService;
        }

        [HttpPost]
        public IActionResult Create([FromBody] Appointment appointment)
        {
            try
            {
                _appointmentService.CreateAppointment(appointment);
                return Json(new JsonResponse { Data = "Appointment is created !", Successful = true, Error = string.Empty });
            }
            catch (Exception ex)
            {
                return Json(new JsonResponse { Data = null, Successful = true, Error = ex.ToString() });
            }
        }

        
        [HttpGet("user/{userid}/month/{month}/year/{year}")]
        public IActionResult GetAppointments(int month, int year, int userid)
        {
           var appointments =  this._appointmentService.GetMonthlyAppointmentsForUser(month,year, userid);
           return Json(new JsonResponse { Data = appointments , Successful = true, Error = string.Empty });            
        }
    }
}
