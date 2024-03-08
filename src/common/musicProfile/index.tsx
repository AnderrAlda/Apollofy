import { NavLink } from "react-router-dom";
import { PublicRoutes } from "../../types/routes";


export function MusicProfile() {
    return(
        <div className="w-40">
          <NavLink to={PublicRoutes.ALBUM}>
              <img
                className="rounded-2xl"
                src="src/assets/album1.png"
                alt="album1"
              />
        </NavLink>
        <p className="text-white">HIP-HIP HITS</p>
      </div>
    )
}