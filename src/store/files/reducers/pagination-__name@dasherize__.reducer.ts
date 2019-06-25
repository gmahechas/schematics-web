import { createReducer, on } from '@ngrx/store';
import * as from<%= classify(name) %>Actions from '@web/app/<%= path %>/<%= dasherize(name) %>/store/actions';

export interface State {
  total: number;
  perPage: number;
  currentPage: number;
  from: number;
  to: number;
}

export const initialState: State = {
  total: null,
  perPage: null,
  currentPage: null,
  from: null,
  to: null
};

export const reducer = createReducer(
  initialState,
  on(
    from<%= classify(name) %>Actions.EntityActions.LoadEntity,
    (state) => ({
      ...initialState
    })
  ),
  on(
    from<%= classify(name) %>Actions.EntityActions.LoadSuccessEntity,
    (state, { entities }) => ({
      ...state,
      total: entities.pagination<%= classify(name) %>.total,
      perPage: entities.pagination<%= classify(name) %>.per_page,
      currentPage: entities.pagination<%= classify(name) %>.current_page,
      from: entities.pagination<%= classify(name) %>.from,
      to: entities.pagination<%= classify(name) %>.to
    })
  ),
  on(
    from<%= classify(name) %>Actions.EntityActions.LoadFailEntity,
    from<%= classify(name) %>Actions.EntityActions.StoreSuccessEntity,
    from<%= classify(name) %>Actions.EntityActions.Reset,
    (state) => ({
      ...initialState
    })
  )
);

export const getTotal = (state: State) => state.total;
export const getPerPage = (state: State) => state.perPage;
export const getCurrentPage = (state: State) => state.currentPage;
export const getFrom = (state: State) => state.from;
export const getTo = (state: State) => state.to;
