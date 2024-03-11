import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { getSongs } from "./GetTrack";
import { getAlbums } from "../utils";

interface PlayerContextType {
  playing: boolean;
  setPlaying: (value: boolean) => void;
  currentTime: number;
  setCurrentTime: (value: number) => void;
  currentSongIndex: number;
  setCurrentSongIndex: (value: number) => void;
  volume: number;
  setVolume: (value: number) => void;
  songs: Song[];
  setSongs: (value: Song[]) => void;
  albums: Albums[];
  usingLiked: boolean;
  setUsingLiked: (value: boolean) => void;
}

interface Song {
  id: number;
  name: string;
  artist: string;
  url: string;
  thumbnail: string;
  genre: string;
  liked: boolean;
}

interface Albums {
  id: number;
  name: string;
  imageUrl: string;
  artist: string;
  songs: number[];
}

const PlayerContext = createContext<PlayerContextType>({
  playing: false,
  setPlaying: (value: boolean) => {},
  currentTime: 0,
  setCurrentTime: (value: number) => {},
  currentSongIndex: 0,
  setCurrentSongIndex: (value: number) => {},
  volume: 0.5,
  setVolume: (value: number) => {},
  songs: [],
  setSongs: (value: Song[]) => {},
  albums: [],
  usingLiked: false,
  setUsingLiked: (value: boolean) => {},
});

export const usePlayer = () => {
  return useContext(PlayerContext);
};

interface PlayerProviderProps {
  children: ReactNode;
}

export const PlayerProvider = ({ children }: PlayerProviderProps) => {
 
  const [songs, setSongs] = useState<Song[]>([]);
  const [albums, setAlbums] = useState<Albums[]>([]);
  const [playing, setPlaying] = useState(false);
  const [usingLiked, setUsingLiked] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(1);
  const [volume, setVolume] = useState(0.5);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const songsData = await getSongs(); 
        setSongs(songsData);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const albumsData = await getAlbums(); 
        setAlbums(albumsData);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        playing,
        setPlaying,
        currentTime,
        setCurrentTime,
        currentSongIndex,
        setCurrentSongIndex,
        volume,
        setVolume,
        songs,
        setSongs,
        albums,
        usingLiked,
        setUsingLiked,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
