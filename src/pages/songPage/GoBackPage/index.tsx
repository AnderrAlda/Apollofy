
import { IoChevronBackSharp} from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export function GoBackPageBtn() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }


  return (
    <button><IoChevronBackSharp onClick={handleClick} className="text-white ml-3 mt-3 hover:text-green-500"/></button>
  )
}
