import { Language } from './base.model';
import { Move } from './pokemon.model';

export interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
}

export interface SuperContestEffect {
  appeal: number;
  flavor_text_entries: FlavorTextEntry[];
  id: number;
  moves: Move[];
}
