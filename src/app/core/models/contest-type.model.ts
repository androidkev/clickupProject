import { Language, Resource } from './base.model';

export interface Name {
  color: string;
  language: Language;
  name: string;
}

export interface RootObject {
  berry_flavor: Resource;
  id: number;
  name: string;
  names: Name[];
}
