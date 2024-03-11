import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { PublicRoutes } from "../../types/routes";
import { getAlbums, getArtists, getPlaylists } from "../../contexts/GetTrack";

interface Albums {
  id: number;
  name: string;
  imageUrl: string;
  artist: string;
}

export function TopAlbums() {
  const [albums, setAlbums] = useState<Albums[]>([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const albumsData = await getAlbums();
        setAlbums(albumsData);
      } catch (error) {
        console.error("Error al obtener los álbumes:", error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div className="flex gap-8">
      {albums.map((album) => (
        <div key={album.id} className="w-40">
          <NavLink to={`${PublicRoutes.MYSONGS}/${album.id}`}>
            <img
              className="rounded-2xl"
              src={album.imageUrl}
              alt={album.name}
            />
          </NavLink>
          <p className="text-white">{album.name}</p>
          <p className="text-gray-500">{album.artist}</p>
        </div>
      ))}
    </div>
  );
}

interface Artists {
  id: number,
  name: string,
  photoUrl: string,
}

export function TopArtist() {
  const [artists, setArtists] = useState<Artists[]>([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const artistsData = await getArtists();
        setArtists(artistsData);
      } catch (error) {
        console.error("Error al obtener los artistas:", error);
      }
    };

    fetchArtists();
  }, []);

  return (
    <div className="flex gap-8">
      {artists.length > 0 && artists.map((artist) => (
        <div key={artist.id} className="w-40">
          <NavLink to={`${PublicRoutes.MYSONGS}/${artist.id}`}>
            <img
              className="rounded-2xl"
              src={artist.photoUrl}
              alt={artist.name}
            />
          </NavLink>
          <p className="text-white">{artist.name}</p>
          {/* <p className="text-gray-500">{artist.artist}</p> */}
        </div>
      ))}
    </div>
  );
}

interface playList {
  id: number;
  name: string;
  thumbnail: string;
}

export function TopPlaylist() {
  const [playlists, setPlaylists] = useState<playList[]>([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const playlistsData = await getPlaylists(); // Obtiene los datos de las listas de reproducción
        setPlaylists(playlistsData); // Actualiza el estado con los datos de las listas de reproducción
      } catch (error) {
        console.error("Error al obtener las listas de reproducción:", error);
      }
    };

    fetchPlaylists(); // Llama a la función para obtener las listas de reproducción
  }, []); // Ejecuta este efecto solo una vez al montar el componente

  return (
    <div className="flex gap-8">
      {playlists.length > 0 && playlists.map((playlist) => (
        <div key={playlist.id} className="w-40">
          <NavLink to={`${PublicRoutes.MYSONGS}/${playlist.id}`}>
            <img
              className="rounded-2xl"
              src={playlist.thumbnail}
              alt={playlist.name}
            />
          </NavLink>
          <p className="text-white">{playlist.name}</p>
        </div>
      ))}
    </div>
  );
}
