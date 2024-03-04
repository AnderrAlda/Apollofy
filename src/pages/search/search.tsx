import "./search.css";

export default function SearchBar() {
  return (
    <div className="search-container">
      <Searchbar />
      <button className="search-btn">Search</button>
      <YourTopGeneres />
      <SongPlayer />
    </div>
  );
}

function Searchbar() {
  return (
    <form className="search-box">
      <label className="search-word">Search</label>
      <br />
      <input
        className="input"
        type="text"
        placeholder="Artist, song or podcast"
      />
    </form>
  );
}

function YourTopGeneres() {
  return <p className="generes">Your top Genres</p>;
}

function SongPlayer() {
  return <p className="song-player">SongPlayer</p>;
}
