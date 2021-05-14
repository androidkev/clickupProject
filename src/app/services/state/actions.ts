import { createAction, props } from '@ngrx/store';
import { Resource, Content } from '../../core/constants/constants';

export const GET_RESOURCE = '[ Home ] Get Resources';
export const SET_RESOURCE = '[ Home ] Set Resources';

export const SET_SELECTED_RESOURCE = '[ Home ] Set Selected Resource';

export const GET_RESOURCE_CONTENT = '[ Home ] Get Resource Content';
export const SET_RESOURCE_CONTENT = '[ Home ] Set Resource Content';

export const getResource = createAction(GET_RESOURCE);
export const setResource = createAction(SET_RESOURCE, props<{ action: any }>());

export const setSelectedResource = createAction(GET_RESOURCE_CONTENT, props<{ resource: Resource }>());

export const getSelectedResourceContent = createAction(GET_RESOURCE_CONTENT, props<{ resource: Resource }>());
export const setSelectedResourceContent = createAction(SET_RESOURCE_CONTENT, props<{ content: Content }>());
