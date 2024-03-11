import { NavBar } from "../../components/navbar";

import { useAuth } from "../../contexts/AuthContext";
import { deleteSongFromUserLikedSongs } from "../../utils";
import IndividualSong from "../../components/individualSong";
import { usePlayer } from "../../contexts/AudioPlayerContext";
import VerticalScrollLayout from "../../layouts/verticalScroll";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SmallShowPlaySong } from "../../components/SmallShowPlaySong";
import { IoChevronBackSharp } from "react-icons/io5";
interface Song {
  id: number;
  name: string;
  artist: string;
  url: string;
  thumbnail: string;
  genre: string;
  liked: boolean;
}

interface AlbumSongs {
  [key: number]: Song;
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
    deleteSongFromUserLikedSongs(user.id, 3);
  };

  const { albums, songs: Song } = usePlayer();
  console.log(albums);

  const { albumid } = useParams<{ albumid?: string }>();
  const number = parseInt(albumid || "");

  console.log(number);

  const selectedAlbum = albums.find((album) => album.id === number);
  if (selectedAlbum) {
    console.log(selectedAlbum.songs);
  } else {
    console.log("Album not found");
  }

  console.log("song:" + songs[1].id);

  const albumSongs: AlbumSongs = {};

  if (selectedAlbum) {
    const selectedAlbumSongs = songs.filter((song) =>
      selectedAlbum.songs.includes(song.id)
    );

    selectedAlbumSongs.forEach((song) => {
      albumSongs[song.id] = {
        id: song.id,
        name: song.name,
        artist: song.artist,
        url: song.url,
        thumbnail: song.thumbnail,
        genre: song.genre,
        liked: song.liked,
      };
    });
  }

  const [selectedSongId, setSelectedSongId] = useState<number | null>(null);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-black h-screen w-screen relative">
      <button onClick={goBack}>
        <IoChevronBackSharp className="text-2xl text-white ml-3 mt-3 hover:text-accent" />
      </button>
      <div className="pt-10 pl-20">
        <img
          src={selectedAlbum?.imageUrl}
          alt=""
          className="w-52  top-20 left-20 rounded-xl"
        />
      </div>

      <div className="pt-10 pl-5 ">
        <p className="text-white text-3xl">{selectedAlbum?.name}</p>
      </div>
      <div className="  pl-5 pb-10">
        <p className="text-white text-xl">{selectedAlbum?.artist}</p>
      </div>

      <VerticalScrollLayout height="25rem">
        <div className="pl-5">
          {Object.keys(albumSongs).map((songId) => {
            const song = albumSongs[parseInt(songId)];
            const isSelected = parseInt(songId) === selectedSongId;
            const handleSongClick = () => setSelectedSongId(parseInt(songId));
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
