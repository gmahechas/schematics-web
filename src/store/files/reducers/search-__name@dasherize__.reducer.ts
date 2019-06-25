import { createReducer, on } from '@ngrx/store';
import * as from<%= classify(name) %>Actions from '@web/app/<%= path %>/<%= dasherize(name) %>/store/actions';
import { Search<%= classify(name) %> } from '@web/app/<%= path %>/<%= dasherize(name) %>/models/search-<%= dasherize(name) %>.model';

export interface State {
  loaded: boolean;
  query: Search<%= classify(name) %>;
}

export const initialState: State = {
  loaded: false,
  query: {
    <%= underscore(name) %>: {
      <%= underscore(name) %>_id: ''
      // TODO:
    }
  }
};

export const reducer = createReducer(
  initialState,
  on(
    from<%= classify(name) %>Actions.EntityActions.LoadEntity,
    from<%= classify(name) %>Actions.EntityActions.LoadEntityShared,
    (state, { search }) => ({
      ...state,
      loaded: false,
      query: {
        <%= underscore(name) %>: search.<%= underscore(name) %>, // TODO:
      }
    })
  ),
  on(
    from<%= classify(name) %>Actions.EntityActions.LoadSuccessEntity,
    (state) => ({
      ...state,
      loaded: true
    })
  ),
  on(
    from<%= classify(name) %>Actions.EntityActions.LoadFailEntity,
    (state) => ({
      ...state,
      loaded: false
    })
  ),
  on(
    from<%= classify(name) %>Actions.EntityActions.Reset,
    (state) => ({
      ...initialState
    })
  )
);

export const getLoaded = (state: State) => state.loaded;
export const getQuery = (state: State) => state.query;
