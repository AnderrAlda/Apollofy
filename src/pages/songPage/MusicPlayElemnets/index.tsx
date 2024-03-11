import { IoPlayCircleOutline } from "react-icons/io5";

import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { RiRestartLine } from "react-icons/ri";

export function MusicPlayElements() {
  return (
    <section>
      <div className="mt-12">
        <button className="ml-9 text-3xl text-white hover:text-accent">
          <RiRestartLine />
        </button>
        <button className="ml-10 text-3xl text-white hover:text-accent">
          <IoPlaySkipBackSharp />
        </button>
        <button className="ml-10 text-3xl text-white hover:text-accent">
          
          <IoPlayCircleOutline />
        </button>
        <button className="ml-10 text-3xl text-white hover:text-accent">
          <IoPlaySkipForward />
        </button>
      </div>
    </section>
  );
}
