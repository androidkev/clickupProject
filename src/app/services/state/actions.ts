import { createAction, props } from '@ngrx/store';

export const FIRST_ACTION = '[ Action ] First Action';

export const firstAction = createAction(FIRST_ACTION, props<{ action: string }>());
