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
                var jsonResponse = _accountServie.IsAuthenticUser(user)
                    ? new JsonResponse { Data = true, Error = string.Empty, Successful = true }
                    : new JsonResponse { Data = false, Error = string.Empty, Successful = true };

                return Json(jsonResponse);
            }
            catch (Exception ex)
            {
                return Json(new JsonResponse { Data = true, Error = ex.ToString(), Successful = false });
            }
        }

    }
}
