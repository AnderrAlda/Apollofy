// import { useEffect } from "react";
// import { songs } from "../data/data";

export async function getSongs() {
    try {
        const response = await fetch('src/assets/data/tracks.json');
        const JSONResponse = await response.json();
        return JSONResponse;
        } catch (error) {
        // throw new Error(`Something is wrong in f APIFetch: ${error}`);
    }
}

// useEffect(() => {
//     async function getProductAPI() {
//       const response = await getSongs();
//       songs.setProducts(response);
//     }

//     getProductAPI();
//   },);