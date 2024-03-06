import { IoHeart } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { PublicRoutes } from "../../types/routes";



export function HeartIconBtn() {
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
            <button className="absolute ml-10 text-3xl text-white hover:text-green-500">
                    <IoHeart />
            </button>
        {/* </NavLink> */}
        </>
    
    )
}
