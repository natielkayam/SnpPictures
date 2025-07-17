using AutoMapper;
using Snp.Services.PictureAlbumApi.Models;
using Snp.Services.PictureAlbumApi.Models.Dto;

namespace Snp.Services.PictureAlbumApi.Mapping.Profiles
{
    public class PictureProfile : Profile
    {
        public PictureProfile()
        {
            CreateMap<Picture, PictureListItemDto>().ReverseMap(); ;

            CreateMap<PictureDto, Picture>().ReverseMap();
        }
    }
}
