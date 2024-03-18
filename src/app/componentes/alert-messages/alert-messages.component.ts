import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardMovie } from 'src/app/interface/card-movie.interface';
import { ModalMovieComponent } from '../modal-movie/modal-movie.component';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert-messages',
  templateUrl: './alert-messages.component.html',
  styleUrls: ['./alert-messages.component.css']
})
export class AlertMessagesComponents implements OnInit {
  
  message: string = '';

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: {message: string},
  ) {
    this.message = this.data.message;
  }

  ngOnInit(): void {
  }

}
