import { IoSettingsOutline } from "react-icons/io5";
import { NavBar } from "../../components/navbar";
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../types/routes";
import { IoLogOutOutline } from "react-icons/io5";

import { useAuth } from "../../contexts/AuthContext";

export const UserPage = () => {
  const { logout, user } = useAuth();

  return (
    <>
      <div className="bg-black h-screen">
        <div className="flex flex-col lg:border lg:border-solid lg:border-slate-900 lg:bg-zinc-700 ">
          <div className="flex justify-between gap-72 mx-5 mt-8 lg:mt-8">
            <Link to={PublicRoutes.EDITPROFILE}>
              <IoSettingsOutline size={30} className="text-white hover:text-yellow-300" />
            </Link>
            <button onClick={logout}>
              <IoLogOutOutline
                size={30}
                className="text-white mr-1 cursor-pointer hover:text-yellow-300"
              />
            </button>
          </div>
          <div className="flex items-center justify-center flex-col mt-32">
            <div className="flex justify-center items-center rounded-full border-2 border-solid shadow-2xl  bg-gray-800 border-black size-44 m-8 lg:size-48">
              <img src={user.profilePicture} />
            </div>
            <div className="flex mt-4">
              <div className="flex flex-col">
                <p className="m-2  text-3xl text-white hover:text-yellow-300 lg:text-4xl">
                  {user.name}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-6  "></div>
        <div></div>
        <div className="absolute bottom-0 w-screen">
          <NavBar />
        </div>
      </div>
    </>
  );
};
