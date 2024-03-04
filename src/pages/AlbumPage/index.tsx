import { NavBar } from "../../layouts/navbar";
import { SmallShowPlaySong } from "./SmallShowPlaySong";
import { ListOfSongs } from "./ListOfSongs";
import { ImgAndTitle } from "./img&title";

export default function AlbumComponents() {
  return (
    <div>
      <ImgAndTitle />
      <ListOfSongs />
      <SmallShowPlaySong />
      <NavBar />
    </div>
  );
}
