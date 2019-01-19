import { EntityActionTypes, EntityActions } from '@web/app/<%= path %>/<%= dasherize(name) %>/store/actions/entity-<%= dasherize(name) %>.actions';
import { Selected<%= classify(name) %>, initialStateSelected<%= classify(name) %> } from '@web/app/<%= path %>/<%= dasherize(name) %>/models/selected-<%= dasherize(name) %>.model';

export interface State {
  selected: Selected<%= classify(name) %>;
  error: string;
  pending: boolean;
}

export const initialState: State = {
  selected: initialStateSelected<%= classify(name) %>,
  error: '',
  pending: false
};

export function reducer(state = initialState, action: EntityActions): State {

  switch (action.type) {

    case EntityActionTypes.SetSelected: {
      return {
        ...state,
        selected: action.payload.selected
      };
    }

    case EntityActionTypes.LoadFailEntity:
    case EntityActionTypes.StoreFailEntity:
    case EntityActionTypes.UpdateFailEntity:
    case EntityActionTypes.DestroyFailEntity: {
      return {
        ...state,
        selected: initialStateSelected<%= classify(name) %>,
        error: action.payload.error,
        pending: true
      };
    }

    case EntityActionTypes.LoadEntity:
    case EntityActionTypes.PaginateEntity:
    case EntityActionTypes.StoreEntity:
    case EntityActionTypes.UpdateEntity:
    case EntityActionTypes.DestroyEntity: {
      return {
        ...state,
        pending: true
      };
    }

    case EntityActionTypes.LoadSuccessEntity:
    case EntityActionTypes.StoreSuccessEntity:
    case EntityActionTypes.UpdateSuccessEntity:
    case EntityActionTypes.DestroySuccessEntity: {
      return {
        ...state,
        selected: initialStateSelected<%= classify(name) %>,
        pending: false
      };
    }

    case EntityActionTypes.ResetSearch: {
      return initialState;
    }

    default:
      return state;
  }

}

export const getSelected = (state: State) => state.selected;
export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
