import { NavBar } from "../../components/navbar";
import { SmallShowPlaySong } from "./SmallShowPlaySong";
import { IoChevronBackOutline } from "react-icons/io5";

export function MySongs() {
  return (
    <div className="bg-black h-screen">
      <div>
        <IoChevronBackOutline className="text-4xl text-white" />
      </div>

      <div className=" mt-5">
        <section>
          <div className="ml-24 w-52 h-56 bg-gray-800 rounded-lg">
            <img src="" alt="" />
          </div>
          <p className="ml-7 mt-5 text-3xl text-white">My Songs</p>
        </section>
      </div>

      <div className="relative">
        <div className="ml-5">
          <p className="text-white">Song name</p>
          <p className="text-white">Group name</p>
        </div>

        {/* <div>
          <IoHeart className="text-4xl text-white hover:text-green-500 absolute right-5 top-0" />
        </div> */}
      </div>

      <div className="absolute bottom-14 w-screen">
        <SmallShowPlaySong />
      </div>
      <div className="absolute bottom-0 w-screen">
        <NavBar />
      </div>
    </div>
  );
}
