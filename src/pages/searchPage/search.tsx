import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { NavBar } from "../../components/navbar";
import { useFilter } from "../../contexts/FilterContext";
import { songs } from "../../data/data";
import { SmallShowPlaySong } from "../albumPage/SmallShowPlaySong";

export default function SearchBarPage() {
  const { filter, handleSetFilter } = useFilter();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilter = (e) => {
    const newFilter = e.target.value;
    setSearchParams({ filter: newFilter });
    handleSetFilter(newFilter);
  };

  useEffect(() => {
    handleSetFilter("");
  }, []);
  console.log(filter);

  return (
    <div className="flex flex-col bg-black h-screen">
      <form className="mt-10 ml-10">
        <label className="text-white text-4xl">Search</label>
        <br />
        <input
          className="input"
          type="text"
          placeholder="Artist, song or podcast"
          value={filter}
          onChange={handleFilter}
        />
      </form>
      <button className="search-btn">Search</button>

      {!filter ? (
        <p className="text-white text-2xl ml-12">Top songs</p>
      ) : (
        songs
          .filter((song) => {
            const title = song.title.toLowerCase();
            const album = song.album.toLowerCase();
            const artist = song.artist.toLowerCase();
            return (
              title.includes(filter.toLowerCase()) ||
              album.includes(filter.toLowerCase()) ||
              artist.includes(filter.toLowerCase())
            );
          })
          .map((song) => <SearchContainer song={song} key={song.id} />)
      )}

      <div className="absolute bottom-0 w-screen">
        <NavBar />
      </div>
    </div>
  );
}

export function SearchContainer({ song }) {
  return (
    <div className="flex flex-col">
      <SmallShowPlaySong song={song} />
    </div>
  );
}
