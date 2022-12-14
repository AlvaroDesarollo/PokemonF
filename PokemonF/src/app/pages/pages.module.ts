import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { AutenticacionGuard } from '../services/guards/autenticacion.guard';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    DetailPokemonComponent,
  ],
  exports: [
    PagesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
    MatCardModule,
    MatPaginatorModule,
  ],
  providers: [
    AutenticacionGuard
  ]
})
export class PagesModule {}
