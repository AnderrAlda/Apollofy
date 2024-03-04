import { Tracks } from '../utils/index.tsx';

export async function getTracks(): Promise<Tracks[]> {
    try {
      const response = await fetch('src/assets/data/Tracks.json');
      const JSONResponse = await response.json();
      return JSONResponse;
    } catch (error) {
      throw new Error(`Something is wrong in f APIFetch: ${error}`);
    }
  }