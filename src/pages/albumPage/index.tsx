import { NavBar } from "../../components/navbar";
import { SmallShowPlaySong } from "./SmallShowPlaySong";
import { ListOfSongs } from "./ListOfSongs";
import { ImgAndTitle } from "./img&title";

export default function AlbumComponents() {

  const song = {
    title:"Song title",
    artist:"song artist"
  }
  return (
    <div className="bg-black">
      <ImgAndTitle />
      <ListOfSongs />
      <SmallShowPlaySong title={song.title} artist={song.artist}/>
      <NavBar />
    </div>
  );
}
