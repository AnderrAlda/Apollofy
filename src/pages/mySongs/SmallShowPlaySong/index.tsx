import { IoCaretForwardCircleOutline } from "react-icons/io5";

export function SmallShowPlaySong() {
  return (
    <section>
      <div className="flex">
        <div className=" mt-2 w-12 h-12 bg-gray-800 rounded-lg">
          <img src="" alt="" />
        </div>
        <div>
          <p className="text-white ml-5">Song Name</p>
          <p className="text-white ml-5 text-sm">Artist Name</p>
        </div>
        <div className="absolute right-5">
          <IoCaretForwardCircleOutline className="text-4xl text-white" />
        </div>
      </div>
    </section>
  );
}
