
import { IoChevronBackSharp} from "react-icons/io5";
import { Link } from "react-router-dom";

export function GoBackPageBtn() {
  return (

  <Link to="/album">    <button><IoChevronBackSharp className="text-2xl text-white ml-3 mt-3 hover:text-green-500"/></button></Link>

  )
}
