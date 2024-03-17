import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-error',
  templateUrl: './load-error.component.html',
  styleUrls: ['./load-error.component.css']
})
export class LoadErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  research() {
    console.log('recargar api');
  }

}
