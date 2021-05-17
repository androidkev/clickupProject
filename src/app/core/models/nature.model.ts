import { Name, Resource } from './base.model';

export interface MoveBattleStylePreference {
  high_hp_preference: number;
  low_hp_preference: number;
  move_battle_style: Resource;
}

export interface PokeathlonStatChange {
  max_change: number;
  pokeathlon_stat: Resource;
}

export interface Nature {
  decreased_stat: Resource;
  hates_flavor: Resource;
  id: number;
  increased_stat: Resource;
  likes_flavor: Resource;
  move_battle_style_preferences: MoveBattleStylePreference[];
  name: string;
  names: Name[];
  pokeathlon_stat_changes: PokeathlonStatChange[];
}
