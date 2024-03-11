import {
  IoHomeOutline,
  IoPersonOutline,
  IoLibraryOutline,
} from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../types/routes";

export function NavBar(): ReactNode {
  return (
    <section className=" flex justify-between items-center p-4 text-2xl bg-black w-full lg:left-0 lg:w-12 lg:bg-slate-500 lg:block lg:h-screen lg:text-3xl lg:p-2 ">
      <Link to={PublicRoutes.HOME}>
        <IoHomeOutline className="text-white hover:text-accent lg:mt-20" />
      </Link>
      <Link to={PublicRoutes.SEARCH}>
        <CiSearch className="text-white hover:text-accent lg:mt-40" />
      </Link>

      <Link to={PublicRoutes.MYSONGS}>
        <IoLibraryOutline className="text-white hover:text-accent lg:mt-40" />
      </Link>
      <Link to={PublicRoutes.USER}>
        <IoPersonOutline className="text-white hover:text-accent lg:mt-40" />
      </Link>
    </section>
  );
}
