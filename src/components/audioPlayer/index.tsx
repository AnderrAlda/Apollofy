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
import { getSongs } from "../../contexts/GetTrack";
import { useAuth } from "../../contexts/AuthContext";
import {
  addSongToUserLikedSongs,
  deleteSongFromUserLikedSongs,
} from "../../utils";

const AudioPlayer = () => {
  //the states from the context
  const {
    playing,
    setPlaying,
    currentTime,
    setCurrentTime,
    currentSongIndex,
    setCurrentSongIndex,
    volume,
    setVolume,
    songs,
  } = usePlayer();

  const { user, updateUser } = useAuth();

  const handleAddSongClick = () => {
    /* addSongToUserLikedSongs(user.id, 4); */
    addSongToUserLikedSongs(user.id, songs[currentSongIndex].id);
  };

  //played represent the progress in the input range
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);

  //initialCurrentTimeSet is the boolean that controls that the context currentTime value is loaded only when the page mounts
  const [initialCurrentTimeSet, setInitialCurrentTimeSet] = useState(false);

  //playerRef reference to the ReactPlayer component
  const playerRef = useRef<ReactPlayer>(null);

  //this useEffect updates the currentTime state while the audio is playing. It updates every second and does it if the song is playing so if playing state is changed. the return is to clear the interval when the component unmounts.
  useEffect(() => {
    const interval = setInterval(() => {
      if (playing) {
        setCurrentTime(playerRef.current?.getCurrentTime() || 0);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [playing]);

  //every time a song in changed to set to 0 this values. So that when song change the next start from 0.
  useEffect(() => {
    playerRef.current?.seekTo(0);
    setPlayed(0);
    setCurrentTime(0);
  }, [currentSongIndex]);

  //ensures that when the component mounts, the initial current time of the audio player is set to the context's current time if it's available.  It helps synchronize the audio playback position with the stored current time value in the context, ensuring continuity between different sessions or when navigating between components.
  useEffect(() => {
    if (!initialCurrentTimeSet && currentTime !== 0) {
      playerRef.current?.seekTo(currentTime);
      setInitialCurrentTimeSet(true);
    }
  }, [currentTime, initialCurrentTimeSet]);

  const togglePlaying = () => {
    setPlaying(!playing);
  };

  //callback function that is triggered when the user interacts with the seek bar (input element) to change the playback position of the audio.
  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekValue = parseFloat(e.target.value);
    setPlayed(seekValue);
    //set the time of the player to seekValue that is the one clicked
    playerRef.current?.seekTo(seekValue);
  };

  //this function controls the drag of the seek bar. so when you mouseup (stop clicking) the bar updates the time in the player.
  const handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    playerRef.current?.seekTo(parseFloat(e.currentTarget.value));
  };

  //when you are moving the bar from left to right, this controls that the song stops and starts.
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

  return (
    <div className="bg-black relative">
      <div className="absolute right-5">
        {/* Button triggering the function */}
        <button onClick={handleAddSongClick}>
          <IoHeart
            className="text-white hover:text-green-600"
            style={{ fontSize: "2em", cursor: "pointer" }}
          />
        </button>
      </div>
      <div>
        <ReactPlayer
          width="100%"
          height="80px"
          ref={playerRef}
          url={
            songs.length > 0 && currentSongIndex !== null
              ? songs[currentSongIndex].url
              : ""
          }
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
