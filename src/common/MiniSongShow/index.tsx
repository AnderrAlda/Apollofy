import { Link } from "react-router-dom";
import { PublicRoutes } from "../../types/routes";


export function MiniSongShow() {
  return (
    <Link to={PublicRoutes.SONG}>
        <div className=" w-full absolute bottom-14  bg-gray-400">
          <div className=" flex gap-5 mt-3 ml-2 mb-2 relative ">
            <img
              className="rounded-2xl h-16"
              src="src/assets/album1.png"
              alt="album1"
            />
            <div>
              <p className="text-black">Rogue About Me</p>
              <p className="text-black">The Weekend</p>
            </div>
            <svg
              className="h-12 absolute right-5 text-black"
              data-slot="icon"
              data-darkreader-inline-stroke=""
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              ></path>
            </svg>
          </div>
        </div>
      </Link>
  )
}
