import { Language, Resource } from './base.model';
import { Item } from './item.model';

export interface Description {
  description: string;
  language: Language;
}

export interface Name {
  language: Language;
  name: string;
}

export interface ItemAttribute {
  descriptions: Description[];
  id: number;
  items: Resource[];
  name: string;
  names: Name[];
}
