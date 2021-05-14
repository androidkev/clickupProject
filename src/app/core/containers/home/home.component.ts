import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from './../../../services/state/actions';
import { ObservableStore } from '../../../services/observable-store/observable-store.service';
import { Subscription } from 'rxjs';
import { Resource } from '../../constants/constants';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  providers: [ObservableStore],
})
export class HomeComponent implements OnInit {
  subscriptions: Subscription;
  resource$: Subscription;

  resourceList = [];

  constructor(private store: Store, private observables: ObservableStore) {}

  ngOnInit() {
    this.subscriptions = new Subscription();
    this.setSubscriptions();
    this.store.dispatch(Actions.getResource());
  }

  setSubscriptions() {
    this.subscriptions.add(
      (this.resource$ = this.observables.resource$.subscribe((resource: Resource[]) => {
        this.resourceList = resource;
      }))
    );
  }

  selectResource(resource: Resource) {
    this.store.dispatch(Actions.setSelectedResource({ resource }));
  }
}
