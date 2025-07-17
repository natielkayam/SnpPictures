using Snp.Services.PictureAlbumApi.Models.Dto;

namespace Snp.Services.PictureAlbumApi.Services.IServices
{
    public interface IPictureService
    {
        Task<IEnumerable<PictureListItemDto>> GetAsync();

        Task<string> AddAsync(PictureDto pictureDto);
    }
}
