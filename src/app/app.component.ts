import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { Subscription, forkJoin } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokemon-challenge';
  starterPokemon = ["bulbasaur", "squirtle", "charmander"];
  subscribePokemonService!: Subscription;
  selectedPokemon = '';
  show = true;

  arr: any = []
  pokemonList!: any;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.subjectSelected$.subscribe((data:any) => {
      console.log(data)
      if(data) {
        this.show = false;
        this.selectedPokemon = data;
      }else{
        this.show = true;
        this.selectedPokemon = '';
      }
    })
    for(let pokemon of this.starterPokemon){
      this.arr.push(this.pokemonService.getPokemon(pokemon));
    }

    forkJoin(this.arr).subscribe((data: any) => {
      this.pokemonList = data;
    })

  }
}
