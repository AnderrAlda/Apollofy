import{
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { getSongs } from "./GetTrack";
import { Song } from "../utils";
// import { getAlbums } from "./GetTrack";

// Define the Song type
// interface Song {
//   // Define your song properties here
// }

// Create the context with a default value including songs
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
});

export const usePlayer = () => {
  return useContext(PlayerContext);
};

interface PlayerProviderProps {
  children: ReactNode;
}

export const PlayerProvider = ({ children }: PlayerProviderProps) => {
  // State for songs
  const [songs, setSongs] = useState<Song[]>([]);

  // Other player states
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(1);
  const [volume, setVolume] = useState(0.5);

  // Fetch songs on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const songsData = await getSongs(); // Implement getSongs according to your API or data source
        setSongs(songsData);
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
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
