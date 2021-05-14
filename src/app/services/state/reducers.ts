import { Action, createReducer, on, select } from '@ngrx/store';
import * as Actions from './actions';
import { Resource, Content } from '../../core/constants/constants';
import { setSelectedResourceContent } from './actions';

export interface State {
  resourceLoader: boolean;
  resource: Resource[];
  selectedResource?: Resource;
  selectedResourceContent?: Content;
}

export const initialState: State = {
  resourceLoader: false,
  resource: [],
};

export const PokemonReducer = createReducer(
  initialState,
  on(Actions.getResource, (state) => ({
    ...state,
    resource: [{ resourceName: 'Loading', url: 'N/A' }],
  })),
  on(Actions.setResource, (state, { action }) => ({
    ...state,
    resourceLoader: false,
    resource: [...action],
  })),
  on(Actions.setSelectedResource, (state, { resource }) => ({
    ...state,
    selectedResource: resource,
  })),
  on(Actions.setSelectedResourceContent, (state, { content }) => ({
    ...state,
    setSelectedResourceContent: content,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return PokemonReducer(state, action);
}
