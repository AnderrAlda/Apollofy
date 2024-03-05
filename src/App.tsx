import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AlbumComponents from "./pages/albumPage";
import { SongPage } from "./pages/songPage";
import HomePage from "./pages/home";
import { UserPage } from "./pages/userPage";
import { PublicRoutes } from "./types/routes";
import SearchBarPage from "./pages/search/search";
import MySongs from "./pages/mySongs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={PublicRoutes.HOME} element={<HomePage />} />
          <Route path={PublicRoutes.SEARCH} element={<SearchBarPage />} />
          <Route path={PublicRoutes.USER} element={<UserPage />} />
          <Route path={PublicRoutes.ALBUM} element={<AlbumComponents />} />
          <Route path={PublicRoutes.SONG} element={<SongPage />} />
          <Route path={PublicRoutes.ALBUM} element={<AlbumComponents />} />
          <Route path={PublicRoutes.MYSONGS} element={<MySongs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
