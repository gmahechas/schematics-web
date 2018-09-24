import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromEntity from './entity-<%= name %>.reducer';
import * as fromSearch from './search-<%= name %>.reducer';
import * as fromPagination from './pagination-<%= name %>.reducer';
import * as fromLayout from './layout-<%= name %>.reducer';
import * as fromCore from '../../../../core/store';

export interface <%= classify(name) %>State {
  entity: fromEntity.State;
  search: fromSearch.State;
  pagination: fromPagination.State;
  layout: fromLayout.State;
}

export const reducers: ActionReducerMap<<%= classify(name) %>State> = {
  entity: fromEntity.reducer,
  search: fromSearch.reducer,
  pagination: fromPagination.reducer,
  layout: fromLayout.reducer
};

export interface State extends fromCore.State {
  <%= name %>: <%= classify(name) %>State;
}

export const get<%= classify(name) %>State = createFeatureSelector<State, <%= classify(name) %>State>('<%= name %>');
