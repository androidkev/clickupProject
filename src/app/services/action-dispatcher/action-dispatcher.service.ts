import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Resource } from 'src/app/core/constants/constants';
import * as Actions from '../state/actions';

@Injectable()
export class ActionDispatcherService {
  constructor(private store: Store) {
    this.getResources();
  }

  getResources() {
    this.store.dispatch(Actions.getResource());
  }

  selectResource(resource: Resource) {
    this.store.dispatch(Actions.setSelectedResource({ resource }));
  }
}
