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
): Promise<void> {
  try {
    // Fetch users data
    const users = await getUsers();

    // Find the user with the specified ID
    const userIndex = users.findIndex((user) => user.id === userId);

    // If user is found
    if (userIndex !== -1) {
      // Get the user object
      const user = users[userIndex];

      // Check if the user already has a likedSongs array, if not, create one
      if (!user.likedSongs) {
        user.likedSongs = [];
      }

      // Check if the new song ID already exists in the likedSongs array
      const existingSongIndex = user.likedSongs.findIndex(
        (song) => song === newSongId
      );

      // If the song doesn't exist, add it to the likedSongs array
      if (existingSongIndex === -1) {
        user.likedSongs.push(newSongId);

        // Update the user's data on the server
        await fetch(`http://localhost:3000/users/${userId}`, {
          method: "PATCH", // Use PATCH method to update the user data
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        console.log("Song added to user's likedSongs:", newSongId);
      } else {
        console.log("Song already exists in likedSongs.");
      }
    } else {
      console.log("User not found with ID:", userId);
    }
  } catch (error) {
    console.error("Error adding song to user's likedSongs:", error);
  }
}

export async function deleteSongFromUserLikedSongs(
  userId: number,
  songIdToDelete: number
): Promise<void> {
  try {
    // Fetch users data
    const users = await getUsers();

    // Find the user with the specified ID
    const userIndex = users.findIndex((user) => user.id === userId);

    // If user is found
    if (userIndex !== -1) {
      // Get the user object
      const user = users[userIndex];

      // Check if the user has a likedSongs array
      if (user.likedSongs) {
        // Find the index of the song to delete in the likedSongs array
        const songIndexToDelete = user.likedSongs.findIndex(
          (songId) => songId === songIdToDelete
        );

        // If the song exists in the likedSongs array, delete it
        if (songIndexToDelete !== -1) {
          user.likedSongs.splice(songIndexToDelete, 1);

          // Update the user's data on the server
          await fetch(`http://localhost:3000/users/${userId}`, {
            method: "PATCH", // Use PATCH method to update the user data
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
