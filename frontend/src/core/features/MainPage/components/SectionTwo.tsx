import { useLoading, usePictureService, useToast } from "@/core/hooks";
import type { PictureDto } from "@/core/models/dto";
import { getPictureSchema } from "@/core/schemas/PictureSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";

interface SectionTwoProps {
  onPictureAdded: () => void;
}

export function SectionTwo({ onPictureAdded }: SectionTwoProps) {
  const { addPicture } = usePictureService();
  const { showLoading, hideLoading } = useLoading();
  const { showError, showSuccess } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(getPictureSchema()),
    mode: "onChange",
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("file", file.name, { shouldValidate: true });
    } else {
      setValue("file", "", { shouldValidate: true });
    }
  };

  const onSubmit: SubmitHandler<PictureDto> = async (
    pictureDto: PictureDto
  ) => {
    try {
      showLoading();

      const response = await addPicture(pictureDto);

      if (response.isSuccess) {
        onPictureAdded();
        reset();
        const pictureId = response.result;

        showSuccess("Picture added successfully! Picture ID: " + pictureId);
      }
    } catch (error: any) {
      showError(error.message);
    } finally {
      hideLoading();
    }
  };

  return (
    <Box sx={{ height: "100%", width: "100%", padding: 2 }}>
      <Typography variant="h4">Add a New Picture</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" gap={2}>
          <FormControl>
            <TextField
              {...register("name")}
              label="Picture Name *"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </FormControl>

          <FormControl>
            <Controller
              name="date"
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="datetime-local"
                  label="Picture Date"
                  value={field.value || ""}
                  onChange={(e) => {
                    field.onChange(
                      e.target.value === "" ? null : e.target.value
                    );
                  }}
                  error={!!errors.date}
                  helperText={errors.date?.message}
                  InputLabelProps={{ shrink: true }}
                />
              )}
            />
          </FormControl>

          <FormControl>
            <TextField
              {...register("description")}
              label="Description"
              rows={3}
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Upload Picture *</FormLabel>
            <Box sx={{ textAlign: "center", marginBottom: 2 }}>
              <input type="file" onChange={handleFileChange} />
              {errors.file && (
                <p style={{ color: "red" }}>{errors.file.message}</p>
              )}
            </Box>
          </FormControl>

          <Box display="flex" gap={2} sx={{ justifyContent: "center" }}>
            <Button type="submit" variant="contained" color="primary">
              Add Picture
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                if (
                  window.confirm("Are you sure you want to reset the form?")
                ) {
                  reset();
                }
              }}>
              Reset
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}
