import { Name, Resource } from './base.model';

export interface PokemonColor {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: Resource[];
}
