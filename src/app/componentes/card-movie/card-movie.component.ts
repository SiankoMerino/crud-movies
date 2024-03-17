import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardMovie } from 'src/app/interface/card-movie.interface';
import { ModalMovieComponent } from '../modal-movie/modal-movie.component';
import { TitleType } from 'src/app/interface/movieResponse.interface';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {

  @Input() movie: CardMovie = {
    title: '',
    img: '',
    title_type: TitleType.Movie,
    netflix_id: 0,
    synopsis: '',
    rating: '',
    year: '',
    runtime: '',
    imdb_id: '',
    poster: '',
    top250: 0,
    top250tv: 0,
    title_date: new Date(),
  }

  constructor(
    public dialog: MatDialog
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
      console.log('The dialog was closed', result);
    });
  }

}
