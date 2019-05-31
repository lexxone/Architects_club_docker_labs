using System;
using System.Collections.Generic;
using System.Web.Http;

namespace Web.Controllers
{
	[RoutePrefix("api/guid")]
	public class GuidController : ApiController
	{
		[HttpGet]
		public IHttpActionResult GetGuid()
		{
			var result = Guid.NewGuid().ToString();
			return Ok(result);
		}

		[Route("{input:int}"), HttpGet]
		public IHttpActionResult GetGuids(int input)
		{
			var result = new List<string>();

			for (var i = 0; i < input; i++)
				result.Add(Guid.NewGuid().ToString());

			return Ok(result);
		}
	}
}