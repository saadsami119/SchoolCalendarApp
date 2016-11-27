using System;
using Microsoft.AspNetCore.Mvc;
using SchoolCalendarSystem.server.Core.Model;

namespace SchoolCalendarSystem.server.Controllers
{
    [Route("api/[controller]")]
    public class AppointmentController : Controller
    {
        [HttpPost]
        public IActionResult Create([FromBody] Appointment appointment)
        {
            return Json(new JsonResponse {Data = null, Successful = true, Error = String.Empty});
        }
    }
}
