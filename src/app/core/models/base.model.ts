export interface Resource {
  name?: string;
  url: string;
}

export interface Language {
  name: string;
  url: string;
}

export interface Name {
  color?: string;
  language: Language;
  name: string;
}

export interface GameIndice {
  game_index: number;
  generation: Resource;
}
