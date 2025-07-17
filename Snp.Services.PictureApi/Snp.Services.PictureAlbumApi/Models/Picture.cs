using System.ComponentModel.DataAnnotations;

namespace Snp.Services.PictureAlbumApi.Models
{
    public class Picture
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; } = null!;

        public DateTime? Date { get; set; }

        [MaxLength(250)]
        public string? Description { get; set; }

        [Required]
        public string File { get; set; } = null!;
    }
}
