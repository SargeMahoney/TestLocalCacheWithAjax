using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestAjaxCache.Models;

namespace TestAjaxCache.Controllers.api
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {

        public TestController()
        {

        }

        [HttpGet]
        public Task<TestModel> Get()
        {
            return Task.FromResult(new TestModel() { Name = "Prova", City = "Roma" });
        }
    }
}
