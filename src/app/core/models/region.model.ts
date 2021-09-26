import { Name, Resource } from './base.model';

export interface Region {
  id: number;
  locations: Location[];
  main_generation: Resource;
  name: string;
  names: Name[];
  pokedexes: Resource[];
  version_groups: Resource[];
}
