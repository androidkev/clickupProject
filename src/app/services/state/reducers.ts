import { Action, ActionReducerMap, createReducer, on, ReducerManager, select } from '@ngrx/store';
import * as Actions from './actions';
import { Resource, Content, Table, StoreRootState } from '../../core/constants/constants';
import { setSelectedResourceContent } from './actions';

export interface State {
  resourceLoader: boolean;
  resource: Resource[];
  tables: Table[];
  selectedResource?: Resource;
  selectedResourceContent?: Content;
  resultsData: any;
}

export const initialState: State = {
  resourceLoader: false,
  tables: [],
  resource: [],
  resultsData: [],
};

export const PokemonReducer = createReducer(
  initialState,
  on(Actions.getResource, (state) => ({
    ...state,
    resource: [{ name: 'Loading', url: 'N/A' }],
  })),
  on(Actions.setResource, (state, { action }) => ({
    ...state,
    resourceLoader: false,
    resource: [...action],
  })),
  on(Actions.setSelectedResource, (state, { resource }) => ({
    ...state,
    selectedResource: resource,
    resultsData: [],
  })),
  on(Actions.setSelectedResourceContent, (state, { content }) => ({
    ...state,
    selectedResourceContent: content,
  })),
  on(Actions.setResultsData, (state, { data }) => ({
    ...state,
    resultsData: [...state.resultsData, data],
  }))
);

export const reducers: ActionReducerMap<StoreRootState> = {
  state: reducer,
};

export function reducer(state: State | undefined, action: Action) {
  return PokemonReducer(state, action);
}
