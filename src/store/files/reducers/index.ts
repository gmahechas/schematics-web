import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromEntity from '@web/app/<%= path %>/<%= name %>/store/reducers/entity-<%= name %>.reducer';
import * as fromSearch from '@web/app/<%= path %>/<%= name %>/store/reducers/search-<%= name %>.reducer';
import * as fromPagination from '@web/app/<%= path %>/<%= name %>/store/reducers/pagination-<%= name %>.reducer';
import * as fromLayout from '@web/app/<%= path %>/<%= name %>/store/reducers/layout-<%= name %>.reducer';
import * as fromCore from '@web/app/core/store';

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
