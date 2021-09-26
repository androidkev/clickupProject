import { Resource, Language, GameIndice } from './base.model';

export interface EffectEntry {
  effect: string;
  language: Language;
  short_effect: string;
}

export interface FlavorTextEntry {
  language: Language;
  text: string;
  version_group: Resource;
}

export interface Name {
  language: Language;
  name: string;
}

export interface Sprites {
  default: string;
}

export interface Item {
  attributes: Resource[];
  baby_trigger_for?: any;
  category: Resource;
  cost: number;
  effect_entries: EffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  fling_effect?: any;
  fling_power?: any;
  game_indices: GameIndice[];
  held_by_pokemon: any[];
  id: number;
  machines: any[];
  name: string;
  names: Name[];
  sprites: Sprites;
}
