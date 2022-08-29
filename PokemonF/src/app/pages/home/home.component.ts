import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import {  Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { PeticionesService } from 'src/app/services/peticiones.service';
// import { pokemons } from './mockPokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pokemons: any;
  public pokemonPagination: any;
  pageEvent: PageEvent;
  datasource: null;
  pageIndex: number;
  pageSize: number;
  length: number;
  constructor(
    private peticionesService: PeticionesService,
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit() {

    // this.length = pokemons.length;
    // this.pokemons = pokemons;
    this.getPokemons();
  }

  public getPokemons() {
    this.peticionesService.getPokemons().subscribe( dataPokemons => {
      this.pokemons = dataPokemons;
      this.length = dataPokemons.length;
      this.handlePageEvent();
    });
  }

  public handlePageEvent(event?: PageEvent) {
    if (!this.pokemons) {
      return [];
    }
    this.pageSize = 1;
    this.pageIndex = this.globalService.indexPokemon;
    if (event) {
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
    }
    const op1 = this.pageIndex * this.pageSize;
    const op2 = (this.pageIndex + 1) * this.pageSize;
    this.pokemonPagination = this.pokemons.slice(op1, op2);
    return event;
  }

  detalle(pokemon: any) {
    this.peticionesService.getPokemons(pokemon.id).subscribe((data) => {
      console.log('response pokemones::::', data);
      this.globalService.dataPokemon = data;
      this.globalService.indexPokemon = this.pageIndex;

      this.router.navigate([`/home/detalle/${pokemon.nombre}`]);

    }, error => {
      console.log(error, 'err');
    });
  }

}
