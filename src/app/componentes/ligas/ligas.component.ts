import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CardMovie } from 'src/app/interface/card-movie.interface';
import { ListMovie } from 'src/app/mockups/list-movies';
import { ModalMovieComponent } from '../modal-movie/modal-movie.component';

@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.component.html',
  styleUrls: ['./ligas.component.css']
})
export class LigasComponent implements OnInit {

  titleList: string = 'Películas';
  listMovies: CardMovie[] = ListMovie;
  loading: boolean = false;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
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
