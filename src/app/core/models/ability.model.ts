import { Language, Resource } from './base.model';

export interface EffectEntry {
  effect: string;
  language: Language;
}

export interface EffectChange {
  effect_entries: EffectEntry[];
  version_group: Resource;
}

export interface EffectEntryResource {
  effect: string;
  language: Language;
  short_effect: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
  version_group: Resource;
}

export interface Generation {
  name: string;
  url: string;
}

export interface Name {
  language: Language;
  name: string;
}

export interface Pokemon {
  is_hidden: boolean;
  pokemon: Resource;
  slot: number;
}

export interface Ability {
  effect_changes: EffectChange[];
  effect_entries: EffectEntryResource[];
  flavor_text_entries: FlavorTextEntry[];
  generation: Generation;
  id: number;
  is_main_series: boolean;
  name: string;
  names: Name[];
  pokemon: Pokemon[];
}
