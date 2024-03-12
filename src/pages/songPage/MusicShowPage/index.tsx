import { usePlayer } from "../../../contexts/AudioPlayerContext";

export function MusicShowPage() {
  const { currentSongIndex, songs } = usePlayer();

  return (
    <section>
      <div className=" mt-20 ml-3/12 lg:ml-5/12">
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
