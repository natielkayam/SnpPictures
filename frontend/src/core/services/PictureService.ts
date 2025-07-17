import { pictureAxios } from "@/core/axios";
import type { ResponseDto } from "../models/dto/ResponseDto";
import type { IPictureService } from "./iServices/IPictureService";
import type { PictureDto } from "../models/dto/PictureDto";

export class PictureService implements IPictureService {
  private static instance: PictureService;

  private constructor() {}

  public static getInstance(): PictureService {
    if (!PictureService.instance) {
      PictureService.instance = new PictureService();
    }
    return PictureService.instance;
  }

  async get(): Promise<ResponseDto> {
    try {
      const response = await pictureAxios.get<ResponseDto>("/get-pictures");

      if (!response.data.isSuccess) {
        throw new Error(response.data.message || "Failed to get pictures.");
      }

      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  async add(pictureDto: PictureDto): Promise<ResponseDto> {
    try {
      const response = await pictureAxios.put<ResponseDto>(
        "/add-picture",
        pictureDto
      );

      if (!response.data.isSuccess) {
        throw new Error(response.data.message || "Failed to upload picture.");
      }

      return response.data;
    } catch (error: any) {
      throw error;
    }
  }
}
