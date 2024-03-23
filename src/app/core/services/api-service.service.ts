import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasePoke } from '../model/interface';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  urlBase = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) {}
  getAllPokemon(): Observable<BasePoke> {
    return this.http.get<BasePoke>(this.urlBase);
  }
  getPokemonDetails() {}
}
