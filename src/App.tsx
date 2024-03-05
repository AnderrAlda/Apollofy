import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AlbumComponents from "./pages/albumPage";
import { SongPage } from "./pages/songPage";
import HomePage from "./pages/home";
import { UserPage } from "./pages/userPage";
import { PublicRoutes } from "./types/routes";
import SearchBarPage from "./pages/search/search";
import Login from "./pages/Login/Login";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          
          <Route path={PublicRoutes.HOME} element={<HomePage />} />
          <Route path={PublicRoutes.LOGIN} element={<Login/>} />
          <Route path={PublicRoutes.SEARCH} element={<SearchBarPage />} />
          <Route path={PublicRoutes.USER} element={<UserPage />} />
          <Route path={PublicRoutes.ALBUM} element={<AlbumComponents />} />
          <Route path={PublicRoutes.SONG} element={<SongPage />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
