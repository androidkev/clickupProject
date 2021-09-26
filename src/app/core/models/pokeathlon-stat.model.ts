import { Name, Resource } from './base.model';

export interface Decrease {
  max_change: number;
  nature: Resource;
}

export interface Increase {
  max_change: number;
  nature: Resource;
}

export interface AffectingNatures {
  decrease: Decrease[];
  increase: Increase[];
}

export interface PokeathlonStat {
  affecting_natures: AffectingNatures;
  id: number;
  name: string;
  names: Name[];
}
