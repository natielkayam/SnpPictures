import type { PictureListItemDto } from "@/core/models/dto";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

interface SectionOneProps {
  pictures: PictureListItemDto[];
}

export function SectionOne({ pictures }: SectionOneProps) {
  return (
    <Box
      sx={{
        padding: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Uploaded Pictures
      </Typography>

      {pictures.length === 0 ? (
        <Typography>No pictures uploaded yet.</Typography>
      ) : (
        <Box
          sx={{
            width: 300,
            maxHeight: 400,
            overflowY: "auto",
            border: "1px solid lightgray",
            borderRadius: 2,
            padding: 1,
          }}>
          <List>
            {pictures.map((pic) => (
              <ListItem key={pic.id} divider>
                <ListItemText primary={`#${pic.id} - ${pic.name}`} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
}
