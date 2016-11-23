using Microsoft.AspNetCore.Mvc;
using SchoolCalendarSystem.server.Core.Interfaces.Services;
using SchoolCalendarSystem.server.Core.Model;

namespace SchoolCalendarSystem.server.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly IAccountServie _accountServie;

        public AccountController()//IAccountServie accountServie)
        {
            //_accountServie = accountServie;
        }

        public IActionResult RegisterUser(User user)
        {
            _accountServie.RegisterUser(user);
            return new JsonResult(null);
        }

        [HttpGet]
        [Route("login")]
        public ActionResult VerifyUser()
        {
            return Json(new JsonResponse { Data = true, Error = "some rorodfdfdfdf ", Successful = false });
            //return Json(new JsonResponse { Data = true, Error = string.Empty, Successful = true });
        }

    }
}
