import ReactDOM from "react-dom";
import { useLoadingContext } from "./LoadingContext";
import { Box, CircularProgress } from "@mui/material";

export function LoadingLayout() {
  const { isLoading } = useLoadingContext();

  if (!isLoading) return null;

  return ReactDOM.createPortal(
    <Box
      role="status"
      aria-live="polite"
      aria-busy="true"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1300, // match MUI modals/dialogs
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <CircularProgress size={60} />
    </Box>,
    document.body
  );
}
