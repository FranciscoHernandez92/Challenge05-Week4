export interface BasePoke {
  count: number;
  next: string | undefined;
  previous: string | undefined;
  results: PokeInfo[];
}

export interface PokeInfo extends PokeCard {
  name: string;
  url: string;
}

export interface PokeCard {
  weight: string;
  height: string;
  img: string;
}
