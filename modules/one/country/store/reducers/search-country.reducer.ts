import { EntityActionTypes, EntityActions } from '../actions/entity-country.actions';
import { SearchCountry } from '../../models/search-country.model';

export interface State {
  loaded: boolean;
  query: SearchCountry;
}

export const initialState: State = {
  loaded: false,
  query: {
    country: {
      country_id: ''
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
          country: action.payload.search.country
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
