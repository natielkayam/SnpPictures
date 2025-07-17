using Microsoft.EntityFrameworkCore;
using Snp.Services.PictureAlbumApi.Models;

namespace Snp.Services.PictureAlbumApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        { }

        public DbSet<Picture> Pictures { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Picture>()
                .HasIndex(p => p.File)
                .IsUnique();
        }
    }
}
