/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";

import {
  IoPlayCircleOutline,
  IoPauseCircleOutline,
  IoPlaySkipBackSharp,
  IoPlaySkipForward,
  IoHeart,
} from "react-icons/io5";
import "./audioPlayer.css";
import { usePlayer } from "../../contexts/AudioPlayerContext";
import { useAuth } from "../../contexts/AuthContext";
import { addSongToUserLikedSongs } from "../../utils";

const AudioPlayer = () => {
  const {
    playing,
    setPlaying,
    currentTime,
    currentSongIndex,
    setCurrentSongIndex,
    volume,
    setVolume,
    songs,
  } = usePlayer();

  const { user, updateUser } = useAuth();

  const handleAddSongClick = () => {
    addSongToUserLikedSongs(user.id, songs[currentSongIndex].id);
  };

  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const playerRef = useRef<ReactPlayer>(null);

  useEffect(() => {
    if (!isFirstLoad) {
      setPlaying(true);
    }
  }, [currentSongIndex, isFirstLoad, setPlaying]);

  const handleDuration = (duration: number) => {
    setDuration(duration);
    if (isFirstLoad) {
      setIsFirstLoad(false);
    } else {
      setPlaying(true);
    }
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekValue = parseFloat(e.target.value);
    setPlayed(seekValue);
    playerRef.current?.seekTo(seekValue * duration);
  };

  const handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    const seekValue = parseFloat(e.currentTarget.value);
    playerRef.current?.seekTo(seekValue * duration);
  };

  const handleProgress = (state : any) => {
    if (!state.seeking) {
      setPlayed(state.played);
    }
  };

  const handleSkipBackward = () => {
    const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(newIndex);
  };

  const handleSkipForward = () => {
    const newIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(newIndex);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  function formatTime(): React.ReactNode {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="bg-black relative">
      <div className="absolute right-5">
        <button onClick={handleAddSongClick}>
          <IoHeart
            className="text-white hover:text-green-600"
            style={{ fontSize: "2em", cursor: "pointer" }}
          />
        </button>
      </div>
      <ReactPlayer
        width="100%"
        height="80px"
        ref={playerRef}
        url={songs.length > 0 && currentSongIndex !== null ? songs[currentSongIndex].url : ""}
        playing={playing}
        volume={volume}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
      <div className="bg-gray-300 flex">
        <input
          className="w-screen"
          type="range"
          min={0}
          max={1}
          step="any"
          value={played}
          onChange={handleSeekChange}
          onMouseUp={handleSeekMouseUp}
          style={{
            background: `linear-gradient(to right, green ${played * 100}%, transparent 0%)`,
            WebkitAppearance: "none",
          }}
        />
      </div>
      <div className="relative">
        <span className="ml-5 text-white">{formatTime(currentTime)}</span>
        <span className="absolute right-5 text-white">{formatTime(duration)}</span>
      </div>
      <div className="w-screen flex gap-10 justify-center">
        <IoPlaySkipBackSharp className="text-4xl text-white" onClick={handleSkipBackward} />
        <button onClick={() => setPlaying(!playing)}>
          {playing ? (
            <IoPauseCircleOutline className="text-4xl text-white" />
          ) : (
            <IoPlayCircleOutline className="text-4xl text-white" />
          )}
        </button>
        <IoPlaySkipForward className="text-4xl text-white" onClick={handleSkipForward} />
      </div>
      <div className="mt-10">
        <p className="text-white">Volume:</p>
        <input
          className="w-20 appearance-none h-1 rounded-md"
          type="range"
          min={0}
          max={1}
          step="any"
          value={volume}
          onChange={handleVolumeChange}
          style={{
            background: `linear-gradient(to right, green ${volume * 100}%, transparent 0%)`,
            WebkitAppearance: "none",
          }}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
