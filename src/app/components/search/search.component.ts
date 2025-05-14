import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeApiService } from '../../services/poke-api.service';
import { PokemonResponse } from '../../pokemonresponse';

@Component({
  selector: 'app-search',   
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  pokeData: PokemonResponse | undefined;
  errorMessage: any;
  pokemonName: string = '';
  currentPage: number = 1;

  constructor(private pokeApiService: PokeApiService) {}
  getPokeDetails(name: string): boolean {
    this.pokeApiService.getPokeData(name).subscribe(
      pokeData => {
        this.pokeData = pokeData;
        console.log('Poke Data:', this.pokeData.types);
      }
    );
    return false;
  }
  
}