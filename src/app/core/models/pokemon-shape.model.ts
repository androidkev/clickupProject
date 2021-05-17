import { Language, Name, Resource } from './base.model';

export interface AwesomeName {
  awesome_name: string;
  language: Language;
}

export interface PokemonShape {
  awesome_names: AwesomeName[];
  id: number;
  name: string;
  names: Name[];
  pokemon_species: Resource[];
}
