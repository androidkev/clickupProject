import { Language, Resource } from './base.model';

export interface Description {
  description: string;
  language: Language;
}

export interface MoveCategory {
  descriptions: Description[];
  id: number;
  moves: Resource[];
  name: string;
}
