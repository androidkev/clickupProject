import { createSelector } from '@ngrx/store';
import * as Reducer from './reducers';

export interface StoreRootState {
  state: Reducer.State;
}

const selectState = (state: StoreRootState) => state;

export const selectResource = createSelector(selectState, (store: StoreRootState) => {
  return store.state.resource;
});
