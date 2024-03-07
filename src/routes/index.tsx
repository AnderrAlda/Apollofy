import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { SongPage } from "../pages/songPage";
import AlbumComponents from "../pages/albumPage";
import { ReactNode, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { PublicRoutes } from "../types/routes";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AlbumComponents />}>
        <Route path="/SongPage" element={<SongPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/AlbumComponents" />} />
    </Routes>
  );
}

 interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate(PublicRoutes.LOGIN);
    },
    [isAuthenticated, navigate]
  );
  return isAuthenticated ? children : null;
};

