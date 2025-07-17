namespace Snp.Services.PictureAlbumApi.Exceptions
{
    public class GetPicturesException : Exception
    {
        public GetPicturesException() : base("An error occurred while retrieving pictures.")
        {
        }

        public GetPicturesException(string message) : base(message)
        {
        }

        public GetPicturesException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
