import { Language } from './base.model';

export interface Lang {
  id: number;
  iso3166: string;
  iso639: string;
  name: string;
  names: Language[];
  official: boolean;
}
