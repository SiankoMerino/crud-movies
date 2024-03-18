export interface MovieResponse {
    object:  ObjectI;
    results: Result[];
}

export interface ObjectI {
    total:  number;
    limit:  number;
    offset: number;
}

export interface Result {
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

