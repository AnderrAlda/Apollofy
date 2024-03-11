import { useEffect, useState } from "react";
import { NavBar } from "../../components/navbar";

import { useAuth } from "../../contexts/AuthContext";
import { deleteSongFromUserLikedSongs } from "../../utils";
import IndividualSong from "../../components/individualSong";
import { usePlayer } from "../../contexts/AudioPlayerContext";
import VerticalScrollLayout from "../../layouts/verticalScroll";
import { SmallShowPlaySong } from "../../components/SmallShowPlaySong";

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
  const [selectedSongId, setSelectedSongId] = useState<number | null>(null);

  return (
    <div className="bg-black h-screen w-screen relative">
      <div className="lg:ml-20">
        {/* Button triggering the function */}
        <button className="bg-white" onClick={handleAddSongClick}>
          Add Song
        </button>
      </div>
      <div className="lg:ml-3/12">
        <img
          src="src/assets/album1.png"
          alt=""
          className="w-52  top-20 left-20 rounded-xl"
        />
      </div>

      <div className=" top-80 left-6 lg:ml-20">
        <p className="text-white text-3xl">Album name</p>
      </div>

      <VerticalScrollLayout height="30rem">
        {likedSongs?.map((song) => {
          const isSelected = song.id === selectedSongId;
          const handleSongClick = () => setSelectedSongId(song.id);
          return (
            <IndividualSong
              key={song.id}
              songName={song.name}
              groupName={song.artist}
              isSelected={isSelected}
              onClick={handleSongClick}
            />
          );
        })}
      </VerticalScrollLayout>

      <div className="absolute bottom-14 w-screen">
        <SmallShowPlaySong selectedSongId={selectedSongId} />
      </div>
      <div className="absolute bottom-0 w-screen">
        <NavBar />
      </div>
    </div>
  );
}
