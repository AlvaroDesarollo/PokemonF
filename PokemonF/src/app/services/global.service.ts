import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public dataPokemon: any = {};
  public indexPokemon: number = 0;

  constructor() { }
}
