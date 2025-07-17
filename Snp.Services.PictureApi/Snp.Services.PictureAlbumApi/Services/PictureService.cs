using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Snp.Services.PictureAlbumApi.Data;
using Snp.Services.PictureAlbumApi.Exceptions;
using Snp.Services.PictureAlbumApi.Models;
using Snp.Services.PictureAlbumApi.Models.Dto;
using Snp.Services.PictureAlbumApi.Services.IServices;

namespace Snp.Services.PictureAlbumApi.Services
{
    public class PictureService : IPictureService
    {
        private readonly AppDbContext _db;
        private readonly IMapper _mapper;

        public PictureService(AppDbContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }


        public async Task<string> AddAsync(PictureDto pictureDto)
        {
            if (await _db.Pictures.AnyAsync(p => p.File == pictureDto.File))
            {
                throw new PictureExisitsException();
            }

            var picture = _mapper.Map<Picture>(pictureDto);

            _db.Pictures.Add(picture);

            await _db.SaveChangesAsync();

            return picture.Id.ToString();
        }

        public async Task<IEnumerable<PictureListItemDto>> GetAsync()
        {
            var pictures = await GetAllPictures();
           
            return pictures;
        }

        private async Task<IEnumerable<PictureListItemDto>> GetAllPictures()
        {
            try
            {
                var pictures = await _db.Pictures.AsNoTracking().ToListAsync();

                return _mapper.Map<IEnumerable<PictureListItemDto>>(pictures);
            }
            catch (Exception ex)
            {
                throw new GetPicturesException(ex.Message);
            }
        }
    }
}
