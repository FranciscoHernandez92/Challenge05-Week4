export interface BasePoke {
  count: number;
  next: string | undefined;
  previous: string | undefined;
  results: PokeInfo[];
}

export interface PokeInfo {
  name: string;
  url: string;
}

export interface PokeCard extends PokeInfo {
  name: string;
  img: string;
  weight: string;
  heigth: string;
}
