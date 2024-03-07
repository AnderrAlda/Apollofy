import { NavBar } from "../../components/navbar";
import { HeartIconBtn } from "../../common/icons/heartIconBtn";
import { MiniSongShow } from "../../common/MiniSongShow";


export default function AlbumComponents() {

  // const song = {
  //   title:"Song title",
  //   artist:"song artist"
  // }
  return (
    <div className="bg-black h-screen w-screen relative">
      
    <div>
    <img src="src/assets/album1.png" alt=""  className="w-52 absolute top-20 left-20 rounded-xl"/>
    </div>

    <div className="absolute top-80 left-6">
      <p className="text-white text-3xl">Album name</p>
    </div>

    <div className="fixed bottom-80 left-6 w-screen">
      <div className="mb-20  w-screen relative">
      <p className="text-white text-xl">Song name</p>
      <p className="text-white text-xs">Group name</p>
    <div className="absolute right-32 top-2">
    <HeartIconBtn/>
    </div>

      </div>
    </div>

    <MiniSongShow/>
    <div className="absolute bottom-0 w-screen">
    <NavBar />
    </div>
    </div>
  );
}
