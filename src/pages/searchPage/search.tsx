import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavBar } from "../../components/navbar";
import { useFilter } from "../../contexts/FilterContext";
//import { songs } from "../../data/data";

// import { Song } from "../../components/audioPlayer";
// import { getSongs } from "../../contexts/GetTrack";
import { PublicRoutes } from "../../types/routes";
import { usePlayer } from "../../contexts/AudioPlayerContext";

export default function SearchBarPage() {
  const { filter, handleSetFilter } = useFilter();
  const [searchParams, setSearchParams] = useSearchParams();
  const { songs } = usePlayer();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFilter = (e: any) => {
    const newFilter = e.target.value;
    setSearchParams({ filter: newFilter });
    handleSetFilter(newFilter);
  };

  useEffect(() => {
    handleSetFilter("");
  }, []);
  //console.log(filter);

  const songsMatchingFilter = songs.filter((song) => {
    const title = song.name.toLowerCase();
    const artist = song.artist.toLowerCase();
    return (
      title.includes(filter.toLowerCase()) ||
      artist.includes(filter.toLowerCase())
    );
  });

  const songResults = [];
  const artistResults = [];
  songsMatchingFilter.forEach((song) => {
    if (song.name.toLowerCase().includes(filter.toLowerCase())) {
      songResults.push(song);
    }
    if (song.artist.toLowerCase().includes(filter.toLowerCase())) {
      artistResults.push(song);
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
                <SearchResultInfo song={song} key={song.id} />
              ))}
            </div>
          )}
          {artistResults.length > 0 && (
            <div>
              <h3 className="text-white text-lg ml-5 ">Artists</h3>
              {artistResults.map((song) => (
                <SearchResultInfo song={song} key={song.id} />
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

export function SearchResultInfo({ song }: { song: Song }) {
  return (
    <Link to={PublicRoutes.SONG}>
      <div className="bg-yellow-400 my-2 mx-5 rounded">
        <p className="text-black ml-5">{song.name}</p>
        <p className="text-black ml-5 text-sm">{song.artist}</p>
      </div>
    </Link>
  );
}
