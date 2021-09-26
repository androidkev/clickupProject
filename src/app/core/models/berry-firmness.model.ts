import { Language, Name } from './base.model';

export interface Berry {
  name: string;
  url: string;
}

export interface BerryFirmness {
  berries: Berry[];
  id: number;
  name: string;
  names: Name[];
}
