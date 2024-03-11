import React from "react";
import { HeartIconBtn } from "../../common/icons/heartIconBtn";

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
        className={`mb-20  w-screen relative ${isSelected ? "text-green-500" : "text-white"}`}
        onClick={onClick}
      >
        <p className="text-xl">{songName}</p>
        <p className="text-xs">{groupName}</p>
      </div>
    </div>
  );
};

export default IndividualSong;
