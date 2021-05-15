import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PokeActions from '../state/actions';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, take, switchMap, tap } from 'rxjs/operators';
import { HttpService } from '../http/http.service';
import { Content, Resource } from '../../core/constants/constants';
import { Store } from '@ngrx/store';

@Injectable()
export class PokemonEffects {
  getResource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokeActions.GET_RESOURCE),
      mergeMap(() =>
        this.httpService.getMenu().pipe(
          take(1),
          map((resource) => Object.entries(resource)),
          map((resource) => resource.map((x) => ({ name: x[0], url: x[1] }))),
          map((resource: Resource[]) => {
            return PokeActions.setResource({ action: resource });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  getResourceContents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokeActions.GET_RESOURCE_CONTENT),
      mergeMap(({ resource }) =>
        this.httpService.getSelectedResource(resource).pipe(
          take(1),
          tap((content: Content) => {
            content.results.forEach((results) => {
              this.store.dispatch(PokeActions.getResultsData({ results }));
            });
          }),
          map((content: Content) => {
            return PokeActions.setSelectedResourceContent({ content });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  getResultsData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokeActions.GET_RESULTS_DATA),
      mergeMap(({ results }) =>
        this.httpService.getResults(results).pipe(
          take(1),
          map((data) => {
            return PokeActions.setResultsData({ data });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private httpService: HttpService, private store: Store) {}
}
