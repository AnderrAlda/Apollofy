import { Tracks, User } from "../utils/index.tsx";

export async function getTracks(): Promise<Tracks[]> {
  try {
    const response = await fetch("src/assets/data/tracks.json");
    const JSONResponse = await response.json();
    return JSONResponse;
  } catch (error) {
    throw new Error(`Something is wrong in f APIFetch: ${error}`);
  }
}

export async function getAlbums(): Promise<Tracks[]> {
  try {
    const response = await fetch("src/assets/data/albums.json");
    const JSONResponse = await response.json();
    return JSONResponse;
  } catch (error) {
    throw new Error(`Something is wrong in f APIFetch: ${error}`);
  }
}

export async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch("src/assets/data/users.json");
    const JSONResponse = await response.json();
    const data = JSONResponse.users;
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(`Something is wrong in f APIFetch: ${error}`);
  }
}

export async function addSongToUserLikedSongs(
  userId: number,
  newSongId: number
): Promise<User> {
  try {
    let users = await getUsers();

    const userIndex = users.findIndex((user) => user.id === userId);

    if (userIndex !== -1) {
      const user = users[userIndex];

      if (!user.likedSongs) {
        user.likedSongs = [];
      }

      const existingSongIndex = user.likedSongs.findIndex(
        (song) => song === newSongId
      );

      if (existingSongIndex === -1) {
        user.likedSongs.push(newSongId);

        await fetch(`http://localhost:3000/users/${userId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        console.log("Song added to user's likedSongs:", newSongId);

        return user;
      } else {
        console.log("Song already exists in likedSongs.");
        return user;
      }
    } else {
      console.log("User not found with ID:", userId);
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error adding song to user's likedSongs:", error);
    throw error;
  }
}
export async function deleteSongFromUserLikedSongs(
  userId: number,
  songIdToDelete: number
): Promise<void> {
  try {
    const users = await getUsers();
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex !== -1) {
      const user = users[userIndex];
      if (user.likedSongs) {
        const songIndexToDelete = user.likedSongs.findIndex(
          (songId) => songId === songIdToDelete
        );
        if (songIndexToDelete !== -1) {
          user.likedSongs.splice(songIndexToDelete, 1);
          await fetch(`http://localhost:3000/users/${userId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
          console.log("Song deleted from user's likedSongs:", songIdToDelete);
        } else {
          console.log("Song not found in likedSongs.");
        }
      } else {
        console.log("User does not have a likedSongs array.");
      }
    } else {
      console.log("User not found with ID:", userId);
    }
  } catch (error) {
    console.error("Error deleting song from user's likedSongs:", error);
  }
}
