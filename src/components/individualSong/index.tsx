
import { IoHeart } from "react-icons/io5";

interface props {
  songName: string;
  groupName: string;
  isSelected: boolean;
  onClick: () => void;
}

const IndividualSong = ({
  songName,
  groupName,
  isSelected,
  onClick,
}: props) => {
  return (
    <div>
      <div
        className={`mb-12  w-screen relative ${isSelected ? "text-green-500" : "text-white"}`}
        onClick={onClick}
      >
        <p className="text-xl">{songName}</p>
        <p className="text-xs">{groupName}</p>
        <div className="absolute right-10 top-1">
          {/* Button triggering the function */}
          <button>
            <IoHeart
              className="text-white hover:text-green-600"
              style={{ fontSize: "2em", cursor: "pointer" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualSong;
