import { createReducer, on } from '@ngrx/store';
import { EntityActions } from '@web/app/<%= path %>/<%= dasherize(name) %>/store/actions';
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

export const reducer = createReducer(
  initialState,
  on(
    EntityActions.SetSelected,
    (state, { selected }) => ({
      ...state,
      selected
    })
  ),
  on(
    EntityActions.LoadFailEntity,
    EntityActions.StoreFailEntity,
    EntityActions.UpdateFailEntity,
    EntityActions.DestroyFailEntity,
    (state, { error }) => ({
      ...state,
      selected: initialStateSelected<%= classify(name) %>,
      error,
      pending: false
    })
  ),
  on(
    EntityActions.LoadEntity,
    EntityActions.PaginateEntity,
    EntityActions.StoreEntity,
    EntityActions.UpdateEntity,
    EntityActions.DestroyEntity,
    (state) => ({
      ...state,
      pending: true
    })
  ),
  on(
    EntityActions.LoadSuccessEntity,
    EntityActions.StoreSuccessEntity,
    EntityActions.UpdateSuccessEntity,
    EntityActions.DestroySuccessEntity,
    (state) => ({
      ...state,
      selected: initialStateSelected<%= classify(name) %>,
      pending: false
    })
  ),
  on(
    EntityActions.Reset,
    (state) => ({
      ...initialState
    })
  )
);

export const getSelected = (state: State) => state.selected;
export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
