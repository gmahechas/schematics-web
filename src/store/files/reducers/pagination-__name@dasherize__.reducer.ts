import { EntityActionTypes, EntityActions } from '@web/app/<%= path %>/<%= dasherize(name) %>/store/actions/entity-<%= dasherize(name) %>.actions';

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

export function reducer(state = initialState, action: EntityActions): State {

  switch (action.type) {

    case EntityActionTypes.LoadEntity: {
      return initialState;
    }

    case EntityActionTypes.LoadSuccessEntity: {
      return {
        ...state,
        total: action.payload.entities.pagination<%= classify(name) %>.total,
        perPage: action.payload.entities.pagination<%= classify(name) %>.per_page,
        currentPage: action.payload.entities.pagination<%= classify(name) %>.current_page,
        from: action.payload.entities.pagination<%= classify(name) %>.from,
        to: action.payload.entities.pagination<%= classify(name) %>.to
      };
    }

    case EntityActionTypes.LoadFailEntity: {
      return initialState;
    }

    case EntityActionTypes.StoreSuccessEntity: {
      return initialState;
    }

    case EntityActionTypes.Reset: {
      return initialState;
    }

    default:
      return state;
  }

}

export const getTotal = (state: State) => state.total;
export const getPerPage = (state: State) => state.perPage;
export const getCurrentPage = (state: State) => state.currentPage;
export const getFrom = (state: State) => state.from;
export const getTo = (state: State) => state.to;
