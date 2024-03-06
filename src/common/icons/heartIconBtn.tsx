import { IoHeart } from "react-icons/io5";

export function HeartIconBtn() {
  return (
    <>
      <button className="absolute right-5 mt-7 text text-white hover:text-green-500">
        <IoHeart />
      </button>
    </>
  );
}
