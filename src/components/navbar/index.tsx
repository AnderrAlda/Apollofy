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
    <section className=" flex justify-between items-center p-4 text-2xl bg-black w-full lg:left-0 lg:w-40 lg:h-100 lg:bg-slate-500 lg:block">
      <Link to={PublicRoutes.HOME}>
        <IoHomeOutline className="text-white hover:text-green-500 lg:mt-4" />
      </Link>
      <Link to={PublicRoutes.SEARCH}>
        <CiSearch className="text-white hover:text-green-500 lg:mt-8" />
      </Link>

      <Link to={PublicRoutes.MYSONGS}>
        <IoLibraryOutline className="text-white hover:text-green-500" />
      </Link>
      <Link to={PublicRoutes.USER}>
        <IoPersonOutline className="text-white hover:text-green-500 lg:hidden" />
      </Link>
    </section>
  );

  // return (
  //   <section className="responsive-tablet responsive-laptop  flex justify-between items-center p-4 text-2xl bg-black w-full lg:left-0">
  //     <Link to={PublicRoutes.HOME}>
  //       <IoHomeOutline className="text-white hover:text-green-500" />
  //     </Link>
  //     <Link to={PublicRoutes.SEARCH}>
  //       <CiSearch className="text-white hover:text-green-500" />
  //     </Link>

  //     <Link to={PublicRoutes.ALBUM}>
  //       <IoLibraryOutline className="text-white hover:text-green-500" />
  //     </Link>
  //     <Link to={PublicRoutes.USER}>
  //       <IoPersonOutline className="text-white hover:text-green-500" />
  //     </Link>
  //   </section>
  // );
}
