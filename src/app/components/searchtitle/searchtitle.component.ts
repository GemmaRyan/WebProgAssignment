import { Component } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { PokemonResponse } from '../../pokemonresponse';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-searchtitle',
  imports: [],
  templateUrl: './searchtitle.component.html',
  styleUrl: './searchtitle.component.css'
})
export class SearchtitleComponent {

  constructor(private pokeApiService: PokeApiService) {}

   getCardDetails(pokeName: string): boolean {
    this.pokeApiService.getCardByName(pokeName).subscribe({
      next: (data) => {
        if (data) {
          this.pokeData = data;
          this.errorMessage = '';
        } else {
          this.pokeData = undefined;
          this.errorMessage = 'No card found for that name.';
        }
      },
      error: (err) => {
        console.error(err);
        this.pokeData = undefined;
        this.errorMessage = 'Error fetching data.';
      }
    });

    return false; // prevent page reload
  }



  pokeData : PokemonResponse | undefined;
  errorMessage = '';
}
