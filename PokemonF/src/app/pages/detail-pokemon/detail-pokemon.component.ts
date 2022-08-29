import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {
  public dataPokemon: any = {};
  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.dataPokemon = this.globalService.dataPokemon;
  }

}
