import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Store } from '@ngrx/store';
import * as fromCore from '@web/app/core/store';
import * as from<%= classify(name) %>Actions from '@web/app/<%= path %>/<%= dasherize(name) %>/store/actions';

import { map, tap } from 'rxjs/operators';

@Injectable()
export class Layout<%= classify(name) %>Effects {

  // Notifications / Spinner
  entity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        from<%= classify(name) %>Actions.EntityActionTypes.LoadEntity,
        from<%= classify(name) %>Actions.EntityActionTypes.StoreEntity,
        from<%= classify(name) %>Actions.EntityActionTypes.UpdateEntity,
        from<%= classify(name) %>Actions.EntityActionTypes.DestroyEntity,
        from<%= classify(name) %>Actions.EntityActionTypes.PaginateEntity,
        from<%= classify(name) %>Actions.EntityActionTypes.LoadEntityShared
      ),
      tap(() => {
        this.store.dispatch(new fromCore.ShowSpinner({ toggle: true }));
      })
    ),
    { dispatch: false }
  );

  loadSuccessEntity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        from<%= classify(name) %>Actions.EntityActionTypes.LoadSuccessEntity
      ),
      tap(() => {
        this.store.dispatch(new fromCore.ShowSpinner({ toggle: false }));
      })
    ),
    { dispatch: false }
  );

  success$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        from<%= classify(name) %>Actions.EntityActionTypes.StoreSuccessEntity,
        from<%= classify(name) %>Actions.EntityActionTypes.UpdateSuccessEntity,
        from<%= classify(name) %>Actions.EntityActionTypes.DestroySuccessEntity
      ),
      tap(() => {
        this.store.dispatch(new fromCore.ShowSpinner({ toggle: false }));
        this.store.dispatch(new fromCore.ShowMessages({
          messages: [
            { severity: 'success', summary: 'Exito', detail: 'Se llevo a cabo', key: 'toast' }
          ]
        }));
      })
    ),
    { dispatch: false }
  );

  fail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        from<%= classify(name) %>Actions.EntityActionTypes.LoadFailEntity,
        from<%= classify(name) %>Actions.EntityActionTypes.StoreFailEntity,
        from<%= classify(name) %>Actions.EntityActionTypes.UpdateFailEntity,
        from<%= classify(name) %>Actions.EntityActionTypes.DestroyFailEntity
      ),
      tap(() => {
        this.store.dispatch(new fromCore.ShowSpinner({ toggle: false }));
        this.store.dispatch(new fromCore.ShowMessages({
          messages: [
            { severity: 'error', summary: 'Error', detail: 'Ha ocurrido un error.', key: 'toast' }
          ]
        }));
      })
    ),
    { dispatch: false }
  );

  // Redirects
  successRedirect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        from<%= classify(name) %>Actions.EntityActionTypes.LoadEntity,
        from<%= classify(name) %>Actions.EntityActionTypes.StoreSuccessEntity,
        from<%= classify(name) %>Actions.EntityActionTypes.UpdateSuccessEntity,
        from<%= classify(name) %>Actions.EntityActionTypes.DestroySuccessEntity
      ),
      tap(() => {
        this.store.dispatch(new fromCore.Go({ path: ['<%= underscore(name) %>'] }));
      })
    ),
    { dispatch: false }
  );

  reset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(from<%= classify(name) %>Actions.EntityActionTypes.Reset),
      map((action: from<%= classify(name) %>Actions.Reset) => action.payload),
      tap(({ redirect }) => {
        if (redirect) {
          this.store.dispatch(new fromCore.Go({ path: ['<%= underscore(name) %>'] }));
        }
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromCore.State>
  ) { }
}
