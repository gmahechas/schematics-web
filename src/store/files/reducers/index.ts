import { createFeatureSelector, combineReducers, Action } from '@ngrx/store';

import * as fromEntity from '@web/app/<%= path %>/<%= dasherize(name) %>/store/reducers/entity-<%= dasherize(name) %>.reducer';
import * as fromSearch from '@web/app/<%= path %>/<%= dasherize(name) %>/store/reducers/search-<%= dasherize(name) %>.reducer';
import * as fromPagination from '@web/app/<%= path %>/<%= dasherize(name) %>/store/reducers/pagination-<%= dasherize(name) %>.reducer';
import * as fromLayout from '@web/app/<%= path %>/<%= dasherize(name) %>/store/reducers/layout-<%= dasherize(name) %>.reducer';
import * as fromCore from '@web/app/core/store';

export interface <%= classify(name) %>State {
  entity: fromEntity.State;
  search: fromSearch.State;
  pagination: fromPagination.State;
  layout: fromLayout.State;
}

export interface State extends fromCore.State {
  <%= underscore(name) %>: <%= classify(name) %>State;
}

export function reducers(state: <%= classify(name) %>State | undefined, action: Action) {
  return combineReducers({
    entity: fromEntity.reducer,
    search: fromSearch.reducer,
    pagination: fromPagination.reducer,
    layout: fromLayout.reducer,
  })(state, action);
}

export const get<%= classify(name) %>State = createFeatureSelector<State, <%= classify(name) %>State>('<%= underscore(name) %>');
