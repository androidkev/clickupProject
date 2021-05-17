import { Name, Resource } from './base.model';

export interface PokemonHabitat {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: Resource[];
}
