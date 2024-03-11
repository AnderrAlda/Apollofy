//import "./login.css"
import {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom"
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
      <img className="h-14 w-14  border-blue-600  border-solid rounded-full" src="./src/assets/rocket-80.png"/>
      <h1 className="page-name">Apollofy</h1>
      <form className="flex flex-col gap-2 items-center" onSubmit={handleSubmit}>
        <label className="text-white">email or username</label>
        <input 
          type="text" 
          className="rounded" 
          value={email} 
          onChange={(e) =>setEmail(e.target.value)}
          />
        <label className="text-white">password</label>
        <input        
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        className="rounded"/>
        
        <button className="bg-blue-600 text-white mt-4 w-20 h-8 rounded">Log in</button>
        <Link to={PublicRoutes.SIGNUP}><p className="text-white">Don't have an account? Create one</p></Link>
      </form>
    </div>
  );
}
