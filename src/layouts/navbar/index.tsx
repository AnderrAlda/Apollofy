import { ReactNode } from 'react';
import './navbar.css';
import {
  IoHomeOutline,
  IoHeartOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import { CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

export function NavBar(): ReactNode {
  return (
    <section className="nav">
      <NavLink to="/home">
        <IoHomeOutline stroke="#EEEED0" />
      </NavLink>
      <NavLink to="/search">
        <CiSearch stroke="#EEEED0" />
      </NavLink>
      <NavLink to="/wishlist">
        <IoHeartOutline stroke="#EEEED0" />
      </NavLink>
      <NavLink to="/profile">
        <IoPersonOutline stroke="#EEEED0" />
      </NavLink>
    </section>
  );
}