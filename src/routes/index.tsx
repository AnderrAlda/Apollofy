import { Navigate, Route, Routes } from "react-router-dom";
import {SongPage} from "../pages/SongPage";
import AlbumComponents from "../pages/AlbumPage";



export function AppRouter() {
    return (
      <Routes>
        <Route element={<AlbumComponents />}>
            <Route path="/SongPage" element={<SongPage />}/>
        </Route>
        <Route path="*" element={<Navigate to="/AlbumComponents" />} />
      </Routes>
    );
  }