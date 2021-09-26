import { Language, Name, Resource } from './base.model';

export interface Description {
  description: string;
  language: Language;
}

export interface MoveTarget {
  descriptions: Description[];
  id: number;
  moves: Resource[];
  name: string;
  names: Name[];
}
