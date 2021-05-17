import { Language, Name, Resource } from './base.model';

export interface Description {
  description: string;
  language: Language;
}

export interface PokemonEntry {
  entry_number: number;
  pokemon_species: Resource;
}

export interface Pokedex {
  descriptions: Description[];
  id: number;
  is_main_series: boolean;
  name: string;
  names: Name[];
  pokemon_entries: PokemonEntry[];
  region?: Resource;
  version_groups: any[];
}
