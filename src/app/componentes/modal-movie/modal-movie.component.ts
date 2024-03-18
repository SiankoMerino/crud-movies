import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CardMovie, Genre, TypeMovie } from 'src/app/interface/card-movie.interface';
import { ListGenres } from 'src/app/mockups/list-genres';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AlertMessagesComponents } from '../alert-messages/alert-messages.component';

@Component({
  selector: 'app-modal-movie',
  templateUrl: './modal-movie.component.html',
  styleUrls: ['./modal-movie.component.css']
})
export class ModalMovieComponent implements OnInit {
  
  urlImagen: string | ArrayBuffer | null = '';
  optionsGenres: Genre[] = ListGenres;
  filteredOptionsGenres: Genre[] = ListGenres;
  genreName: string = '';
  durationInSeconds = 5;

  constructor(
    public dialogRef: MatDialogRef<ModalMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TypeMovie,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.urlImagen = this.data.movie.img;
    this.filteredOptionsGenres = this.optionsGenres;
  }

  filterGenres(value: string): void {
    if (!value) {
      this.filteredOptionsGenres = this.optionsGenres;
      return;
    }
    this.filteredOptionsGenres = this.optionsGenres.filter(genre =>
      genre.genre.toLowerCase().includes(value.toLowerCase())
    );
  }
  
  updateImg(event: any): void {
    const archivo = event.target.files[0];
    if (archivo) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.urlImagen = reader.result as string;
        this.data.movie.img = this.urlImagen; 
      };
      reader.readAsDataURL(archivo);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  saveMovie(): void {
    if (!this.data.movie.title || !this.data.movie.synopsis || !this.data.movie.img ||
        !this.data.movie.title_type || !this.data.movie.netflix_id || !this.data.movie.year) {
      this.openSnackBar('Ingresar los campos obligatorios', 'warning');
      return;
    }
    this.openSnackBar('Se agrego pelicula', 'check');
    this.dialogRef.close(this.data);
  }

  openSnackBar(message: string, icon: string) {
    this._snackBar.openFromComponent(AlertMessagesComponents, {
      data: {
        message: message,
        icon: icon
      },
      duration: this.durationInSeconds * 1000,
    });
  }

}
