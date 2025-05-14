import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { PokemonResponse } from '../pokemonresponse';
import { PokemonResponse2 } from '../pokemonresponse2';



@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
 
  private apiUrl = 'https://api.pokemontcg.io/v2/cards?q=';
  constructor(private http: HttpClient) {}

  getPokeData(name: string): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(this.apiUrl + name )
    .pipe(
      tap(data => console.log('Poke Data error', JSON.stringify(data))
    ),
      catchError(this.handleError)
    );
    
  }
  private handleError(error: HttpErrorResponse) {
    console.log('Error:', error.message);
    return throwError(() =>new Error('Api error' +error.message));
        
  }
  getPokemonData(name:string, page:number):Observable<PokemonResponse2> {
    return this.http.get<PokemonResponse2>(this.apiUrl+ name + "&&page=" + page)
    .pipe(
      tap(data => console.log('Pokemon/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }
}


