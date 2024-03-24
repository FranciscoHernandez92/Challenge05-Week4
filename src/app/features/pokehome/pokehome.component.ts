import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../core/services/api-service.service';
import { Observable } from 'rxjs';
import { BasePoke, PokeInfo } from '../../core/model/interface';
import { AsyncPipe } from '@angular/common';
import { PokelistComponent } from '../pokelist/pokelist.component';
import { PageButtonsComponent } from '../page-buttons/page-buttons.component';

@Component({
  selector: 'app-pokehome',
  standalone: true,
  template: `
    @if (pokemonResult$ | async; as poke) {
    <ul>
      @for (item of poke.results; track item.name) {
      <li>
        <app-pokelist [pokemonInfo]="item" />
      </li>
      }
    </ul>
    <app-page-buttons
      (nextClicked)="onNextPage()"
      (previousClicked)="onPreviousPage()"
    ></app-page-buttons>
    }
  `,
  styles: `
  ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-inline: 6rem;
    li{
      border: 1px solid;
      border-radius: 0.5rem;
      text-align:center;
    }

    }
  `,
  imports: [AsyncPipe, PokelistComponent, PageButtonsComponent],
})
export class PokehomeComponent implements OnInit {
  pokemon: PokeInfo[] = [];
  public pokemonResult$!: Observable<BasePoke>;
  constructor(private service: ApiServiceService) {}
  ngOnInit(): void {
    this.pokemonResult$ = this.service.getAllPokemon(30, 30);
  }
  getPokemonDetails(name: string): void {
    this.service.getPokemonDetails(name).subscribe((element) => {
      const pokeIndex = this.pokemon.findIndex(
        (pokemon) => pokemon.name === name
      );
      this.pokemon[pokeIndex].weight = element.weight;
      this.pokemon[pokeIndex].height = element.height;
      this.pokemon[pokeIndex].img = element.img;
    });
  }
  loadPokemon(limit: number, offset: number) {
    this.service.getAllPokemon(limit, offset).subscribe((element) => {
      this.pokemon = element.results;
      this.pokemon.forEach((pokemon) => {
        this.service.getPokemonDetails(pokemon.name).subscribe((detail) => {
          pokemon.height = detail.height;
          pokemon.weight = detail.weight;
          pokemon.img = detail.img;
        });
      });
    });
  }
  onNextPage() {
    const pageSize = 20;
    const nextPage = this.pokemon.length + pageSize;
    this.loadPokemon(pageSize, nextPage);
  }
  onPreviousPage() {
    const previousPage = Math.max(0, this.pokemon.length - 20);
    this.loadPokemon(20, previousPage);
  }
}
