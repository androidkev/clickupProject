import { GameIndice, Name, Resource } from './base.model';

export interface Location {
  areas: Resource[];
  game_indices: GameIndice[];
  id: number;
  name: string;
  names: Name[];
  region: Resource;
}
