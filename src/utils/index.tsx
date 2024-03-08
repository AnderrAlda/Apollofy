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
    id: number;
    name: string;
    last_name: string;
    email: string;
    password: string;
    city: string;
    gender: string;
    profilePicture: string;
    country: string;
    dateOfBirth: number;

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