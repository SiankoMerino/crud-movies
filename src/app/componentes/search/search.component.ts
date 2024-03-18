import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  textSearch: string = '';
  searchControl = new FormControl('');
  @Output() search = new EventEmitter<string | null>();
  private subscription: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
    this.subscription.add(
      this.searchControl.valueChanges
        .pipe(
          debounceTime(400), // Espera por 400ms de inactividad de teclado antes de procesar
          // distinctUntilChanged() // Procesa solo si el valor ha cambiado
        )
        .subscribe(query => this.search.emit(query))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
