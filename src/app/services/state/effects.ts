import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PokeActions from '../state/actions';
import { EMPTY, merge } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpService } from '../http/http.service';
import { Content, Resource } from '../../core/constants/constants';

@Injectable()
export class PokemonEffects {
  getResource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokeActions.GET_RESOURCE),
      mergeMap(() =>
        this.httpService.getMenu().pipe(
          map((resource) => Object.entries(resource)),
          map((resource) => resource.map((x) => ({ resourceName: x[0], url: x[1] }))),
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
          map((content: Content) => {
            return PokeActions.setSelectedResourceContent({ content });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private httpService: HttpService) {}
}
