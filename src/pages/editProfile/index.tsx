import { NavBar } from "../../components/navbar";


export const EditProfile= () => {
  return (
    <>
    <div className="bg-black h-screen">
      <div className="flex flex-col p-5 gap-4">
        <h2 className="text-white text-5xl">Edit profile</h2>

        <div className="text-white">
          <label htmlFor="newEmail">New email</label>
          <input type="text" id="newEmail" />
        </div>

        <div className="text-white">
          <label htmlFor="gender">Gender</label>
          <input type="text" id="gender" />
        </div>

        <div className="text-white">
          <label htmlFor="newRegion">New region or country</label>
          <input type="text" id="newRegion" />
        </div>

        <div className="text-white">
          <label htmlFor="newPassword">New password</label>
          <input type="text" id="newPassword" />
        </div>

        <div className="text-white">
          <label htmlFor="repeatPassword">Repeat new password</label>
          <input type="text" id="repeatPassword" />
        </div>
      </div>
      <NavBar />
    </div>
    
    </>
  );
};
