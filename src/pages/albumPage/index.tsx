import { NavBar } from "../../components/navbar";
import { SmallShowPlaySong } from "./SmallShowPlaySong";
import { ListOfSongs } from "./ListOfSongs";
import { ImgAndTitle } from "./img&title";

export default function AlbumComponents() {
  return (
    <div className="bg-black">
      <ImgAndTitle />
      <ListOfSongs />
      <SmallShowPlaySong />
      <NavBar />
    </div>
  );
}
