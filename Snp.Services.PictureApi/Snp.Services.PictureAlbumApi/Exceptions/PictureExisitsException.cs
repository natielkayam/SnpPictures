namespace Snp.Services.PictureAlbumApi.Exceptions
{
    public class PictureExisitsException : Exception
    {
        public PictureExisitsException() : base("A picture with the same name already exists.")
        {
        }

        public PictureExisitsException(string message) : base(message)
        {
        }

        public PictureExisitsException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
