using System;
using System.Net;

namespace LairKeeper
{
    public class ApiResponse
    {
        public HttpStatusCode Status { get; set; } = HttpStatusCode.OK;
        public string Message { get; set; }
        public object Data { get; set; }

        public static ApiResponse ServerError(Exception ex)
        {
            return new ApiResponse
            {
                Status = HttpStatusCode.InternalServerError,
                Message = ex.Message
            };
        }

        public static ApiResponse NotFound(string message = "Not found")
        {
            return new ApiResponse
            {
                Status = HttpStatusCode.NotFound,
                Message = message
            };
        }
    }
}