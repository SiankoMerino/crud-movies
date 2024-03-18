import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CardMovie, Genre, TypeMovie } from 'src/app/interface/card-movie.interface';
import { ListGenres } from 'src/app/mockups/list-genres';

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

  constructor(
    public dialogRef: MatDialogRef<ModalMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TypeMovie
  ) { }

  ngOnInit(): void {
    this.urlImagen = this.data.movie.img;
    this.filteredOptionsGenres = this.optionsGenres;
    setTimeout(() => {
    const selectedGenre = this.optionsGenres.find(genre => genre.netflix_id === this.data.movie.netflix_id);
    if (selectedGenre) {
      this.genreName = selectedGenre.genre;
    } else {
      this.genreName = ''; 
    }
      
    }, 5000);
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
    if (this.data.type === 'Crear') {
      console.log('api para nueva pelicula');
    } else {
      console.log('api para editar pelicula');
    }
  }

}
