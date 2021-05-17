import { Name, Resource } from './base.model';

export interface MoveAilment {
  id: number;
  moves: Resource[];
  name: string;
  names: Name[];
}
