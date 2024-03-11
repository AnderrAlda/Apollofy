import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AlbumComponents from "./pages/albumPage";
import { SongPage } from "./pages/songPage";
import HomePage from "./pages/home";
import { UserPage } from "./pages/userPage";
import { PublicRoutes } from "./types/routes";
import SearchBarPage from "./pages/searchPage/search";
import { FilterProvider } from "./contexts/FilterContext";
import Login from "./pages/Login/Login";
import { AuthProvider } from "./contexts/AuthContext";

import { EditProfile } from "./pages/editProfile";
import { PrivateRoute } from "./routes";
import { PlayerProvider } from "./contexts/AudioPlayerContext";
import SignUp from "./pages/SignUp/signup";
import { MySongs } from "./pages/mySongs";

function App() {
  return (
    <>
      <PlayerProvider>
        <FilterProvider>
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path={PublicRoutes.LOGIN} element={<Login />} />
                <Route path={PublicRoutes.SIGNUP} element={<SignUp />} />
                <Route
                  path={PublicRoutes.HOME}
                  element={
                    <PrivateRoute>
                      <HomePage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={PublicRoutes.SEARCH}
                  element={
                    <PrivateRoute>
                      <SearchBarPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={PublicRoutes.USER}
                  element={
                    <PrivateRoute>
                      <UserPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={PublicRoutes.ALBUM}
                  element={
                    <PrivateRoute>
                      <AlbumComponents />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={PublicRoutes.SONG}
                  element={
                    <PrivateRoute>
                      <SongPage />
                    </PrivateRoute>
                  }
                />

                <Route
                  path={PublicRoutes.EDITPROFILE}
                  element={
                    <PrivateRoute>
                      <EditProfile />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={PublicRoutes.MYSONGS}
                  element={
                    <PrivateRoute>
                      <MySongs />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </FilterProvider>
      </PlayerProvider>
    </>
  );
}

export default App;
