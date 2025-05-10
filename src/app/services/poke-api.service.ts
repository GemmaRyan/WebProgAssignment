import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonResponse } from '../pokemonresponse';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private apiUrl = 'https://api.pokemontcg.io/v2/cards';

  constructor(private http: HttpClient) {}

  getCardByName(name: string): Observable<PokemonResponse | undefined> {
    const params = new HttpParams().set('q', `name:${name}`);

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map(response => response.data?.[0]) // take the first matching card
    );
  }
}
