import { EntityActionTypes, EntityActions } from '../actions/entity-<%= name %>.actions';
import { Search<%= classify(name) %> } from '../../models/search-<%= name %>.model';

export interface State {
  loaded: boolean;
  query: Search<%= classify(name) %>;
}

export const initialState: State = {
  loaded: false,
  query: {
    <%= name %>: {
      <%= name %>_id: ''
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
          <%= name %>: action.payload.search.<%= name %>
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

    case EntityActionTypes.ResetSearch: {
      return initialState;
    }

    default:
      return state;
  }

}

export const getLoaded = (state: State) => state.loaded;
export const getQuery = (state: State) => state.query;
