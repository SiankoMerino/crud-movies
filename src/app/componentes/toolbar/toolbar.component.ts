import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  selectedOption: string = 'option1';
  imageUrl: string = '../../../assets/img/logo-movie.svg';

  @Output() typeSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.imageUrl = (option === 'option1') ? '../../../assets/img/logo-movie.svg' : '../../../assets/img/logo-actor.svg';
    this.typeSelected.emit(option);
  }

}
