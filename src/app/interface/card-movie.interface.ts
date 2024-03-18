
export interface CardMovie {
    title:      string;
    img:        string;
    title_type: string;
    netflix_id: number | string;
    synopsis:   string;
    rating:     string;
    year:       string;
    runtime:    string;
    imdb_id:    string;
    poster:     string;
    top250:     number;
    top250tv:   number;
    title_date: string;
}

export interface TypeMovie {
    type: string,
    movie: CardMovie,
}

export interface Genre {
    netflix_id: number,
    genre: string
}