import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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
    await this.loadMovies()
  }

  async loadMovies() {
    try {
      const response = await this.movieService.obtenerPeliculas();
      this.listMovies = response.results;
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
          netflix_id: '',
          title: '',
          img: '',
          synopsis: '',
          rating: ''
        },
        type: 'Nueva'
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
