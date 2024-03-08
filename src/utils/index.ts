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
