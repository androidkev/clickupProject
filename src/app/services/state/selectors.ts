import { createSelector } from '@ngrx/store';
import { StoreRootState } from '../../core/constants/constants';

const selectState = (state: StoreRootState) => state;

export const selectResource = createSelector(selectState, (store: StoreRootState) => {
  return store.state.resource;
});

export const selectSelectedResource = createSelector(selectState, (store: StoreRootState) => {
  return store.state.selectedResourceContent;
});

export const selectResults = createSelector(selectState, (store: StoreRootState) => {
  return store.state.resultsData;
});
