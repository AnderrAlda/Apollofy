import { useState } from "react";
import { IoHeart } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { PublicRoutes } from "../../types/routes";



export function HeartIconBtn() {

    const [enCarrito, setEnCarrito] = useState(false);
    const [mensaje, setMensaje] = useState('');

    const handleClick = () => {
        if (!enCarrito) {
            setEnCarrito(true);
            setMensaje('Añadido al carrito');
        } else {
            setEnCarrito(false);
            setMensaje('Removido del carrito');
        }

        setTimeout(() => {
            setMensaje('');
        }, 1000);
    };

    return(
        <>
        {/* <NavLink to={PublicRoutes.MYSONGS}> */}
            <button onClick={handleClick} className="absolute ml-10 text-1xl">
                    {/* <IoHeart style={{ fontSize: '2em', cursor: 'pointer' }}/> {mostrarMensaje ? 'you removed from the list' : 'you added to the list'} */}
                <IoHeart className="text-white hover:text-green-600" style={{ fontSize: '2em', cursor: 'pointer'}}/>
                {enCarrito ? 'Añadir al carrito' : 'remove al carrito'} 
            </button>
        
            {mensaje && <p className="text-white mt-40">{mensaje}</p>}
            
                {/* {mensaje && <p  className="text-white">{mensaje}</p>}  */}
        {/* </NavLink> */}
        </>

    )
}
