export interface imagen {
    text: string;
}

export interface infoArtist {
    name: string;
    image: imagen;
}

export interface artist {
    artist: infoArtist[];
}

export interface users {
    // tslint:disable-next-line: align
    artist: artist;
}
