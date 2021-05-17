import { Language, Name } from './base.model';

export interface EncounterMethod {
  id: number;
  name: string;
  names: Name[];
  order: number;
}
