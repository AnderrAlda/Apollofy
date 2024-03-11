import { useEffect, useState } from "react";
import { NavBar } from "../../components/navbar";

import { useAuth } from "../../contexts/AuthContext";
import {
  deleteSongFromUserLikedSongs,
} from "../../utils";
import IndividualSong from "../../components/individualSong";
import { usePlayer } from "../../contexts/AudioPlayerContext";
import VerticalScrollLayout from "../../layouts/verticalScroll";

interface Song {
  id: number;
  name: string;
  artist: string;
  url: string;
  thumbnail: string;
  genre: string;
  liked: boolean;
}
export function MySongs() {
  const { user, updateUser } = useAuth();

  const { songs } = usePlayer();
  const [likedSongs, setLikedSongs] = useState<Song[]>();

  useEffect(() => {
    const filteredSongs = songs.filter((song) =>
      user.likedSongs.includes(song.id)
    );
    setLikedSongs(filteredSongs);
    console.log("hola");
  }, [songs, user]);

  const handleAddSongClick = () => {
    /* addSongToUserLikedSongs(user.id, 4); */
    deleteSongFromUserLikedSongs(user.id, 3);
  };

  return (
    <div className="bg-black h-screen w-screen relative">
      <div className="lg:ml-20">
        {/* Button triggering the function */}
        <button className="bg-white" onClick={handleAddSongClick}>
          Add Song
        </button>
      </div>
      <div className="ml-20 lg:ml-5/12">
        <img
          src="src/assets/album1.png"
          alt=""
          className="w-52 ml-10 rounded-xl"
        />
      </div>

      <div className=" top-80 left-6 ml-20 lg:ml-20">
        <p className="text-white text-3xl ml-10 lg:ml-5/12">Album name</p>
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
