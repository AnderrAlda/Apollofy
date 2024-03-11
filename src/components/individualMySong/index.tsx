import { IoHeart } from "react-icons/io5";

interface props {
  songName: string;
  groupName: string;
  isSelected: boolean;
  onClick: () => void;
}

const IndividualMySong = ({
  songName,
  groupName,
  isSelected,
  onClick,
}: props) => {
  return (
    <div>
      <div
        className={`mb-12  w-screen relative ${isSelected ? "text-accent" : "text-white"}`}
        onClick={onClick}
      >
        <p className="text-xl">{songName}</p>
        <p className="text-xs">{groupName}</p>
        <div className="absolute right-10 top-1">
          <IoHeart
            className="text-accent "
            style={{ fontSize: "2em", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default IndividualMySong;
