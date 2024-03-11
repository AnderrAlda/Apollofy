//import "./login.css"
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../types/routes"
import { useAuth } from "../../contexts/AuthContext";



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
    <div className="h-screen bg-black flex flex-col gap-3 justify-center items-center p-5">
      <div className="lg:w-2/4 lg:h-2/4 h-72 w-72  bg-slate-900 rounded-lg border border-solid border-slate-500">
      <img className="lg:h-28 lg:w-28 lg:ml-48 lg:m-12 h-14 w-14 ml-28 m-8 border-solid border border-slate-200 rounded-full" />

      <form className="flex flex-col gap-2 items-center" onSubmit={handleSubmit}>

        <input 
          type="text" 
          placeholder="Email"
          className="rounded p-1 m-1 lg:w-2/4 lg:m-2" 
          value={email} 
          onChange={(e) =>setEmail(e.target.value)}
          />

        <input        
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        className="rounded p-1 m-1 lg:w-2/4 lg:m-2"/>
        
        <button className="bg-blue-600 text-white mt-4 w-20 h-8 rounded lg:m-5">Log in</button>
      </form>
      </div>
    </div>
  );
}
