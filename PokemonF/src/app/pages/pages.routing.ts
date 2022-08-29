import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionGuard } from '../services/guards/autenticacion.guard';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'home',
    component: PagesComponent,
    canActivate: [AutenticacionGuard],
    children: [
      { path: '', component: HomeComponent , canActivate: [AutenticacionGuard]},
      { path: 'detalle/:pokemon', component: DetailPokemonComponent, canActivate: [AutenticacionGuard], },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
