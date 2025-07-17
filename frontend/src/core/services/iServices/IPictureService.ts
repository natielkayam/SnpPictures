import type { PictureDto } from "@/core/models/dto/PictureDto";
import type { ResponseDto } from "@/core/models/dto/ResponseDto";

export interface IPictureService {
  get(): Promise<ResponseDto>;
  add(pictureDto: PictureDto): Promise<ResponseDto>;
}
