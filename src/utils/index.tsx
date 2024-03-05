export interface Artist {
    id: Int16Array;
    name: string;
    genres: string[];
    popularity: Int16Array;
    photoUrl: string;
}

export interface Playlist {
    id: Int16Array;
    name:  string;
    isFollowed: boolean;
    thumbnail: string;
    description: string;
    primaryColor: string;
}

export interface Tracks {
    id: Int16Array;
    name: string;
    artist: string;
    url: boolean;
    img: string;
    genre: string;
    liked: string;
}

export interface User {
    id: Int16Array;
    first_name: string;
    last_name: string;
    email: boolean;
    profilePicture: string;
    isLoggedIn: boolean;
}

export interface Album {
    id: Int16Array;
    name: string;
    imageUrl: string;
    artist: boolean;
}

export interface Genre {
    id: Int16Array;
    name: string;
}