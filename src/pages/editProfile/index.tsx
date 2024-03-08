import { useEffect, useState } from "react";
import { NavBar } from "../../components/navbar";
import { CgLayoutGrid } from "react-icons/cg";
import { useAuth } from "../../contexts/AuthContext";
import { IoPencil, IoEye } from "react-icons/io5";

export const EditProfile = () => {
  const { user, updateUser } = useAuth();

  const [newEmail, setNewEmail] = useState("");
  const [newGender, setNewGender] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newPassword, setNewPassaword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [changeProfile, setChangeProfile] = useState(false);
  const [displayPassword, setDisplayPassword] = useState(false);

  const handleChangeProfile = () => {
    if (changeProfile) {
      setChangeProfile(false);
    } else {
      setChangeProfile(true);
    }
  };
  const handleDisplayPassword = () => {
    if (displayPassword) {
      setDisplayPassword(false);
    } else {
      setDisplayPassword(true);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log("💪💪");
    const updatedUserData = {};

    if (newEmail !== "" && newEmail !== user.email) {
      updatedUserData.email = newEmail;
    }
    if (newGender !== "" && newGender !== user.gender) {
      updatedUserData.gender = newGender;
    }
    if (newPassword !== "" && newPassword !== user.password) {
      updatedUserData.password = newPassword;
    }
    if (newCountry !== "" && newCountry !== user.country) {
      updatedUserData.country = newCountry;
    }

    try {
      const response = await fetch(`http://localhost:3000/users/${user.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUserData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log(data);
      updateUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(newEmail);
  return (
    <>
      <div className="bg-slate-900 h-screen">
        <div className="flex flex-col p-5 gap-4">
          <div className="flex flex-row">
            <h2 className="text-white text-5xl">Edit profile</h2>
            <button
              onClick={handleChangeProfile}
              className=" flex justify-center items-center bg-gray-800 border border-s-white ml-20 rounded-xl h-12 w-12 hover:bg-green-500"
            >
              <IoPencil className="text-white text-2xl" />
            </button>
          </div>

          <div className="flex flex-row text-white">
            <p className="text-2xl">Email: {user?.email}</p>
          </div>
          {changeProfile ? (
            <input
              type="text"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="New email"
              className=" p-1.5 pl-4 rounded-full"
            />
          ) : null}

          <div className="text-white">
            <p className="text-2xl">Gender: {user?.gender}</p>
          </div>
          {changeProfile ? (
            <input
              type="text"
              value={newGender}
              onChange={(e) => setNewGender(e.target.value)}
              placeholder="New gender"
              className="p-1.5 pl-4 rounded-full"
            />
          ) : null}

          <div className="text-white">
            <p className="text-2xl">Country: {user?.country}</p>
          </div>
          {changeProfile ? (
            <input
              type="text"
              value={newCountry}
              onChange={(e) => setNewCountry(e.target.value)}
              placeholder="New country"
              className=" p-1.5 pl-4 rounded-full"
            />
          ) : null}

          <div className="text-white">
            <div className="text-2xl flex justify-between">
              Password: {displayPassword ? user?.password : "*****"}
              <button onClick={handleDisplayPassword}>
                <IoEye />
              </button>
            </div>
          </div>
          {changeProfile ? (
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassaword(e.target.value)}
              placeholder="New password"
              className="p-1.5 pl-4 rounded-full"
            />
          ) : null}

          {changeProfile ? (
            <button
              type="submit"
              onClick={handleSubmit}
              className="text-white text-2xl mt-6 p-1.5 rounded-full border border-s w-18"
            >
              Save changes
            </button>
          ) : null}
        </div>
        <div className="absolute bottom-0 w-screen">
          <NavBar />
        </div>
      </div>
    </>
  );
};
