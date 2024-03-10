import React from "react";
import { HeartIconBtn } from "../../common/icons/heartIconBtn";

interface props {
  songName: string;
  groupName: string;
}

const IndividualSong = ({ songName, groupName }: props) => {
  return (
    <div>
      <div className="">
        <div className="mb-20  w-screen relative">
          <p className="text-white text-xl">{songName}</p>
          <p className="text-white text-xs">{groupName}</p>
          <div className="absolute right-32 top-2">
            <HeartIconBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualSong;
