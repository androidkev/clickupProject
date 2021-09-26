import { Language, Resource } from './base.model';

export interface Name {
  language: Language;
  name: string;
}

export interface Generation {
  abilities: any[];
  id: number;
  main_region: Resource;
  moves: Resource[];
  name: string;
  names: Name[];
  pokemon_species: Resource[];
  types: Resource[];
  version_groups: Resource[];
}
