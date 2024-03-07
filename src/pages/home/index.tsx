import { AvatarGenerator } from "random-avatar-generator";
import HorizontalScrollLayout from "../../layouts/horizontalScroll";
import VerticalScrollLayout from "../../layouts/verticalScroll";
import { NavBar } from "../../components/navbar";
import { MusicProfile } from "../../common/musicProfile";
import { SmallShowPlaySong } from "../../components/SmallShowPlaySong";

const HomePage = () => {
  const generator = new AvatarGenerator();


  const song = {
    title:"Song title",
    artist:"song artist"
  }

  return (
    <div className="relative h-screen bg-black">
      <div className="relative">
        <img className="h-20" src={generator.generateRandomAvatar()} alt="" />
        <svg
          className="h-12 absolute top-5 right-5"
          data-slot="icon"
          data-darkreader-inline-stroke=""
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
        </svg>
      </div>

      <VerticalScrollLayout height="42rem">
        <div className="mt-5 ml-5">
          <h2 className="text-2xl mb-5 text-gray-400">Top Playlists</h2>
          <HorizontalScrollLayout>
            <MusicProfile />
          </HorizontalScrollLayout>
        </div>
        <div className="mt-5 ml-5 ">
          <h2 className="text-2xl mb-5 text-gray-400">Top Artists</h2>
          <HorizontalScrollLayout>
            <MusicProfile />
          </HorizontalScrollLayout>
        </div>
        <div className="mt-5 ml-5 ">
          <h2 className="text-2xl mb-5 text-gray-400">Top Albums</h2>
          <HorizontalScrollLayout>
            <MusicProfile />
          </HorizontalScrollLayout>
        </div>
      </VerticalScrollLayout>
      <div className="absolute bottom-14 w-screen">
    <SmallShowPlaySong title={song.title} artist={song.artist}/>
    </div>
      <div className="absolute bottom-0 w-screen">
        <NavBar />
      </div>
    </div>
  );
};

export default HomePage;
