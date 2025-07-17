import "@/App.css";
import { CssBaseline } from "@mui/material";
import AppRoutes from "@/core/routes/AppRoutes";
import { AppTheme, GlobalProviders, LoadingLayout } from "./core/components";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <AppTheme>
        <CssBaseline />
        {/* Global UI layers */}
        <GlobalProviders>
          <LoadingLayout />
          {/* Routing */}
          <Router>
            <AppRoutes />
          </Router>
        </GlobalProviders>
      </AppTheme>
    </>
  );
}

export default App;
