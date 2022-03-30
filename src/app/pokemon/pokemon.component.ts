import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDialogComponent } from '../pokemon-dialog/pokemon-dialog.component';
import { PokemonResponse } from '../interfaces/pokemon';
import { PokemonService } from '../services/pokemon.service';
import { MatCard } from '@angular/material/card';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input('inPokemon') pokemon!: any;

  constructor(
    private pokemonService: PokemonService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log(this.pokemon)
  }

  onClick(){
    const dialogRef = this.dialog.open(PokemonDialogComponent, {
      data: this.pokemon
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log("Chose", result);
      this.pokemonService.getSelected(result);
    });
  }

}
