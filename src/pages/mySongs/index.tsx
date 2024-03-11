import { useEffect, useState } from "react";
import { NavBar } from "../../components/navbar";

import { useAuth } from "../../contexts/AuthContext";
import { deleteSongFromUserLikedSongs } from "../../utils";
import IndividualSong from "../../components/individualSong";
import { usePlayer } from "../../contexts/AudioPlayerContext";
import VerticalScrollLayout from "../../layouts/verticalScroll";
import { SmallShowPlaySong } from "../../components/SmallShowPlaySong";
import IndividualMySong from "../../components/individualMySong";

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

  const { songs, setUsingLiked, setSongs, setCurrentSongIndex } = usePlayer();
  const [likedSongs, setLikedSongs] = useState<Song[]>();

  useEffect(() => {
    const filteredSongs = songs.filter((song) =>
      user.likedSongs.includes(song.id)
    );
    setLikedSongs(filteredSongs);
  }, [songs, user]);

  const [selectedSongId, setSelectedSongId] = useState<number | null>(null);

  return (
    <div className="bg-black h-screen w-screen relative">
      <div className="pt-10 pl-20 lg:ml-3/12">
        <img
          src="src/assets/images/liked.jpeg"
          alt=""
          className="w-52  top-20 left-20 rounded-xl"
        />
      </div>

      <div className=" pt-10 pl-5 pb-5  lg:ml-20">
        <p className="text-white text-3xl">My songs</p>
      </div>

      <VerticalScrollLayout height="30rem">
        <div className="ml-5">
          {likedSongs?.map((song) => {
            const isSelected = song.id === selectedSongId;
            const handleSongClick = () => {
              setSelectedSongId(song.id);
              setUsingLiked(true);
              setCurrentSongIndex(0);
              setSongs(likedSongs);
            };
            return (
              <IndividualMySong
                key={song.id}
                songName={song.name}
                groupName={song.artist}
                isSelected={isSelected}
                onClick={handleSongClick}
              />
            );
          })}
        </div>
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
