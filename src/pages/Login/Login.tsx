//import "./login.css"
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../types/routes";
import { useAuth } from "../../contexts/AuthContext";
import { IoRadioOutline } from "react-icons/io5";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate(PublicRoutes.HOME, { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
<>
    
  
    <div className="h-screen bg-black flex flex-col  justify-center items-center p-1">
      <div className="lg:p-7 p-5  bg-gray-700 rounded-lg border border-solid border-slate-500">
        <img className=" lg:ml-6 lg:m-1 h-46 w-44 ml-6 mr-6 border-solid border border-transparent rounded-full" src="src/assets/apollofyremovebg.png" />

        <form
          className="flex flex-col gap-2 items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Email"
            className="rounded p-1 m-2  lg:m-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded p-1 m-2  lg:m-2"
          />

          <button className="bg-accent text-slate-600 mt-4 w-20 h-8 rounded">
            Log in
          </button>
          <Link to={PublicRoutes.SIGNUP}>
            <p className="text-white text-sm">Don't have an account? Create one</p>
          </Link>
        </form>
      </div>
    </div>
    </>
  );
}
