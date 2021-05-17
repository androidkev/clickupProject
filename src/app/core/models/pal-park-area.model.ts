import { Name, Resource } from './base.model';

export interface PokemonEncounter {
  base_score: number;
  pokemon_species: Resource;
  rate: number;
}

export interface PalParkArea {
  id: number;
  name: string;
  names: Name[];
  pokemon_encounters: PokemonEncounter[];
}
