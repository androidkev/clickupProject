import { Language } from './base.model';

export interface EffectEntry {
  effect: string;
  language: Language;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
}

export interface ContestEffect {
  appeal: number;
  effect_entries: EffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  id: number;
  jam: number;
}
