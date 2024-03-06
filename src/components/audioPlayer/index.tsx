import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";

import {
  IoPlayCircleOutline,
  IoPauseCircleOutline,
  IoPlaySkipBackSharp,
  IoPlaySkipForward,
} from "react-icons/io5";
import "./audioPlayer.css";

const AudioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(0.5); // Initialize volume to 0.5

  const songs = ["/src/assets/song1.mp3", "/src/assets/song2.mp3"];

  const playerRef = useRef<ReactPlayer>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (playing) {
        setCurrentTime(playerRef.current?.getCurrentTime() || 0);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [playing]);

  useEffect(() => {
    playerRef.current?.seekTo(0);
    setPlayed(0);
    setCurrentTime(0);
  }, [currentSongIndex]);

  const togglePlaying = () => {
    setPlaying(!playing);
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekValue = parseFloat(e.target.value);
    setPlayed(seekValue);
    playerRef.current?.seekTo(seekValue);
  };

  const handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    playerRef.current?.seekTo(parseFloat(e.currentTarget.value));
  };

  const handleProgress = (state: any) => {
    if (!state.seeking) {
      setPlayed(state.played);
    }
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleSkipBackward = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  const handleSkipForward = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="bg-black">
      <div>
        <ReactPlayer
          width="100%"
          height="80px"
          ref={playerRef}
          url={songs[currentSongIndex]}
          playing={playing}
          volume={volume}
          onProgress={handleProgress}
          onDuration={handleDuration}
        />
      </div>
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
            background: `linear-gradient(to right, green ${
              played * 100
            }%, transparent 0%)`,
            WebkitAppearance: "none",
          }}
        />
      </div>
      <div className="relative">
        <span className="ml-5 text-white">{formatTime(currentTime)}</span>
        <span className="absolute right-5 text-white">
          {formatTime(duration)}
        </span>
      </div>
      <div className="w-screen flex gap-10 justify-center">
        <IoPlaySkipBackSharp
          className="text-4xl text-white"
          onClick={handleSkipBackward}
        />
        <button onClick={togglePlaying}>
          {playing ? (
            <IoPauseCircleOutline className="text-4xl text-white" />
          ) : (
            <IoPlayCircleOutline className="text-4xl text-white" />
          )}
        </button>
        <IoPlaySkipForward
          className="text-4xl text-white"
          onClick={handleSkipForward}
        />
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
            background: `linear-gradient(to right, green ${
              volume * 100
            }%, transparent 0%)`,
            WebkitAppearance: "none",
          }}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
