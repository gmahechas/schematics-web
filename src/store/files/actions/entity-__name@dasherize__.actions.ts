import { createAction, props } from '@ngrx/store';

import * as fromModels from '@web/app/<%= path %>/<%= dasherize(name) %>/models';

export const LoadEntity = createAction(
  '[<%= classify(name) %>] Load Entity',
  props<{ search: fromModels.Search<%= classify(name) %> }>()
);

export const LoadSuccessEntity = createAction(
  '[<%= classify(name) %>] Load Success Entity',
  props<{ entities: fromModels.Pagination<%= classify(name) %> }>()
);

export const LoadFailEntity = createAction(
  '[<%= classify(name) %>] Load Fail Entity',
  props<{ error: any }>()
);

export const StoreEntity = createAction(
  '[<%= classify(name) %>] Store Entity',
  props<{ entity: fromModels.<%= classify(name) %> }>()
);

export const StoreSuccessEntity = createAction(
  '[<%= classify(name) %>] Store Success Entity',
  props<{ entity: fromModels.Store<%= classify(name) %> }>()
);

export const StoreFailEntity = createAction(
  '[<%= classify(name) %>] Store Fail Entity',
  props<{ error: any }>()
);

export const UpdateEntity = createAction(
  '[<%= classify(name) %>] Update Entity',
  props<{ entity: fromModels.<%= classify(name) %> }>()
);

export const UpdateSuccessEntity = createAction(
  '[<%= classify(name) %>] Update Success Entity',
  props<{ entity: fromModels.Update<%= classify(name) %> }>()
);

export const UpdateFailEntity = createAction(
  '[<%= classify(name) %>] Update Fail Entity',
  props<{ error: any }>()
);

export const DestroyEntity = createAction(
  '[<%= classify(name) %>] Destroy Entity',
  props<{ entity: fromModels.<%= classify(name) %> }>()
);

export const DestroySuccessEntity = createAction(
  '[<%= classify(name) %>] Destroy Success Entity',
  props<{ entity: fromModels.Destroy<%= classify(name) %> }>()
);

export const DestroyFailEntity = createAction(
  '[<%= classify(name) %>] Destroy Fail Entity',
  props<{ error: any }>()
);

export const PaginateEntity = createAction(
  '[<%= classify(name) %>] Paginate Entity',
  props<{ page: number }>()
);

export const LoadEntityShared = createAction(
  '[<%= classify(name) %>] Load Entity Shared',
  props<{ search: fromModels.Search<%= classify(name) %>}>()
);

export const Reset = createAction(
  '[<%= classify(name) %>] Reset',
  props<{ redirect: boolean }>()
);

export const SetSelected = createAction(
  '[<%= classify(name) %>] Set Selected',
  props<{ selected: fromModels.Selected<%= classify(name) %> }>()
);
