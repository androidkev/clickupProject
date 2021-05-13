import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from './actions';

export interface State {
  pokemon: string;
}

export const initialState: State = {
  pokemon: '',
};

const PokemonReducer = createReducer(
  initialState,
  on(Actions.firstAction, (state, { action }) => ({
    ...state,
    pokemon: action,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return PokemonReducer(state, action);
}
