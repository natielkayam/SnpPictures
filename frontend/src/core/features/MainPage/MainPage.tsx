import { useLoading, usePictureService } from "@/core/hooks";
import { SectionOne, SectionTwo } from "./components";
import { useEffect, useState } from "react";
import type { PictureListItemDto } from "@/core/models/dto";

export default function MainPage() {
  const { getPictures } = usePictureService();
  const [pictures, setPictures] = useState<PictureListItemDto[]>([]);
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    fetchPictures();
  }, []);

  const handlePictureAdded = () => {
    fetchPictures();
  };

  const fetchPictures = async () => {
    try {
      showLoading();

      const response = await getPictures();

      if (response.isSuccess && Array.isArray(response.result)) {
        setPictures(response.result);
        console.log("Fetched pictures:", response.result);
      }
    } catch (error: any) {
      console.log("Error Fetched pictures:", error.message);
    } finally {
      hideLoading();
    }
  };

  return (
    <>
      <SectionOne pictures={pictures} />
      <SectionTwo onPictureAdded={handlePictureAdded} />
    </>
  );
}
