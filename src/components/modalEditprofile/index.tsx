import { Link } from "react-router-dom";
import { PublicRoutes } from "../../types/routes";


 export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative z-50 bg-black p-8 w-80 mx-auto rounded-xl">
        {children}
        <Link to={PublicRoutes.USER}>
        <button className="absolute top-0 text-white right-0 m-3" onClick={onClose}>
        &times;
        </button>
        </Link>
      </div>
    </div>
  );
};


