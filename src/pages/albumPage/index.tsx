import { NavBar } from "../../components/navbar";

import { HeartIconBtn } from "../../common/icons/heartIconBtn";
import { useAuth } from "../../contexts/AuthContext";
import {
  addSongToUserLikedSongs,
  deleteSongFromUserLikedSongs,
} from "../../utils";
import { usePlayer } from "../../contexts/AudioPlayerContext";
interface Song {
  id: number;
  name: string;
  artist: string;
  url: string;
  thumbnail: string;
  genre: string;
  liked: boolean;
}

export default function AlbumComponents() {
  const { user, updateUser } = useAuth();

  const handleAddSongClick = () => {
    /* addSongToUserLikedSongs(user.id, 4); */
    addSongToUserLikedSongs(user.id, 3);
  };

  return (
    <div className="bg-black h-screen w-screen relative">
      <div>
        {/* Button triggering the function */}
        <button className="bg-white" onClick={handleAddSongClick}>
          Add Song
        </button>
      </div>
      <div>
        <img
          src="src/assets/album1.png"
          alt=""
          className="w-52 absolute top-20 left-20 rounded-xl"
        />
      </div>

      <div className="absolute top-80 left-6">
        <p className="text-white text-3xl">Album name</p>
      </div>

      <div className="fixed bottom-80 left-6 w-screen">
        <div className="mb-20  w-screen relative">
          <p className="text-white text-xl">Song name</p>
          <p className="text-white text-xs">Group name</p>
          <div className="absolute right-32 top-2">
            <HeartIconBtn />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-screen">
        <NavBar />
      </div>
    </div>
  );
}
