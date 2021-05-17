import { Language, Name, Resource } from './base.model';

export interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
  version: Resource;
}

export interface Genera {
  genus: string;
  language: Language;
}

export interface PalParkEncounter {
  area: Resource;
  base_score: number;
  rate: number;
}

export interface PokedexNumber {
  entry_number: number;
  pokedex: Resource;
}

export interface Variety {
  is_default: boolean;
  pokemon: Resource;
}

export interface PokemonSpecie {
  base_happiness: number;
  capture_rate: number;
  color: Resource;
  egg_groups: Resource[];
  evolution_chain: Resource;
  evolves_from_species?: any;
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genera[];
  generation: Resource;
  growth_rate: Resource;
  habitat: Resource;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: PalParkEncounter[];
  pokedex_numbers: PokedexNumber[];
  shape: Resource;
  varieties: Variety[];
}
