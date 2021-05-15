import { PokemonEffects } from '../../services/state/effects';
export interface Resource {
  name: string;
  url: string;
}

export interface Content {
  count: number;
  next: string;
  results: Results[];
}

export interface Table {
  resource?: Resource[];
  content?: Content;
}

export interface Results {
  name?: string;
  url: string;
}
