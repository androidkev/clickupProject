import { Name, Resource } from './base.model';

export interface EvolutionTrigger {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: Resource[];
}
