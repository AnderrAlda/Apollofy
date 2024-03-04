
import { PlayPauseBtn } from "../../../common/icons/PlayPauseBtn";

export function SmallShowPlaySong() {
  return (
    <section>
      <div className="show flex relative">
        <div className=" imgsmall">
          <img src="" alt="" />
        </div>
        <div>
          <p className="text-white ml-5">Song Name</p>
          <p className="text-white ml-5 text-sm">Artist Name</p>
        </div>
        <div>
          <PlayPauseBtn/>
        </div>
      </div>
    </section>
  );
}
