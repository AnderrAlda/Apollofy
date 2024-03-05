import { NavBar } from "../../components/navbar";

export default function SearchBarPage() {
  return (
    <div className="flex flex-col bg-black h-screen">
      <form className="mt-10 ml-10">
        <label className="text-white text-4xl">Search</label>
        <br />
        <input
          className="input"
          type="text"
          placeholder="Artist, song or podcast"
        />
      </form>
      <button className="search-btn">Search</button>
      <p className="text-white text-2xl ml-12">Your top Genres</p>
      <div className="absolute bottom-0 w-screen">
        <NavBar />
      </div>
    </div>
  );
}
