import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardMovie } from 'src/app/interface/card-movie.interface';
import { ModalMovieComponent } from '../modal-movie/modal-movie.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {

  @Input() movie: CardMovie = {
    title: '',
    img: '',
    title_type: 'Movie',
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
  }

  @Output() update = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter<CardMovie>()

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.movie.rating = this.movie.rating || '0';
  }

  editMovie() {
    const dialogRef = this.dialog.open(ModalMovieComponent, {
      data: {
        movie: this.movie,
        type: 'Editar'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.openSnackBar('Película Editada')
      this.update.emit(true);
    });
  }

  deleteMovie() {
    this.openSnackBar('Película Eliminada')
    this.delete.emit(this.movie)
  }

  openSnackBar(message: string, action: string = 'Hecho') {
    this._snackBar.open(message, action, {
      duration: 4000,
      verticalPosition: 'top',
    });
  }

}
