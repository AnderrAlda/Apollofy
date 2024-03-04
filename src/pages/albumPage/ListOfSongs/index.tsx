import { IoHeart } from "react-icons/io5";


export function ListOfSongs() {
  return (
    <section>
        <div className="flex relative">
            <div>
              <p className="ml-7 mt-5 text-white">Song Name</p>
              <p className="ml-7 text-sm text-white">Artist Name</p>
            </div>
            <IoHeart className=" absolute right-5 mt-7 text text-white hover:text-green-500" />
          </div>
    </section>
  )
}
