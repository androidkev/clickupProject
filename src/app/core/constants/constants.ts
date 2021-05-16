import { PokemonEffects } from '../../services/state/effects';
import { Store } from '@ngrx/store';
export interface Resource {
  name: string;
  url: string;
}

export interface Content {
  count: number;
  next: string;
  results: Results[];
}

export interface Table {
  resource?: Resource[];
  content?: Content;
}

export interface Results {
  name?: string;
  url: string;
}

export interface State {
  resourceLoader: boolean;
  resource: Resource[];
  tables: Table[];
  selectedResource?: Resource;
  selectedResourceContent?: Content;
  resultsData: any;
}

export interface StoreRootState {
  state: State;
}
