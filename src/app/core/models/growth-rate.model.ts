import { Language, Resource } from './base.model';

export interface Description {
  description: string;
  language: Language;
}

export interface Level {
  experience: number;
  level: number;
}

export interface GrowthRate {
  descriptions: Description[];
  formula: string;
  id: number;
  levels: Level[];
  name: string;
  pokemon_species: Resource[];
}
