using System.Threading.Tasks;
using System;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using Microsoft.AspNetCore.Http;
using MSTM.Server.Database.Models;

namespace MSTM.Server.Controllers
{
    [Route("api/[controller]")]
    public class ExampleController : ControllerBase
    {
        public ExampleController()
        {
        }

        [SwaggerOperation("Example endpoint.", "This is an detailed description.")]
        [SwaggerResponse(StatusCodes.Status200OK, "Success", typeof(BlogEntry))]
        [HttpGet]
        [Produces("application/json")]
        public async Task<IActionResult> GetExample()
        {
            await Task.CompletedTask;
            return Ok(new BlogEntry { TestProperty = new Random().Next(1, 5) });
        }
    }
}