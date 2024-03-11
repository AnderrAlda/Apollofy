

export async function getSongs() {
    try {
        const response = await fetch('src/assets/data/tracks.json');
        const JSONResponse = await response.json();
        return JSONResponse;
        } catch (error) {
        // throw new Error(`Something is wrong in f APIFetch: ${error}`);
    }
}

export async function getAlbums() {
    try {
        const response = await fetch('src/assets/data/albums.json');
        const JSONResponsee = await response.json();
        return JSONResponsee;
        } catch (error) {
        // throw new Error(`Something is wrong in f APIFetch: ${error}`);
    }
}