import { Name, Resource } from './base.model';

export interface VersionDetail {
  rate: number;
  version: Resource;
}

export interface EncounterMethodRate {
  encounter_method: Resource;
  version_details: VersionDetail[];
}

export interface EncounterDetail {
  chance: number;
  condition_values: any[];
  max_level: number;
  method: Resource;
  min_level: number;
}

export interface Version2 {
  name: string;
  url: string;
}

export interface VersionDetail2 {
  encounter_details: EncounterDetail[];
  max_chance: number;
  version: Version2;
}

export interface PokemonEncounter {
  pokemon: Resource;
  version_details: VersionDetail2[];
}

export interface LocationArea {
  encounter_method_rates: EncounterMethodRate[];
  game_index: number;
  id: number;
  location: Location;
  name: string;
  names: Name[];
  pokemon_encounters: PokemonEncounter[];
}
