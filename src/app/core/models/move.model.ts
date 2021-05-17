import { Resource, Language } from './base.model';

export interface Normal {
  use_after?: any;
  use_before: Resource[];
}

export interface Super {
  use_after?: any;
  use_before?: any;
}

export interface ContestCombos {
  normal: Normal;
  super: Super;
}

export interface EffectEntry {
  effect: string;
  language: Language;
  short_effect: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
  version_group: VersionGroup;
}

export interface Meta {
  ailment: Resource;
  ailment_chance: number;
  category: Resource;
  crit_rate: number;
  drain: number;
  flinch_chance: number;
  healing: number;
  max_hits?: any;
  max_turns?: any;
  min_hits?: any;
  min_turns?: any;
  stat_chance: number;
}

export interface Name {
  language: Language;
  name: string;
}

export interface Machine {
  machine: Resource;
  version_group: Resource;
}

export interface Move {
  accuracy: number;
  contest_combos: ContestCombos;
  contest_effect: Resource;
  contest_type: Resource;
  damage_class: Resource;
  effect_chance?: any;
  effect_changes: any[];
  effect_entries: EffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  generation: Resource;
  id: number;
  learned_by_pokemon: Resource[];
  machines: Machine[];
  meta: Meta;
  name: string;
  names: Name[];
  past_values: any[];
  power: number;
  pp: number;
  priority: number;
  stat_changes: any[];
  super_contest_effect: Resource;
  target: Resource;
  type: Resource;
}
