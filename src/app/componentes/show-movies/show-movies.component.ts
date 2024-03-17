import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CardMovie } from 'src/app/interface/card-movie.interface';
import { ListMovie } from 'src/app/mockups/list-movies';
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
    } else {
      console.log('cargar api de lista de actores');
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
