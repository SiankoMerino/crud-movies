import { TitleType } from "./movieResponse.interface";

export interface CardMovie {
    title:      string;
    img:        string;
    title_type: TitleType;
    netflix_id: number;
    synopsis:   string;
    rating:     string;
    year:       string;
    runtime:    string;
    imdb_id:    string;
    poster:     string;
    top250:     number;
    top250tv:   number;
    title_date: Date;
}

export interface TypeMovie {
    type: string,
    movie: CardMovie,
}

export interface Genre {
    netflix_id: number,
    genre: string
}