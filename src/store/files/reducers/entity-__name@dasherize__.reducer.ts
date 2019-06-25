import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as from<%= classify(name) %>Actions from '@web/app/<%= path %>/<%= dasherize(name) %>/store/actions';
import { <%= classify(name) %> } from '@web/app/<%= path %>/<%= dasherize(name) %>/models/<%= dasherize(name) %>.model';

export interface State extends EntityState<<%= classify(name) %>> { }

export const adapter: EntityAdapter<<%= classify(name) %>> = createEntityAdapter<<%= classify(name) %>>({
  selectId: (entity: <%= classify(name) %>) => entity.<%= underscore(name) %>_id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState();


export const reducer = createReducer(
  initialState,
  on(
    from<%= classify(name) %>Actions.EntityActions.LoadSuccessEntity,
    (state, { entities }) => adapter.addAll(entities.pagination<%= classify(name) %>.data, state)
  ),
  on(
    from<%= classify(name) %>Actions.EntityActions.LoadFailEntity,
    (state, { error }) => adapter.removeAll(state)
  ),
  on(
    from<%= classify(name) %>Actions.EntityActions.StoreSuccessEntity,
    (state, { entity }) => {
      const newState = adapter.removeAll(state);
      return adapter.addOne(entity.store<%= classify(name) %>, newState);
    }
  ),
  on(
    from<%= classify(name) %>Actions.EntityActions.UpdateSuccessEntity,
    (state, { entity }) => adapter.updateOne({ id: entity.update<%= classify(name) %>.<%= underscore(name) %>_id, changes: entity.update<%= classify(name) %> }, state)
  ),
  on(
    from<%= classify(name) %>Actions.EntityActions.DestroySuccessEntity,
    (state, { entity }) => adapter.removeOne(entity.destroy<%= classify(name) %>.<%= underscore(name) %>_id, state)
  ),
  on(
    from<%= classify(name) %>Actions.EntityActions.Reset,
    (state, { redirect }) => adapter.removeAll(state)
  ),
);
