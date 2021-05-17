import { Name } from './base.model';

export interface Resource {
  name: string;
  url: string;
}

export interface Berry {
  berry: Resource;
  potency: number;
}

export interface ContestType {
  name: string;
  url: string;
}

export interface Language {
  name: string;
  url: string;
}

export interface BerryFlavor {
  berries: Berry[];
  contest_type: ContestType;
  id: number;
  name: string;
  names: Name[];
}
