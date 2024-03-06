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

function App() {
  return (
    <>
      <FilterProvider>
      <AuthProvider>
      <BrowserRouter>
          <Routes>
            
          <Route path={PublicRoutes.HOME} element={<HomePage />} />
            <Route path={PublicRoutes.LOGIN} element={<Login/>} />
          <Route path={PublicRoutes.SEARCH} element={<SearchBarPage />} />
            <Route path={PublicRoutes.USER} element={<UserPage />} />
            <Route path={PublicRoutes.ALBUM} element={<AlbumComponents />} />
            <Route path={PublicRoutes.SONG} element={<SongPage />} />
  
            <Route path={PublicRoutes.EDITPROFILE} element={<EditProfile />} />
        </Routes>
        </BrowserRouter>
        </AuthProvider>
      </FilterProvider>
   
    </>
  );
}

export default App;
