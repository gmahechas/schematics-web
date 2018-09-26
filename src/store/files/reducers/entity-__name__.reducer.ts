import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { <%= classify(name) %> } from './../../models/<%= name %>.model';
import { EntityActionTypes, EntityActions } from '../actions/entity-<%= name %>.actions';

export interface State extends EntityState<<%= classify(name) %>> {

}

export const adapter: EntityAdapter<<%= classify(name) %>> = createEntityAdapter<<%= classify(name) %>>({
  selectId: (entity: <%= classify(name) %>) => entity.<%= name %>_id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState();

export function reducer(state = initialState, action: EntityActions): State {

  switch (action.type) {

    case EntityActionTypes.LoadSuccessEntity: {
      return adapter.addAll(action.payload.entities.pagination<%= classify(name) %>.data, state);
    }

    case EntityActionTypes.LoadFailEntity: {
      return adapter.removeAll(state);
    }

    case EntityActionTypes.StoreSuccessEntity: {
      return adapter.addOne(action.payload.entity.store<%= classify(name) %>, state);
    }

    case EntityActionTypes.UpdateSuccessEntity: {
      return adapter.updateOne({
        id: action.payload.entity.update<%= classify(name) %>.<%= name %>_id,
        changes: action.payload.entity.update<%= classify(name) %>
      },
        state
      );
    }

    case EntityActionTypes.DestroySuccessEntity: {
      return adapter.removeOne(action.payload.entity.destroy<%= classify(name) %>.<%= name %>_id, state);
    }

    default:
      return state;
  }

}
