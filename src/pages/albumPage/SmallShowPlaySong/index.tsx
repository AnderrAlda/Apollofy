import { PlayPauseBtn } from "../../../common/icons/PlayPauseBtn";

export function SmallShowPlaySong({ song }) {
  return (
    <section>
      <div className="show flex relative">
        <div className=" imgsmall">
          <img src="" alt="" />
        </div>
        <div>
          <p className="text-white ml-5">{song.title}</p>
          <p className="text-white ml-5 text-sm">{song.artist}</p>
        </div>
        <div>
          <PlayPauseBtn />
        </div>
      </div>
    </section>
  );
}
