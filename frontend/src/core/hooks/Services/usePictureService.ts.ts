import type { PictureDto } from "@/core/models/dto/PictureDto";
import { PictureService } from "@/core/services/PictureService";

export function usePictureService() {
  const pictureService = PictureService.getInstance();

  const getPictures = async () => {
    const response = await pictureService.get();
    return response;
  };

  const addPicture = async (pictureDto: PictureDto) => {
    const response = await pictureService.add(pictureDto);
    return response;
  };

  return {
    getPictures,
    addPicture,
  };
}
