import { createReducer, on } from '@ngrx/store';
import { EntityActions } from '@web/app/<%= path %>/<%= dasherize(name) %>/store/actions';
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
    EntityActions.LoadEntity,
    EntityActions.LoadEntityShared,
    (state, { search }) => ({
      ...state,
      loaded: false,
      query: {
        <%= underscore(name) %>: search.<%= underscore(name) %>, // TODO:
      }
    })
  ),
  on(
    EntityActions.LoadSuccessEntity,
    (state) => ({
      ...state,
      loaded: true
    })
  ),
  on(
    EntityActions.LoadFailEntity,
    (state) => ({
      ...state,
      loaded: false
    })
  ),
  on(
    EntityActions.Reset,
    (state) => ({
      ...initialState
    })
  )
);

export const getLoaded = (state: State) => state.loaded;
export const getQuery = (state: State) => state.query;
