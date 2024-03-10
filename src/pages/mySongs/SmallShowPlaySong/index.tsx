import { IoCaretForwardCircleOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { PublicRoutes } from "../../../types/routes";

export function SmallShowPlaySong() {
  return (
    <section>
        <div className="flex">
          <div className=" mb-0 w-12 h-12 bg-gray-800 rounded-lg">
            <img src="" alt="" />
          </div>
          <div>
            <p className="text-white ml-5">Song Name</p>
            <p className="text-white ml-5 text-sm">Artist Name</p>
          </div>
          <div className="absolute right-5">
            <IoCaretForwardCircleOutline className="text-4xl text-white hover:text-green-500" />
          </div>
        </div>
    </section>
  );
}
