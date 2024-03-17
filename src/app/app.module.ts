import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LigasComponent } from './componentes/ligas/ligas.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './componentes/search/search.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CardMovieComponent } from './componentes/card-movie/card-movie.component';
import { ModalMovieComponent } from './componentes/modal-movie/modal-movie.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AsyncPipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LigasComponent,
    ToolbarComponent,
    SearchComponent,
    CardMovieComponent,
    ModalMovieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    AsyncPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
