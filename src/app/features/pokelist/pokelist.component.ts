import { Component, Input } from '@angular/core';
import { PokeInfo } from '../../core/model/interface';

@Component({
  selector: 'app-pokelist',
  standalone: true,
  imports: [],
  template: ` <a href="#">{{ pokemonInfo.name }}</a>`,
  styles: `
      a{
      text-decoration:none;
    }`,
})
export class PokelistComponent {
  @Input({ required: true }) pokemonInfo!: PokeInfo;
}
