import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavBar } from "../../components/navbar";
import { useFilter } from "../../contexts/FilterContext";

import { PublicRoutes } from "../../types/routes";
import { usePlayer } from "../../contexts/AudioPlayerContext";
import { Album, Artist } from "../../utils";
import { getAlbums, getArtists } from "../../contexts/GetTrack";
import { Song } from "../../utils";

export default function SearchBarPage() {
  const { filter, handleSetFilter } = useFilter();
  const [searchParams, setSearchParams] = useSearchParams();
  const { songs } = usePlayer();
  const [albums, setAlbums] = useState<Album[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFilter = (e: any) => {
    const newFilter = e.target.value;
    setSearchParams({ filter: newFilter });
    handleSetFilter(newFilter);
  };

  useEffect(() => {
    handleSetFilter("");
  }, []);
  

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const albumsData = await getAlbums();
        setAlbums(albumsData);
      } catch (error) {
        console.error("Error getting albums:", error);
      }
    };

    fetchAlbums();
  }, []);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const artistsData = await getArtists();
        setArtists(artistsData);
      } catch (error) {
        console.error("Error getting artists:", error);
      }
    };

    fetchArtists();
  }, []);

  const songResults: Song[] = [];
  const artistResults: Artist[] = [];
  const albumResults: Album[] = [];

  songs.filter((song) => {
    if (
      song.name.toLowerCase().includes(filter.toLowerCase()) ||
      song.artist.toLowerCase().includes(filter.toLowerCase())
    ) {
      songResults.push(song);

    }
  });

  artists.filter((artist) => {
    if (artist.name.toLowerCase().includes(filter.toLowerCase())) {
      artistResults.push(artist);
    }
  });
  albums.filter((album) => {
    if (
      album.name.toLowerCase().includes(filter.toLowerCase()) ||
      album.artist.toLowerCase().includes(filter.toLowerCase())
    ) {
      albumResults.push(album);
    }
  });



  return (
    <div className="flex flex-col bg-black h-screen">
      <form className="mt-10 ml-10">
        <label className="text-white text-4xl ">Search</label>
        <br />
        <input
          className="input p-1.5 rounded"
          type="text"
          placeholder="Artist, song or album"
          value={filter}
          onChange={handleFilter}
        />
      </form>
      <button className="search-btn">Search</button>

      {!filter || filter.length < 4 ? (
        <p className="text-white text-2xl ml-12">Top songs</p>
      ) : (
        <>
          {songResults.length > 0 && (
            <div>
              <h3 className="text-white text-lg ml-5">Songs</h3>
              {songResults.map((song) => (
                <SearchResultSong song={song} key={song.id} />
              ))}
            </div>
          )}
          {artistResults.length > 0 && (
            <div>
              <h3 className="text-white text-lg ml-5 ">Artists</h3>
              {artistResults.map((artist) => (
                <SearchResultArtist artist={artist} key={artist.id} />
              ))}
            </div>
          )}
          {albumResults.length > 0 && (
            <div>
              <h3 className="text-white text-lg ml-5 ">Albums</h3>
              {albumResults.map((album) => (
                <SearchResultAlbum album={album} key={album.id} />
              ))}
            </div>
          )}
        </>
      )}

      <div className="absolute bottom-0 w-screen">
        <NavBar />
      </div>
    </div>
  );
}

export function SearchResultSong({ song }: { song: Song }) {
  return (
    <Link to={PublicRoutes.SONG}>
      <div className="bg-yellow-400 my-2 mx-5 rounded flex ">
        <img className="w-8 h-8 m-2" src={song.thumbnail} />
        <div>
          <p className="text-black ml-5">{song.name}</p>
          <p className="text-black ml-5">{song.artist}</p>
        </div>
      </div>
    </Link>
  );
}
export function SearchResultArtist({ artist }: { artist: Artist }) {
  return (
    <Link to={PublicRoutes.SONG}>
      <div className="bg-yellow-400 my-2 mx-5 rounded flex">
        <img className="w-8 h-8 m-2" src={artist.photoUrl} />
        <p className="text-black ml-5">{artist.name}</p>
      </div>
    </Link>
  );
}

export function SearchResultAlbum({ album }: { album: Album }) {
  return (
    <Link to={PublicRoutes.SONG}>
      <div className="bg-yellow-400 my-2 mx-5 rounded flex">
        <img src={album.imageUrl} className="w-8 h-8 m-2" />
        <div>
          <p className="text-black ml-5">{album.name}</p>
          <p className="text-black ml-5">{album.artist}</p>
        </div>
      </div>
    </Link>
  );
}
