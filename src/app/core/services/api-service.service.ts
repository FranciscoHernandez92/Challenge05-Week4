import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasePoke, PokeCard } from '../model/interface';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  urlBase = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) {}
  getAllPokemon(limit: number, offset: number): Observable<BasePoke> {
    const params = new HttpParams()
      .set('limit', limit.toString())
      .set('offset', offset.toString());
    return this.http.get<BasePoke>(this.urlBase, { params });
  }
  getPokemonDetails(name: string): Observable<PokeCard> {
    return this.http.get<PokeCard>(`${this.urlBase}${name}`);
  }
}
