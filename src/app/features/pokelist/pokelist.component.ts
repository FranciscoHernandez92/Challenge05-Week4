import { Component, Input } from '@angular/core';
import { PokeInfo } from '../../core/model/interface';

@Component({
  selector: 'app-pokelist',
  standalone: true,
  imports: [],
  template: ` <a href="#">
      <img [src]="pokemonInfo.img" alt="{{ pokemonInfo.img }} Image" />
      {{ pokemonInfo.name }}</a
    >
    <p>{{ pokemonInfo.weight }} Kg</p>
    <p>{{ pokemonInfo.height }} cm</p>`,
  styles: `
      a{
      text-decoration:none;
    }`,
})
export class PokelistComponent {
  @Input({ required: true }) pokemonInfo!: PokeInfo;
}
