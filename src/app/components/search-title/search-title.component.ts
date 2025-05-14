import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeApiService } from '../../services/poke-api.service';
import { PokemonResponse2 } from '../../pokemonresponse2';


@Component({
  selector: 'app-search-title',
  imports: [CommonModule],
  templateUrl: './search-title.component.html',
  styleUrl: './search-title.component.css'
})
export class SearchTitleComponent {
  constructor(private pokeApiService: PokeApiService) {}
  pokeData: PokemonResponse2[] = []; 
  currentPage: number = 1;
  maxPages: number = 0;
  errorMessage: any;


  getPokeDetails(name:string): boolean {
    this.pokeApiService.getPokemonData(name,this.currentPage).subscribe(
      pokeData => {
        this.pokeData.push(pokeData);
      }
    )
    return false;
  }

  getPreviousPage(name:string): boolean {
    this.currentPage--;
    if (this.currentPage<1)
      this.currentPage=1;
    this.pokeApiService.getPokemonData(name, this.currentPage).subscribe(
      pokeData => {
        this.pokeData.push(pokeData);
      }
    )
    return false;
  }

  getNextPage(name:string): boolean {
    this.currentPage++;
    this.pokeApiService.getPokemonData(name, this.currentPage).subscribe(
      pokeData => {
         this.pokeData.push(pokeData);
      }
    )
    return false;
  }


}
