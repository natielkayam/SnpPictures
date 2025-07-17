namespace Snp.Services.PictureAlbumApi.Models.Dto
{
    public class PictureDto
    {
        public string Name { get; set; } = null!;

        public DateTime? Date { get; set; } = DateTime.UtcNow;

        public string? Description { get; set; }

        public string File { get; set; } = null!;
    }
}
