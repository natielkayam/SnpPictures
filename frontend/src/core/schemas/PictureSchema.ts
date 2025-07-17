import * as yup from "yup";

export const getPictureSchema = () =>
  yup.object({
    name: yup.string().required("Name is required").max(50),
    date: yup
      .string()
      .notRequired()
      .nullable()
      .test("is-valid-date", "Invalid date", (value) => {
        return !value || !isNaN(Date.parse(value));
      }),
    description: yup.string().max(250),
    file: yup
      .string()
      .required("File is required")
      .test("is-image-extension", "Only image files are allowed", (value) => {
        if (!value) return false;
        const allowedExtensions = [
          ".jpg",
          ".jpeg",
          ".png",
          ".gif",
          ".bmp",
          ".webp",
        ];
        return allowedExtensions.some((ext) =>
          value.toLowerCase().endsWith(ext)
        );
      }),
  });
