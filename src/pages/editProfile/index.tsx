import { useState } from "react";
import { NavBar } from "../../components/navbar";
import { CgLayoutGrid } from "react-icons/cg";
import { useAuth } from "../../contexts/AuthContext";
import { IoPencil } from "react-icons/io5";


export const EditProfile= () => {
  const {user} = useAuth()

  const[newEmail, setNewEmail] = useState(user?.email)
  const[gender, newGender] = useState(user?.gender)
  const[newRegion, setNewRegion] = useState(user?.newRegion)
  const[newPassword, setNewPassaword] = useState(user?.password)
  const[repeatPassword, setRepeatPassword] = useState(user?.newPassword)
  const[changeProfile, setChangeProfile] = useState(false)

const handleChangeProfile = () => {
  if (changeProfile) {
    setChangeProfile(false)
  }else{
    setChangeProfile(true)
  }}


const handleFormSubmit = (e: any) => {
  e.preventDeafault();
}

console.log(user)

  return (
    <>
    <div className="bg-black h-screen">
      <div className="flex flex-col p-5 gap-4">
        <div className="flex flex-row">
        <h2 className="text-white text-5xl">Edit profile</h2>
        <button onClick={handleChangeProfile} className=" flex justify-center items-center bg-gray-800 border border-s-white ml-20 rounded-xl h-12 w-12 hover:bg-green-500">
          <IoPencil  className="text-white text-2xl"/>
          </button>
        </div>
      

        <div className="flex flex-row text-white">
          <p>Email:  {user?.email}</p>
          </div>
          {(changeProfile) ? <input type="text" placeholder="New email" /> : null }

          <div className="text-white">
          <p className="text-2xl">Gender: {user?.gender}</p>
        </div>
        {(changeProfile) ? <input type="text" placeholder="New gender" /> : null }

        <div className="text-white">
          <p className="text-2xl">Country: {user?.country}</p>
        </div>
        {(changeProfile) ? <input type="text" placeholder="New country" /> : null }

        <div className="text-white">
          <p className="text-2xl">Password: {user?.password}</p>
        </div>
        {(changeProfile) ? <input type="password" placeholder="New password" /> : null }

        <button type="submit" className="text-white border border-s w-14">Save</button>

        
        </div>
        <div className="absolute bottom-0 w-screen">
        <NavBar />
        </div>
      </div>
      
    
    </>
  );
};
