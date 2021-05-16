import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from './../../../services/state/actions';
import { ObservableStore } from '../../../services/observable-store/observable-store.service';
import { Subscription } from 'rxjs';
import { Resource, StoreRootState } from '../../constants/constants';
import { ActionDispatcherService } from '../../../services/action-dispatcher/action-dispatcher.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  providers: [ObservableStore, ActionDispatcherService],
})
export class HomeComponent implements OnInit {
  subscriptions: Subscription;
  resource$: Subscription;

  resourceList = [];

  constructor(
    private store: Store<StoreRootState>,
    private observables: ObservableStore,
    private actions: ActionDispatcherService
  ) {}

  ngOnInit() {
    this.subscriptions = new Subscription();
    this.setSubscriptions();
    this.getResources();
  }

  setSubscriptions() {
    this.subscriptions.add(
      (this.resource$ = this.observables.resource$.subscribe((resource: Resource[]) => {
        this.resourceList = resource;
      }))
    );
  }

  getResources() {
    this.store.dispatch(Actions.getResource());
  }

  selectResource(resource: Resource) {
    this.actions.selectResource(resource);
  }
}
