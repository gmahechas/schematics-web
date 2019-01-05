import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { <%= classify(name) %> } from '@web/app/<%= path %>/<%= dasherize(name) %>/models/<%= dasherize(name) %>.model';
import { EntityActionTypes, EntityActions } from '@web/app/<%= path %>/<%= dasherize(name) %>/store/actions/entity-<%= dasherize(name) %>.actions';

export interface State extends EntityState<<%= classify(name) %>> {
  selected: {
    selectedEntity: <%= classify(name) %> | null;
  };
}

export const adapter: EntityAdapter<<%= classify(name) %>> = createEntityAdapter<<%= classify(name) %>>({
  selectId: (entity: <%= classify(name) %>) => entity.<%= underscore(name) %>_id,
  sortComparer: false
});

export const initialState: State = adapter.getInitialState({
  selected: {
    selectedEntity: null
  }
});

export function reducer(state = initialState, action: EntityActions): State {

  switch (action.type) {

    case EntityActionTypes.LoadSuccessEntity: {
      return adapter.addAll(
        action.payload.entities.pagination<%= classify(name) %>.data,
        { ...state, selected: { selectedEntity: null } }
      );
    }

    case EntityActionTypes.LoadFailEntity: {
      return adapter.removeAll({ ...state, selected: { selectedEntity: null } });
    }

    case EntityActionTypes.StoreSuccessEntity: {
      const newState = adapter.removeAll(state);
      return adapter.addOne(action.payload.entity.store<%= classify(name) %>, newState);
    }

    case EntityActionTypes.SelectEntity: {
      return {
        ...state,
        selected: { selectedEntity: action.payload.entity }
      };
    }

    case EntityActionTypes.UpdateSuccessEntity: {
      return adapter.updateOne({
        id: action.payload.entity.update<%= classify(name) %>.<%= underscore(name) %>_id,
        changes: action.payload.entity.update<%= classify(name) %>
      },
        { ...state, selected: { selectedEntity: null } }
      );
    }

    case EntityActionTypes.DestroySuccessEntity: {
      return adapter.removeOne(
        action.payload.entity.destroy<%= classify(name) %>.<%= underscore(name) %>_id,
        { ...state, selected: { selectedEntity: null } }
      );
    }

    case EntityActionTypes.ResetSearch: {
      return adapter.removeAll({ ...state, selected: { selectedEntity: null } });
    }

    default:
      return state;
  }

}

export const getSelected = (state: State) => state.selected;
