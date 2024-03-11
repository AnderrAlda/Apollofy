import { useState } from "react";
import { IoHeart } from "react-icons/io5";

export function HeartIconBtn() {
  const [enCarrito, setEnCarrito] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleClick = () => {
    if (!enCarrito) {
      setEnCarrito(true);
      setMensaje("Añadido al carrito");
    } else {
      setEnCarrito(false);
      setMensaje("Removido del carrito");
    }

    setTimeout(() => {
      setMensaje("");
    }, 1000);
  };

  return (
    <>
      <button onClick={handleClick} className="absolute ml-10 text-1xl">
        <IoHeart
          className="text-white hover:text-green-600"
          style={{ fontSize: "2em", cursor: "pointer" }}
        />
        {enCarrito ? "Añadir al carrito" : "remove al carrito"}
      </button>

      {mensaje && <p className="text-white mt-40">{mensaje}</p>}
    </>
  );
}
