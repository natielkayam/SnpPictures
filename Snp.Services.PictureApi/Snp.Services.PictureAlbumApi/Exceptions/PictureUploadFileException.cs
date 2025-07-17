namespace Snp.Services.PictureAlbumApi.Exceptions
{
    public class PictureUploadFileException : Exception
    {
        public PictureUploadFileException() : base("An error occurred while uploading the picture file.")
        {
        }

        public PictureUploadFileException(string message) : base(message)
        {
        }

        public PictureUploadFileException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
