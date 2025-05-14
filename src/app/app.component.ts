import { Component } from '@angular/core';
import { PokemonResponse } from './pokemonresponse';
import { PokeApiService } from './services/poke-api.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLinkActive , RouterLink } from '@angular/router';
import { SearchComponent } from './components/search/search.component';



@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon Cards';
  pokeData:PokemonResponse| undefined;
  errorMessage: any;

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