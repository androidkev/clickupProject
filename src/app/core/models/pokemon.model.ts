import { GameIndice, Resource } from './base.model';

export interface Ability {
  ability: Resource;
  is_hidden: boolean;
  slot: number;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Resource;
  version_group: Resource;
}

export interface Move {
  move: Resource;
  version_group_details: VersionGroupDetail[];
}

export interface DreamWorld {
  front_default: string;
  front_female?: any;
}

export interface OfficialArtwork {
  front_default: string;
}

export interface Other {
  dream_world: DreamWorld;
  'official-artwork': OfficialArtwork;
}

export interface RedBlue {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

export interface Yellow {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

export interface GenerationI {
  'red-blue': RedBlue;
  yellow: Yellow;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface Silver {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Silver;
}

export interface Emerald {
  front_default: string;
  front_shiny: string;
}

export interface FireredLeafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface RubySapphire {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface GenerationIii {
  emerald: Emerald;
  'firered-leafgreen': FireredLeafgreen;
  'ruby-sapphire': RubySapphire;
}

export interface GameVersion {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
}

export interface GenerationIv {
  'diamond-pearl': GameVersion;
  'heartgold-soulsilver': GameVersion;
  platinum: GameVersion;
}

export interface Animated {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface GenerationV {
  'black-white': GameVersion;
}

export interface GenerationVi {
  'omegaruby-alphasapphire': GameVersion;
  'x-y': GameVersion;
}

export interface Icons {
  front_default: string;
  front_female?: any;
}

export interface GenerationVii {
  icons: Icons;
  'ultra-sun-ultra-moon': GameVersion;
}

export interface GenerationViii {
  icons: Icons;
}

export interface Versions {
  'generation-i': GenerationI;
  'generation-ii': GenerationIi;
  'generation-iii': GenerationIii;
  'generation-iv': GenerationIv;
  'generation-v': GenerationV;
  'generation-vi': GenerationVi;
  'generation-vii': GenerationVii;
  'generation-viii': GenerationViii;
}

export interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  other: Other;
  versions: Versions;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Resource;
}

export interface Type {
  slot: number;
  type: Resource;
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Resource[];
  game_indices: GameIndice[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Resource;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}
