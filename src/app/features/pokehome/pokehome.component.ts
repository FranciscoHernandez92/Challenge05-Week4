import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../core/services/api-service.service';
import { Observable } from 'rxjs';
import { BasePoke } from '../../core/model/interface';
import { AsyncPipe } from '@angular/common';
import { PokelistComponent } from '../pokelist/pokelist.component';

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
    }
  `,
  styles: `
  ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    border: 2px solid;
    margin-inline: 6rem;
    li{
      border: 1px solid;
      border-radius: 0.5rem;
      text-align:center;
    }

    }
  `,
  imports: [AsyncPipe, PokelistComponent],
})
export class PokehomeComponent implements OnInit {
  pokemon!: object;
  public pokemonResult$!: Observable<BasePoke>;
  constructor(private service: ApiServiceService) {}
  ngOnInit(): void {
    this.pokemonResult$ = this.service.getAllPokemon();
  }
}
