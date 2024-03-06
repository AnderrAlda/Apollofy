import { PlayPauseBtn } from "../../../common/icons/PlayPauseBtn";

interface props 
{
  title:string
  artist:string
}

export function SmallShowPlaySong({ title,artist }:props) {
  return (
    <section>
      <div className="show flex relative">
        <div className=" imgsmall">
          <img src="" alt="" />
        </div>
        <div>
          <p className="text-white ml-5">{title}</p>
          <p className="text-white ml-5 text-sm">{artist}</p>
        </div>
        <div>
          <PlayPauseBtn />
        </div>
      </div>
    </section>
  );
}
