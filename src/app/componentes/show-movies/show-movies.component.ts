import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CardMovie } from 'src/app/interface/card-movie.interface';
import { ModalMovieComponent } from '../modal-movie/modal-movie.component';
import { MovieService } from 'src/app/servicios/movie.service';
import { ListMovie } from 'src/app/mockups/list-movies';

@Component({
  selector: 'app-ligas',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.css']
})
export class ShowMoviesComponent implements OnInit {

  titleList: string = 'Películas';
  listMovies: CardMovie[] = ListMovie;
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
          netflix_id: 0,
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
      this.listMovies.push(result.movie)
      this.updateMovies()
    });
  }

  updateMovies() {
    localStorage.removeItem('movies');
    localStorage.setItem('movies', JSON.stringify(this.listMovies))
  }

}
