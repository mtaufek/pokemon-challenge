import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http: HttpClient) { }

  getPokemon(pokemonItem: string) {
    console.log([this.baseUrl, pokemonItem].join('/'))
    return this.http.get([this.baseUrl, pokemonItem].join('/')) as Observable<PokemonResponse>;
  }

}
