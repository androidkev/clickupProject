import { Injectable } from '@angular/core';
import { from, Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as Reducer from '../state/reducers';
import * as fromState from '../state/selectors';
import { State, StoreRootState } from 'src/app/core/constants/constants';

@Injectable()
export class ObservableStore {
  resource$: Observable<any>;
  resourceContent$: Observable<any>;

  constructor(private store: Store<StoreRootState>) {
    this.setSelectors();
  }

  setSelectors() {
    this.resource$ = this.store.select(fromState.selectResource);
    this.resourceContent$ = this.store.select(fromState.selectSelectedResource);
  }
}
