import type { PictureListItemDto } from "./PictureListItemDto";

export interface ResponseDto {
  result: string | PictureListItemDto[] | null;
  isSuccess: boolean;
  message: string;
  exceptionType?: string;
}
