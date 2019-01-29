import { EntityActionTypes, EntityActions } from '@web/app/<%= path %>/<%= dasherize(name) %>/store/actions/entity-<%= dasherize(name) %>.actions';
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

export function reducer(state = initialState, action: EntityActions): State {

  switch (action.type) {

    case EntityActionTypes.LoadEntity:
    case EntityActionTypes.LoadEntityShared: {
      return {
        ...state,
        loaded: false,
        query: { 
          <%= underscore(name) %>: action.payload.search.<%= underscore(name) %>
          // TODO:
        }
      };
    }

    case EntityActionTypes.LoadSuccessEntity: {
      return {
        ...state,
        loaded: true
      };
    }

    case EntityActionTypes.LoadFailEntity: {
      return {
        ...state,
        loaded: false
      };
    }

    case EntityActionTypes.Reset: {
      return initialState;
    }

    default:
      return state;
  }

}

export const getLoaded = (state: State) => state.loaded;
export const getQuery = (state: State) => state.query;
