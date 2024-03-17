export interface CardMovie {
    netflix_id: number | string,
    title: string,
    img: string,
    synopsis: string,
    rating: string,
}

export interface TypeMovie {
    type: string,
    movie: CardMovie,
}

export interface Genre {
    netflix_id: number,
    genre: string
}