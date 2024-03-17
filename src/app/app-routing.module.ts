import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowMoviesComponent } from './componentes/show-movies/show-movies.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ShowMoviesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
