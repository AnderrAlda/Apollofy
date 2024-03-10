import { usePlayer } from "../../../contexts/AudioPlayerContext";

export function MusicShowPage() {
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

  return (
    <section>
      <div className=" h-96 w-96 ml-20 mt-20 rounded-lg bg-gray-800">
        <img src={songs[currentSongIndex].thumbnail} alt="" />
      </div>
      <p className="mt-9 text-2xl space-x-6 text-center text-white">
        {songs.length > 0 && currentSongIndex !== null
          ? songs[currentSongIndex].name
          : ""}
      </p>
      <p className="mt-2 text-lg text-center text-white">
        {songs.length > 0 && currentSongIndex !== null
          ? songs[currentSongIndex].artist
          : ""}
      </p>
    </section>
  );
}
