using System;
using Microsoft.AspNetCore.Mvc;
using SchoolCalendarSystem.server.Core.Interfaces.Services;
using SchoolCalendarSystem.server.Core.Model;

namespace SchoolCalendarSystem.server.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly IAccountServie _accountServie;

        public AccountController(IAccountServie accountServie)
        {
            _accountServie = accountServie;
        }

        public IActionResult RegisterUser(User user)
        {
            _accountServie.RegisterUser(user);
            return new JsonResult(null);
        }

        [HttpGet]
        [Route("login")]
        public ActionResult VerifyUser(User user)
        {
            try
            {
                var foundUser = _accountServie.GetUser(user);

                var jsonResponse =  foundUser != null 
                    ? new JsonResponse { Data = foundUser.Id, Error = string.Empty, Successful = true }
                    : new JsonResponse { Data = null , Error = string.Empty, Successful = true };

                return Json(jsonResponse);
            }
            catch (Exception ex)
            {
                return Json(new JsonResponse { Data = true, Error = ex.ToString(), Successful = false });
            }
        }

    }
}
