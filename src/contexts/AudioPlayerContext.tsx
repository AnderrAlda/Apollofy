import React, { createContext, useState, useContext, ReactNode } from 'react';

// Create the context with a default value for 'playing'
const PlayerContext = createContext({
  playing: false,
  setPlaying: (value: boolean) => {},  
  currentTime: 0,
  setCurrentTime: (value: number) => {},  
  currentSongIndex: 0,
  setCurrentSongIndex: (value: number) => {},  
  volume: 0.5,
  setVolume: (value: number) => {}, 
});

export const usePlayer = () => {
  return useContext(PlayerContext);
};

interface props {
  children:ReactNode
}

export const PlayerProvider = ({ children }:props) => {
  //playing: paused or playing
  const [playing, setPlaying] = useState(false);
  //currentTime: the current time the song is been played
  const [currentTime, setCurrentTime] = useState(0);
  //currentSongIndex: the index number of the song been played
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);

  return (
    <PlayerContext.Provider value={{ playing, setPlaying,currentTime, setCurrentTime,currentSongIndex,setCurrentSongIndex,volume,setVolume}}>
      {children}
    </PlayerContext.Provider>
  );
};
