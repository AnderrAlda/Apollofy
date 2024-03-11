import { FaUserAstronaut } from "react-icons/fa";

import { NavBar } from "../../components/navbar";
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../types/routes";
import { IoLogOutOutline } from "react-icons/io5";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { useAuth } from "../../contexts/AuthContext";

export const UserPage = () => {
  const { logout, user } = useAuth();

  return (
    <>
      <div className="bg-black h-screen ">
        <div className="flex flex-row lg:border lg:border-solid lg:border-slate-900 lg:bg-zinc-700 lg:ml-20">
          <div className="flex justify-center items-center rounded-full border-2 border-solid shadow-2xl shadow-black bg-gray-800 border-white h-28 w-28 m-8 lg:size-48 ">
            <FaUserAstronaut size={32} className="text-white lg:size-20 " />
          </div>
          <div className="flex mt-4">
            <div className="flex flex-col">
              <p className="lg:text-xl text-white mt-4 lg:mt-10 ml-2 ">
                Profile
              </p>
              <p className="m-2  text-3xl text-white  lg:text-4xl">
                Name of user
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row lg:ml-20">
          <p className="text-white ml-7 text-xl lg:mt-6 lg:text-3xl ">
            Public List
          </p>

          <div className="flex ml-48 mt-2 lg:mt-8 ">
            <button onClick={logout}>
              <IoLogOutOutline
                size={30}
                className="text-white mr-1 cursor-pointer"
              />
            </button>
            <Link to={PublicRoutes.EDITPROFILE}>
              <IoEllipsisVerticalOutline
                size={30}
                className="text-white ml-1 cursor-pointer "
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col m-6 lg:ml-20">
          <div className="flex flex-row">
            <div className="border-solid border-white border rounded-md bg-slate-900 shadow-slate-400 shadow-md h-32 w-32"></div>
            <div className="flex flex-col"></div>
          </div>
          <p className="text-white text-xl ">My list</p>
          <p className="text-white text-sm ">From ...</p>
        </div>
        <div></div>
        <div className="absolute bottom-0 w-screen">
          <NavBar />
        </div>
      </div>
    </>
  );
};
