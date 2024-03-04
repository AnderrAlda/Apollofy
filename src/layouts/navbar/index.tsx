// import { ReactNode } from 'react';
import './navbar.css';
import {IoHomeOutline, IoPersonOutline, IoLibraryOutline } from 'react-icons/io5';
import { CiSearch } from "react-icons/ci";
// import { NavLink } from 'react-router-dom';
import { ReactNode } from 'react';


export function NavBar(): ReactNode {
    return (
        <section className="nav">
            {/* <NavLink to="/home"> */}
                <IoHomeOutline className='text-white hover:text-green-500' />
            {/* </NavLink> */}
            {/* <NavLink to="/search"> */}
                <CiSearch className='text-white hover:text-green-500' />
            {/* </NavLink> */}
            {/* <NavLink to="/wishlist"> */}
                <IoLibraryOutline className='text-white hover:text-green-500' />
            {/* </NavLink> */}
            {/* <NavLink to="/profile"> */}
                <IoPersonOutline className='text-white hover:text-green-500' />
            {/* </NavLink> */}
        </section>
    );
}