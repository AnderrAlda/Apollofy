// import { ReactNode } from 'react';
import "./navbar.css";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoLibraryOutline,
} from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
// import { NavLink } from 'react-router-dom';
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../types/routes";

export function NavBar(): ReactNode {
  return (
    <section className="flex justify-between items-center p-4 text-2xl bg-black w-full">
      <Link to={PublicRoutes.HOME}>
        <IoHomeOutline className="text-white hover:text-green-500" />
      </Link>
      <Link to={PublicRoutes.SEARCH}>
        <CiSearch className="text-white hover:text-green-500" />
      </Link>

      <Link to={PublicRoutes.ALBUM}>
        <IoLibraryOutline className="text-white hover:text-green-500" />
      </Link>
      <Link to={PublicRoutes.USER}>
        <IoPersonOutline className="text-white hover:text-green-500" />
      </Link>
    </section>
  );
}
