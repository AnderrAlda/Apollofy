import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AlbumComponents from "./pages/albumPage";
import { SongPage } from "./pages/songPage";
import HomePage from "./pages/home";
import { UserPage } from "./pages/userPage";
import { PublicRoutes } from "./types/routes";
import SearchBarPage from "./pages/searchPage/search";
import AudioPlayerPage from "./pages/audioPlayer";
import { FilterProvider } from "./contexts/FilterContext";

function App() {
  return (
    <>
      <FilterProvider>
        <BrowserRouter>
          <Routes>
            <Route path={PublicRoutes.HOME} element={<HomePage />} />
            <Route path={PublicRoutes.SEARCH} element={<SearchBarPage />} />
            <Route path={PublicRoutes.USER} element={<UserPage />} />
            <Route path={PublicRoutes.ALBUM} element={<AlbumComponents />} />
            <Route path={PublicRoutes.SONG} element={<SongPage />} />
            <Route
              path={PublicRoutes.AUDIOPLAYER}
              element={<AudioPlayerPage />}
            />
          </Routes>
        </BrowserRouter>
      </FilterProvider>
    </>
  );
}

export default App;
