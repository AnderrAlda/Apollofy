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
        // if (user.user?.wishlist && Array.isArray(user.user.wishlist)) {
        //     const added = user.user.wishlist.find((e) => {
        //     return e.toString() === props.id;
        //     });
    
        // if (!added) {
        //     user.user?.wishlist.push(parseInt(props.id));
        //     toast.success('Successfully added!', {
        //     icon: '🧡',
        //     style: {
        //         fontSize: '1.5rem',
        //     },
        //     });
        //     setIsWished(true);
        // } else {
        //     const indexDelete = user.user?.wishlist.indexOf(parseInt(props.id));
        //     if (indexDelete === 0) {
        //     user.user?.wishlist.shift();
        //     } else {
        //     user.user?.wishlist.splice(indexDelete, indexDelete);
        //     }
        //     toast.error('This product is not on your wishlist more!', {
        //     icon: '💔',
        //     style: {
        //         fontSize: '1.5rem',
        //     },
        //     });
        //     setIsWished(false);
        // }
        // }

    return(
        <>
        {/* <NavLink to={PublicRoutes.MYSONGS}> */}
            <button onClick={handleClick} className="absolute ml-10 text-1xl">
                    {/* <IoHeart style={{ fontSize: '2em', cursor: 'pointer' }}/> {mostrarMensaje ? 'you removed from the list' : 'you added to the list'} */}
                <IoHeart className="text-white" style={{ fontSize: '2em', cursor: 'pointer'}}/>
                {enCarrito ? 'Añadir al carrito' : 'remove al carrito'} 
            </button>
                {mensaje && <p  className="text-white">{mensaje}</p>} 
        {/* </NavLink> */}
        </>

    )
}
