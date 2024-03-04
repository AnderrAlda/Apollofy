import { AvatarGenerator } from "random-avatar-generator";
import HorizontalScrollLayout from "../../layouts/horizontalScroll";
import VerticalScrollLayout from "../../layouts/verticalScroll";
import { NavBar } from "../../components/navbar";

const HomePage = () => {
  const generator = new AvatarGenerator();

  return (
    <div className="relative h-screen">
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          ></path>
        </svg>
      </div>

      <VerticalScrollLayout height="38rem">
        <div className="mt-5 ml-5">
          <h2 className="text-2xl mb-5">Top Playlists</h2>
          <HorizontalScrollLayout>
            <div className="w-40">
              <img
                className="rounded-2xl"
                src="src/assets/album1.png"
                alt="album1"
              />
              <p>HIP-HIP HITS</p>
            </div>
            <div className="w-40">
              <img
                className="rounded-2xl"
                src="src/assets/album1.png"
                alt="album1"
              />
              <p>HIP-HIP HITS</p>
            </div>
            <div className="w-40">
              <img
                className="rounded-2xl"
                src="src/assets/album1.png"
                alt="album1"
              />
              <p>HIP-HIP HITS</p>
            </div>
          </HorizontalScrollLayout>
        </div>
        <div className="mt-5 ml-5 ">
          <h2 className="text-2xl mb-5">Top Artists</h2>
          <HorizontalScrollLayout>
            <div className="w-40">
              <img
                className="rounded-2xl"
                src="src/assets/album1.png"
                alt="album1"
              />
              <p>HIP-HIP HITS</p>
            </div>
            <div className="w-40">
              <img
                className="rounded-2xl"
                src="src/assets/album1.png"
                alt="album1"
              />
              <p>HIP-HIP HITS</p>
            </div>
            <div className="w-40">
              <img
                className="rounded-2xl"
                src="src/assets/album1.png"
                alt="album1"
              />
              <p>HIP-HIP HITS</p>
            </div>
          </HorizontalScrollLayout>
        </div>
        <div className="mt-5 ml-5 ">
          <h2 className="text-2xl mb-5">Top Albums</h2>
          <HorizontalScrollLayout>
            <div className="w-40">
              <img
                className="rounded-2xl"
                src="src/assets/album1.png"
                alt="album1"
              />
              <p>HIP-HIP HITS</p>
            </div>
            <div className="w-40">
              <img
                className="rounded-2xl"
                src="src/assets/album1.png"
                alt="album1"
              />
              <p>HIP-HIP HITS</p>
            </div>
            <div className="w-40">
              <img
                className="rounded-2xl"
                src="src/assets/album1.png"
                alt="album1"
              />
              <p>HIP-HIP HITS</p>
            </div>
          </HorizontalScrollLayout>
        </div>
      </VerticalScrollLayout>
      <div className=" w-full">
        <div className=" flex gap-5 mt-9 relative ">
          <img
            className="rounded-2xl h-16"
            src="src/assets/album1.png"
            alt="album1"
          />
          <div>
            <p>Rogue About Me</p>
            <p>The Weekend</p>
          </div>
          <svg
            className="h-12 absolute right-5 top-1"
            data-slot="icon"
            data-darkreader-inline-stroke=""
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="">
        <NavBar />
      </div>
    </div>
  );
};

export default HomePage;
