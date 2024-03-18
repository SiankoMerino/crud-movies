import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardMovie } from 'src/app/interface/card-movie.interface';
import { ModalMovieComponent } from '../modal-movie/modal-movie.component';
import { MovieService } from 'src/app/servicios/movie.service';

@Component({
  selector: 'app-ligas',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.css']
})
export class ShowMoviesComponent implements OnInit {

  titleList: string = 'Películas';
  listMovies: CardMovie[] = [];
  loading: boolean = true;
  errorList: boolean = false;
  isMovie: boolean = true;
  isActor: boolean = false;

  constructor(
    public dialog: MatDialog,
    private movieService: MovieService
  ) { }

  async ngOnInit() {
    const movies = localStorage.getItem('movies');
    if (!movies) {
      await this.loadMovies()
    } else {
      this.listMovies = JSON.parse(movies)
      this.loading = false;
    }
  }

  async loadMovies() {
    try {
      const response = await this.movieService.obtenerPeliculas();
      this.listMovies = response.results;
      const movies = JSON.stringify(this.listMovies);
      localStorage.setItem('movies', movies)
      this.loading = false;
    } catch (error) {
      console.log(error)
    }
  }

  changeTitle(option: string) {
    this.titleList = (option === 'option1') ? 'Películas' : 'Actores';
    if (option === 'option1') {
      console.log('cargar api de lista de peliculas');
      this.isMovie = true;
      this.isActor = false;
    } else {
      console.log('cargar api de lista de actores');
      this.isMovie = false;
      this.isActor = true;
    }
  }

  addMovie() {
    const dialogRef = this.dialog.open(ModalMovieComponent, {
      data: {
        movie: {
          title: '',
          img: '',
          title_type: 'movie',
          netflix_id: '',
          synopsis: '',
          rating: '',
          year: '',
          runtime: '',
          imdb_id: '',
          poster: '',
          top250: 0,
          top250tv: 0,
          title_date: new Date().getDate().toString(),
        },
        type: 'Crear'
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.movie.netflix_id) {
        this.listMovies.push(result.movie)
        this.updateMovies()
      }
    });
  }

  updateMovies() {
    localStorage.removeItem('movies');
    localStorage.setItem('movies', JSON.stringify(this.listMovies))
  }

  deleteMovies(movieDelete: CardMovie) {
    let result = this.listMovies.filter((movie: CardMovie) => movie.netflix_id !== movieDelete.netflix_id && movie.title !== movieDelete.title);
    this.listMovies = result;
    this.updateMovies();
  }

  searchMovie(text: string | null) {
    if (text && localStorage.getItem('movies')) {
      this.listMovies = JSON.parse(localStorage.getItem('movies')!).filter((movie: CardMovie) =>
        movie.title.toLowerCase().includes(text.toLowerCase())
      );
    } else if(!text && localStorage.getItem('movies')) {
      this.listMovies = JSON.parse(localStorage.getItem('movies')!)
    }
  }
}
