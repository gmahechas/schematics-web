import { createReducer, on } from '@ngrx/store';
import * as from<%= classify(name) %>Actions from '@web/app/<%= path %>/<%= dasherize(name) %>/store/actions';
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
    from<%= classify(name) %>Actions.EntityActions.SetSelected,
    (state, { selected }) => ({
      ...state,
      selected: { ...state.selected, ...selected }
    })
  ),
  on(
    from<%= classify(name) %>Actions.EntityActions.LoadFailEntity,
    from<%= classify(name) %>Actions.EntityActions.StoreFailEntity,
    from<%= classify(name) %>Actions.EntityActions.UpdateFailEntity,
    from<%= classify(name) %>Actions.EntityActions.DestroyFailEntity,
    (state, { error }) => ({
      ...state,
      selected: initialStateSelected<%= classify(name) %>,
      error: JSON.stringify(error),
      pending: false
    })
  ),
  on(
    from<%= classify(name) %>Actions.EntityActions.LoadEntity,
    from<%= classify(name) %>Actions.EntityActions.PaginateEntity,
    from<%= classify(name) %>Actions.EntityActions.StoreEntity,
    from<%= classify(name) %>Actions.EntityActions.UpdateEntity,
    from<%= classify(name) %>Actions.EntityActions.DestroyEntity,
    (state) => ({
      ...state,
      pending: true
    })
  ),
  on(
    from<%= classify(name) %>Actions.EntityActions.LoadSuccessEntity,
    from<%= classify(name) %>Actions.EntityActions.StoreSuccessEntity,
    from<%= classify(name) %>Actions.EntityActions.UpdateSuccessEntity,
    from<%= classify(name) %>Actions.EntityActions.DestroySuccessEntity,
    (state) => ({
      ...state,
      selected: initialStateSelected<%= classify(name) %>,
      pending: false
    })
  ),
  on(
    from<%= classify(name) %>Actions.EntityActions.Reset,
    (state) => ({
      ...initialState
    })
  )
);

export const getSelected = (state: State) => state.selected;
export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
