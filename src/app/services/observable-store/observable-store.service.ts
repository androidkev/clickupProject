import { Injectable } from '@angular/core';
import { from, Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as Reducer from '../state/reducers';
import * as fromState from '../state/selectors';

@Injectable()
export class ObservableStore {
  resource$: Observable<any>;

  constructor(private store: Store) {
    this.setSelectors();
  }

  setSelectors() {
    this.resource$ = this.store.select(fromState.selectResource);
  }
}
