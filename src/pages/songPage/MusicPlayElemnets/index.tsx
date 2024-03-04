// import React,{ useState } from 'react';
import { IoHeart, IoPlayCircleOutline } from "react-icons/io5";
// import { IoPauseCircleOutline } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { RiRestartLine } from "react-icons/ri";


export function MusicPlayElements() {
  // const Heart: React.FC = () => {
  //   const [mostrarMensaje, setMostrarMensaje] = useState(false);
  
  //   const handleBotonClick = () => {
  //     setMostrarMensaje(true);
  //     setTimeout(() => {
  //       setMostrarMensaje(false);
  //     }, 2000); // Ocultar el mensaje después de 2 segundos
  //   };
  
  //   return (
  //     <div>
  //       <button onClick={handleBotonClick}></button>
  //       {mostrarMensaje && <p>¡Mensaje mostrado!</p>}
  //     </div>
  //   );
  // }

  return (
    <section>
        <div className="mt-12">
          <button className="ml-9 text text-white hover:text-green-500"><RiRestartLine /></button>
          <button className="ml-10 text text-white hover:text-green-500"><IoPlaySkipBackSharp /></button>
          <button className="ml-10 text text-white hover:text-green-500"><IoPlayCircleOutline /></button>
          <button className="ml-10 text text-white hover:text-green-500"><IoPlaySkipForward /></button>
          <button className="ml-10 text text-white hover:text-green-500"><IoHeart /></button>
        </div>
    </section>
  )
}
