import { useState } from "react";
import "./signup.css";
import { User, getUsers } from "../../utils";
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../types/routes";
//import { AvatarGenerator } from "random-avatar-generator";



export default function SignUp() {
  
  //const generator = new AvatarGenerator();
  
  const [newUser, setNewUser] = useState<User>({
    id: "", // Asumint que id s'assignarà d'alguna altra manera ja que això és només un exemple
    name: "",
    last_name: "",
    email: "",
    password: "",
    city: "",
    gender: "",
    profilePicture: "",
    country: "",
    dateOfBirth: 0, // Asumiràs que aquest camp s'actualitza d'alguna altra manera
    likedSongs: [], // Asumiràs que aquest camp s'actualitza d'alguna altra manera
  });
  

  const updateUser = (key, value) => {
    setNewUser((prev) => ({ ...prev, [key]: value }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const users = await getUsers();
    const lastID = users.reduce(
      (max, user) => Math.max(max, parseInt(user.id, 10)),
      0
    );
    const updatedUser = { ...newUser, id: (lastID + 1).toString() };
    try {
      const response = await fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-black h-screen">
      <h1 className="text-white flex justify-center py-10 text-xl">Apollofy</h1>
      <p className="text-white flex justify-center py-5">
        Sign up and start listening to the best music
      </p>
      <form className="form-container" onSubmit={handleSubmit}>
        <Name updateUser={updateUser} />
        <Lastname updateUser={updateUser} />
        <Gender updateUser={updateUser} />
        <Email updateUser={updateUser} />
        <City updateUser={updateUser} />
        <Country updateUser={updateUser} />
        <Birthday updateUser={updateUser} />
        <Password updateUser={updateUser} />
        <div className="flex justify-around">
          <CancelButton />
          <SignUpButton />
        </div>
      </form>
    </div>
  );
}

function Name({ updateUser }) {
  const [name, setName] = useState("");
  //console.log(name)

  const handleChanges = (e) => {
    const newName = e.target.value;
    setName(newName);
    updateUser("name", newName);
  };

  return (
    <form className="text-white flex justify-between mx-8 ">
      <label>Your name * </label>
      <input
        type="text"
        className="rounded text-black"
        value={name}
        onChange={handleChanges}
      />
    </form>
  );
}
function Lastname({ updateUser }) {
  const [lastName, setLastName] = useState("");
  const handleChanges = (e) => {
    const newLastName = e.target.value;
    setLastName(newLastName);
    updateUser("last_name", newLastName);
  };
  return (
    <div className="text-white flex justify-between mx-8">
      <label>Your lastname * </label>
      <input
        type="text"
        className="rounded text-black"
        value={lastName}
        onChange={handleChanges}
      />
    </div>
  );
}

function Email({ updateUser }) {
  const [email, setEmail] = useState("");
  const handleChanges = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    updateUser("email", newEmail);
  };
  return (
    <div className="text-white flex justify-between mx-8">
      <label>Email * </label>
      <input
        type="email"
        className="rounded text-black"
        value={email}
        onChange={handleChanges}
      />
    </div>
  );
}
function Gender({ updateUser }) {
  const [gender, setGender] = useState("");
  const handleChanges = (e) => {
    const newGender = e.target.value;
    setGender(newGender);
    updateUser("gender", newGender);
  };
  return (
    <div className="text-white flex justify-between mx-8">
      <label>Gender * </label>
      <input
        type="text"
        className="rounded text-black"
        value={gender}
        onChange={handleChanges}
      />
    </div>
  );
}
function City({ updateUser }) {
  const [city, setCity] = useState("");
  const handleChanges = (e) => {
    const newCity = e.target.value;
    setCity(newCity);
    updateUser("city", newCity);
  };

  return (
    <div className="text-white flex justify-between mx-8">
      <label>City * </label>
      <input
        type="text"
        className="rounded text-black"
        value={city}
        onChange={handleChanges}
      />
    </div>
  );
}
function Country({ updateUser }) {
  const [country, setCountry] = useState("");
  const handleChanges = (e) => {
    const newCountry = e.target.value;
    setCountry(newCountry);
    updateUser("country", newCountry);
  };

  return (
    <div className="text-white flex justify-between mx-8">
      <label>Country * </label>
      <input
        type="text"
        className="rounded text-black"
        value={country}
        onChange={handleChanges}
      />
    </div>
  );
}
function Birthday({ updateUser }) {
  const [birthday, setBirthday] = useState("");

  const handleChanges = (e) => {
    const newBirthday = e.target.value;
    setBirthday(newBirthday);
    updateUser("dateOfBirth", newBirthday);
  };

  return (
    <div className="text-white flex justify-between mx-8">
      <label>Country * </label>
      <input
        type="date"
        className="rounded text-black"
        value={birthday}
        onChange={handleChanges}
      />
    </div>
  );
}

function Password({ updateUser }) {
  const [password, setPassword] = useState("");
  //const [confirmedPassword, setConfirmedPassword] = useState("");

  const handleChanges = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    updateUser("password", newPassword);
  };

  return (
    <div className="text-white flex flex-col gap-2 ">
      <div className="flex justify-between mx-8">
        <label>Create password * </label>
        <input
          type="password"
          className="rounded text-black"
          value={password}
          onChange={handleChanges}
        />
      </div>
      {/* <div className="flex justify-between mx-8">
        <label>Confirm password * </label>
        <input
          type="password"
          className="rounded"
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
        />
      </div> */}
    </div>
  );
}

function CancelButton() {
  return (
    <Link to={PublicRoutes.LOGIN}>
      <button className="w-15 bg-white rounded p-2 mt-5 ml-5">
        Back to login
      </button>
    </Link>
  );
}

function SignUpButton() {
  return (
    <input
      type="submit"
      className="w-15 bg-white rounded p-2 mt-5 ml-5"
      value="Sign up"
    />
  );
}
