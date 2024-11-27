import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
