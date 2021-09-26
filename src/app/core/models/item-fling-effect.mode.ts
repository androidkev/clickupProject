import { Language, Resource } from './base.model';

export interface EffectEntry {
  effect: string;
  language: Language;
}

export interface ItemFlingEffect {
  effect_entries: EffectEntry[];
  id: number;
  items: Resource[];
  name: string;
}
