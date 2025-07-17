using Microsoft.AspNetCore.Mvc;
using Snp.Services.PictureAlbumApi.Models.Dto;
using Snp.Services.PictureAlbumApi.Services.IServices;

namespace Snp.Services.PictureAlbumApi.Controllers
{
    [Route("api/pictures")]
    [ApiController]
    public class PicturesController : ControllerBase
    {
        private readonly IPictureService _pictureService;

        public PicturesController(IPictureService pictureService)
        {
            _pictureService = pictureService;
        }

        [HttpGet("get-pictures")]
        public async Task<ResponseDto> Get()
        {
            var response = new ResponseDto();

            try
            {
                var pictures = await _pictureService.GetAsync();

                response.Result = pictures;
            }
            catch (Exception ex)
            {
                response.Message = ex.Message.ToString();

                response.IsSuccess = false;

                response.ExceptionType = ex.GetType().Name;
            }

            return response;
        }

        [HttpPut("add-picture")]
        public async Task<ResponseDto> Add([FromBody] PictureDto pictureDto)
        {
            var response = new ResponseDto();

            try
            {
                var pictureId = await _pictureService.AddAsync(pictureDto);

                response.Result = pictureId;
            }
            catch (Exception ex)
            {
                response.Message = ex.Message.ToString();

                response.IsSuccess = false;

                response.ExceptionType = ex.GetType().Name;
            }

            return response;
        }

    }
}
