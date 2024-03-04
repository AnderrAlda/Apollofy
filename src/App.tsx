import "./App.css";
import AlbumComponents from "./pages/AlbumPage";
import { BrowserRouter } from 'react-router-dom';
import {SongPage} from "./pages/SongPage";

function App() {
  return (
    <>
      <section className="section">
        <BrowserRouter>
          <AlbumComponents />
          <SongPage />
        </BrowserRouter>
    </section>
    </>
  );
}

export default App;
