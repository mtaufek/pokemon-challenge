import { Component, Inject, Input, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-dialog',
  templateUrl: './pokemon-dialog.component.html',
  styleUrls: ['./pokemon-dialog.component.css']
})
export class PokemonDialogComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<PokemonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private pokemonService: PokemonService) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  onSelect(item: any): any{
    console.log(item)
    this.pokemonService.getSelected(item);
    console.log(item)
    this.matDialogRef.close();
  }

  cancel(){
    console.log("not selected");
    this.matDialogRef.close();
  }

}
