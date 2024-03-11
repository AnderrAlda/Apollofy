import React from "react";
import { HeartIconBtn } from "../../common/icons/heartIconBtn";
import { addSongToUserLikedSongs } from "../../utils";
import { useAuth } from "../../contexts/AuthContext";
import { usePlayer } from "../../contexts/AudioPlayerContext";
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
  const { currentSongIndex, songs } = usePlayer();

  const { user, updateUser } = useAuth();
  const handleAddSongClick = async () => {
    try {
      const updatedUser = await addSongToUserLikedSongs(
        user.id,
        songs[currentSongIndex].id
      );
      updateUser(updatedUser); // Update user context
    } catch (error) {
      console.error("Error adding song:", error);
    }
  };

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
          <button onClick={handleAddSongClick}>
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
