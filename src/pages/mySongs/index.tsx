import { useEffect, useState } from "react";
import { NavBar } from "../../components/navbar";
import { getAlbums } from "../../contexts/GetTrack";
import { SmallShowPlaySong } from "./SmallShowPlaySong";
import { IoChevronBackOutline } from "react-icons/io5";

interface Albums {
  id: number;
  name: string;
  imageUrl: string;
  artist: string;
}


export function MySongs() {

  const [albums, setAlbums] = useState<Albums[]>([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const albumsData = await getAlbums();
        setAlbums(albumsData.albums);
      } catch (error) {
        console.error("Error al obtener los álbumes:", error);
      }
    };

    fetchAlbums();
  }, []);


  return (
    <div className="bg-black h-screen">
      {albums.map((album) => (
            <><div>
          <IoChevronBackOutline className="text-4xl text-white" />
        </div><><div className=" mt-5">
          <section>
            <div className="ml-24 w-52 h-56 bg-gray-800 rounded-lg">
              <img src={album.imageUrl}
                alt={album.name} />
            </div>
            <p className="ml-7 mt-5 text-3xl text-white">{album.name}</p>
          </section>
        </div><div className="relative">
              <div className="ml-5">
                <p className="text-white">Song name</p>
                <p className="text-white">Group name</p>
              </div>
            </div>
            <div className="absolute bottom-14 w-screen">
              <SmallShowPlaySong />
            </div>
            <div className="absolute bottom-0 w-screen">
              <NavBar />
            </div></></>
        ))}
    </div>
  );
}
