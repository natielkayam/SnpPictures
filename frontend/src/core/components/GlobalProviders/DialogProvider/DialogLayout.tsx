import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";
import { useDialogContext } from "./DialogContext";

export function DialogLayout() {
  const { dialog, closeDialog } = useDialogContext();

  return (
    <Dialog open={!!dialog} onClose={closeDialog}>
      <DialogTitle>{dialog?.title}</DialogTitle>
      <DialogContent>
        <Typography
          sx={{
            whiteSpace: "pre-line", // enables \n to be rendered as line breaks
            lineHeight: 1.75, // adds vertical spacing between lines
          }}>
          {dialog?.content}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} autoFocus>
          "Close"
        </Button>
      </DialogActions>
    </Dialog>
  );
}
