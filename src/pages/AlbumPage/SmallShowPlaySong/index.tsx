import { IoPlayCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";


export function SmallShowPlaySong() {
  return (
    <section>
      <NavLink to={"/SongPage"}>
        <div className="show flex relative">
                <div className=" imgsmall">
                    <img src="" alt="" />
                </div>
                <div>
                    <p className="text-white ml-5">Song Name</p>
                    <p className="text-white ml-5 text-sm">Artist Name</p>
                </div>
                <div>
                <button className=" absolute right-5 ml-11 mt-3 text text-white hover:text-green-500"><IoPlayCircleOutline /></button>
                </div>
            </div>
      </NavLink>
    </section>
  )
}
