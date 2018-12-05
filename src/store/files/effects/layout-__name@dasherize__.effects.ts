import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Store } from '@ngrx/store';
import * as fromCore from '@web/app/core/store';
import * as from<%= classify(name) %>Actions from '@web/app/<%= path %>/<%= dasherize(name) %>/store/actions';

import { tap } from 'rxjs/operators';

@Injectable()
export class Layout<%= classify(name) %>Effects {

  // Notifications / Spinner
  @Effect({ dispatch: false })
  entity$ = this.actions$.pipe(
    ofType(
      from<%= classify(name) %>Actions.EntityActionTypes.LoadEntity,
      from<%= classify(name) %>Actions.EntityActionTypes.StoreEntity,
      from<%= classify(name) %>Actions.EntityActionTypes.UpdateEntity,
      from<%= classify(name) %>Actions.EntityActionTypes.DestroyEntity,
      from<%= classify(name) %>Actions.EntityActionTypes.PaginateEntity,
      from<%= classify(name) %>Actions.EntityActionTypes.LoadEntityShared
    ),
    tap(() => {
      this.store.dispatch(new fromCore.ShowSpinner);
    })
  );

  @Effect({ dispatch: false })
  loadSuccessEntity$ = this.actions$.pipe(
    ofType(
      from<%= classify(name) %>Actions.EntityActionTypes.LoadSuccessEntity
    ),
    tap(() => {
      this.store.dispatch(new fromCore.CloseSpinner);
    })
  );

  @Effect({ dispatch: false })
  success$ = this.actions$.pipe(
    ofType(
      from<%= classify(name) %>Actions.EntityActionTypes.StoreSuccessEntity,
      from<%= classify(name) %>Actions.EntityActionTypes.UpdateSuccessEntity,
      from<%= classify(name) %>Actions.EntityActionTypes.DestroySuccessEntity
    ),
    tap(() => {
      this.store.dispatch(new fromCore.CloseSpinner);
      this.store.dispatch(new fromCore.ShowMessages({
        messages: [
          { severity: 'success', summary: 'Exito', detail: 'Se llevo a cabo', key: 'toast' }
        ]
      }));
    })
  );

  @Effect({ dispatch: false })
  fail$ = this.actions$.pipe(
    ofType(
      from<%= classify(name) %>Actions.EntityActionTypes.LoadFailEntity,
      from<%= classify(name) %>Actions.EntityActionTypes.StoreFailEntity,
      from<%= classify(name) %>Actions.EntityActionTypes.UpdateFailEntity,
      from<%= classify(name) %>Actions.EntityActionTypes.DestroyFailEntity
    ),
    tap(() => {
      this.store.dispatch(new fromCore.CloseSpinner);
      this.store.dispatch(new fromCore.ShowMessages({
        messages: [
          { severity: 'error', summary: 'Error', detail: 'Ha ocurrido un error.', key: 'toast' }
        ]
      }));
    })
  );

  // Redirects
  @Effect({ dispatch: false })
  successRedirect$ = this.actions$.pipe(
    ofType(
      from<%= classify(name) %>Actions.EntityActionTypes.LoadEntity,
      from<%= classify(name) %>Actions.EntityActionTypes.StoreSuccessEntity,
      from<%= classify(name) %>Actions.EntityActionTypes.UpdateSuccessEntity,
      from<%= classify(name) %>Actions.EntityActionTypes.DestroySuccessEntity
    ),
    tap(() => {
      this.store.dispatch(new fromCore.Go({ path: ['<%= underscore(name) %>'] }));
    })
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromCore.State>
  ) {}
}
