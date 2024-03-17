import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LigasComponent } from './componentes/ligas/ligas.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LigasComponent }
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
