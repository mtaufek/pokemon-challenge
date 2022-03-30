import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { PokemonResponse } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = "https://pokeapi.co/api/v2/pokemon";
  show: boolean = true;
  subjectSelected$ = new Subject();
  constructor(private http: HttpClient) { }

  getPokemon(pokemonItem: string) {
    console.log([this.baseUrl, pokemonItem].join('/'))
    return this.http.get([this.baseUrl, pokemonItem].join('/')) as Observable<PokemonResponse>;
  }

  getSelected(data: string){
    console.log(data)
    this.subjectSelected$.next(data);
  }

}
