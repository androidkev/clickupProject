import { Language, Resource } from './base.model';

export interface Description {
  description: string;
  language: Language;
}

export interface Characteristics {
  descriptions: Description[];
  gene_modulo: number;
  highest_stat: Resource;
  id: number;
  possible_values: number[];
}
