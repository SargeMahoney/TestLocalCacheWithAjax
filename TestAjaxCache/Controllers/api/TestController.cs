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
        public Task<List<TestModel>> Get()
        {
            //   return Task.FromResult(new TestModel() { Name = "Prova", City = "Roma" });
            return Task.FromResult(new List<TestModel>() { new TestModel() { Name = "Prova", City = "Roma" } , new TestModel() { Name = "Prova2", City = "Torino" } });
        }
    }
}
