import { NavBar } from "../../components/navbar";
// import { getAlbums } from "./GetTrack";

// import { HeartIconBtn } from "../../common/icons/heartIconBtn";
import { useAuth } from "../../contexts/AuthContext";
import {
  // addSongToUserLikedSongs,
  deleteSongFromUserLikedSongs,
} from "../../utils";
import IndividualSong from "../../components/individualSong";
import { usePlayer } from "../../contexts/AudioPlayerContext";
import VerticalScrollLayout from "../../layouts/verticalScroll";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  const { songs } = usePlayer();
  const [likedSongs, setLikedSongs] = useState<Song[]>();

  useEffect(() => {
    const filteredSongs = songs.filter((song) =>
      user.likedSongs.includes(song.id)
    );
    setLikedSongs(filteredSongs);
  }, [songs, user]);

  const handleAddSongClick = () => {
    /* addSongToUserLikedSongs(user.id, 4); */
    deleteSongFromUserLikedSongs(user.id, 3);
  };

  const { albums } = usePlayer();

  console.log(albums);

  const { albumid } = useParams<{ albumid?: string }>(); // Specify the type of useParams object
  const number = parseInt(albumid || ""); // Provide a default value or handle undefined

  console.log(number);

  const selectedAlbum = albums.find((album) => album.id === number);
  if (selectedAlbum) {
    console.log(selectedAlbum.songs);
  } else {
    console.log("Album not found");
  }

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
          className="w-52  top-20 left-20 rounded-xl"
        />
      </div>

      <div className=" top-80 left-6">
        <p className="text-white text-3xl">Album name</p>
      </div>

      <VerticalScrollLayout height="50rem">
        {likedSongs?.map((song) => (
          <IndividualSong
            key={song.id}
            songName={song.name}
            groupName={song.artist}
          />
        ))}
      </VerticalScrollLayout>

      <IndividualSong songName="asdf" groupName="asdf"></IndividualSong>

      <div className="absolute bottom-0 w-screen">
        <NavBar />
      </div>
    </div>
  );
}
