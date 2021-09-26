import { Name, Resource } from './base.model';

export interface Decrease {
  change: number;
  move: Resource;
}

export interface Increase {
  change: number;
  move: Resource;
}

export interface AffectingMoves {
  decrease: Decrease[];
  increase: Increase[];
}

export interface AffectingNatures {
  decrease: Resource[];
  increase: Resource[];
}

export interface Stat {
  affecting_moves: AffectingMoves;
  affecting_natures: AffectingNatures;
  characteristics: Resource[];
  game_index: number;
  id: number;
  is_battle_only: boolean;
  move_damage_class: Resource;
  name: string;
  names: Name[];
}
