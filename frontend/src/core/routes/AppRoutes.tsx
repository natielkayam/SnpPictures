import { Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense } from "react";

const MainPage = React.lazy(() =>
  import("@/core/features").then((m) => ({ default: m.MainPage }))
);

import { LoadingLayout } from "../components/";

const AppRoutes = () => (
  <Suspense fallback={<LoadingLayout />}>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
