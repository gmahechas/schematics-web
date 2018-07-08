import { Action } from '@ngrx/store';

import * as fromModels from '../../models';

export enum EntityActionTypes {
  LoadEntity = '[<%= classify(name) %>] Load Entity ',
  LoadSuccessEntity = '[<%= classify(name) %>] Load Success Entity',
  LoadFailEntity = '[<%= classify(name) %>] Load Fail Entity',
  StoreEntity = '[<%= classify(name) %>] Store Entity',
  StoreSuccessEntity = '[<%= classify(name) %>] Store Success Entity',
  StoreFailEntity = '[<%= classify(name) %>] Store Fail Entity',
  UpdateEntity = '[<%= classify(name) %>] Update Entity',
  UpdateSuccessEntity = '[<%= classify(name) %>] Update Success Entity',
  UpdateFailEntity = '[<%= classify(name) %>] Update Fail Entity',
  DestroyEntity = '[<%= classify(name) %>] Destroy Entity',
  DestroySuccessEntity = '[<%= classify(name) %>] Destroy Success Entity',
  DestroyFailEntity = '[<%= classify(name) %>] Destroy Fail Entity',
  PaginateEntity = '[<%= classify(name) %>] Paginate Entity',
  LoadEntityShared = '[<%= classify(name) %>] Load Entity Shared',
  LoadSuccessEntityShared = '[<%= classify(name) %>] Load Success Entity Shared',
  LoadFailEntityShared = '[<%= classify(name) %>] Load Fail Entity Shared'
}

export class LoadEntity implements Action {
  readonly type = EntityActionTypes.LoadEntity;
  constructor(public payload: fromModels.Search<%= classify(name) %>) { }
}

export class LoadSuccessEntity implements Action {
  readonly type = EntityActionTypes.LoadSuccessEntity;
  constructor(public payload: fromModels.Pagination<%= classify(name) %>) { }
}

export class LoadFailEntity implements Action {
  readonly type = EntityActionTypes.LoadFailEntity;
  constructor(public payload: any) { }
}

export class StoreEntity implements Action {
  readonly type = EntityActionTypes.StoreEntity;
  constructor(public payload: fromModels.<%= classify(name) %>) { }
}

export class StoreSuccessEntity implements Action {
  readonly type = EntityActionTypes.StoreSuccessEntity;
  constructor(public payload: fromModels.Store<%= classify(name) %>) { }
}

export class StoreFailEntity implements Action {
  readonly type = EntityActionTypes.StoreFailEntity;
  constructor(public payload: any) { }
}

export class UpdateEntity implements Action {
  readonly type = EntityActionTypes.UpdateEntity;
  constructor(public payload: fromModels.<%= classify(name) %>) { }
}

export class UpdateSuccessEntity implements Action {
  readonly type = EntityActionTypes.UpdateSuccessEntity;
  constructor(public payload: fromModels.Update<%= classify(name) %>) { }
}

export class UpdateFailEntity implements Action {
  readonly type = EntityActionTypes.UpdateFailEntity;
  constructor(public payload: any) { }
}

export class DestroyEntity implements Action {
  readonly type = EntityActionTypes.DestroyEntity;
  constructor(public payload: fromModels.<%= classify(name) %>) { }
}

export class DestroySuccessEntity implements Action {
  readonly type = EntityActionTypes.DestroySuccessEntity;
  constructor(public payload: fromModels.Destroy<%= classify(name) %>) { }
}

export class DestroyFailEntity implements Action {
  readonly type = EntityActionTypes.DestroyFailEntity;
  constructor(public payload: any) { }
}

export class PaginateEntity implements Action {
  readonly type = EntityActionTypes.PaginateEntity;
  constructor(public payload: number) { }
}

export class LoadEntityShared implements Action {
  readonly type = EntityActionTypes.LoadEntityShared;
  constructor(public payload: fromModels.Search<%= classify(name) %>) { }
}

export type EntityActions =
  | LoadEntity
  | LoadSuccessEntity
  | LoadFailEntity
  | StoreEntity
  | StoreSuccessEntity
  | StoreFailEntity
  | UpdateEntity
  | UpdateSuccessEntity
  | UpdateFailEntity
  | DestroyEntity
  | DestroySuccessEntity
  | DestroyFailEntity
  | PaginateEntity
  | LoadEntityShared;