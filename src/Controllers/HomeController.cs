using System;
using Microsoft.AspNetCore.Mvc;

namespace LairKeeper.Controllers
{
    [Route("api")]
    public class HomeController : Controller
    {
        [HttpGet("test")]
        public IActionResult Test(Guid companyId)
        {
            return Json(new ApiResponse
            {
                Data = new
                {
                    ServerTime = DateTime.UtcNow.ToString("yyyy/MM/dd HH:mm:ss:fff")
                }
            });
        }
    }
}
