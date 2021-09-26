import { Language, Name, Resource } from './base.model';

export interface EggGroup {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: Resource[];
}
