import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Store, select, Action } from '@ngrx/store';
import * as from<%= classify(name) %>Reducers from '@web/app/<%= path %>/<%= name %>/store/reducers';
import * as from<%= classify(name) %>Selectors from '@web/app/<%= path %>/<%= name %>/store/selectors';
import * as from<%= classify(name) %>Actions from '@web/app/<%= path %>/<%= name %>/store/actions';

import * as fromModels from '@web/app/<%= path %>/<%= name %>/models';

import { <%= classify(name) %>Service } from '@web/app/<%= path %>/<%= name %>/services/<%= name %>.service';

import { of, from, asyncScheduler, EMPTY, Observable } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom, debounceTime, skip, takeUntil } from 'rxjs/operators';

@Injectable()
export class Entity<%= classify(name) %>Effects {

  @Effect()
  loadEntity$ = this.actions$.pipe(
    ofType<from<%= classify(name) %>Actions.LoadEntity>(from<%= classify(name) %>Actions.EntityActionTypes.LoadEntity),
    map(action => action.payload.search),
    withLatestFrom(
      this.store.pipe(select(from<%= classify(name) %>Selectors.getPerPage)),
      this.store.pipe(select(from<%= classify(name) %>Selectors.getCurrentPage))
    ),
    switchMap(([search<%= classify(name) %>, perPage, currentPage]: [fromModels.Search<%= classify(name) %>, number, number]) => {
      perPage = (perPage) ? perPage : search<%= classify(name) %>.limit;
      currentPage = (currentPage) ? currentPage : search<%= classify(name) %>.page;
      return this.<%= name %>Service.load({ ...search<%= classify(name) %>, limit: perPage, page: currentPage }).pipe(
        map(({ data }) => new from<%= classify(name) %>Actions.LoadSuccessEntity({ entities: data })),
        catchError((errors) => of(new from<%= classify(name) %>Actions.LoadFailEntity({ error: errors })))
      );
    })
  );

  @Effect()
  storeEntity$ = this.actions$.pipe(
    ofType<from<%= classify(name) %>Actions.StoreEntity>(from<%= classify(name) %>Actions.EntityActionTypes.StoreEntity),
    map(action => action.payload.entity),
    switchMap((<%= name %>: fromModels.<%= classify(name) %>) => {
      return this.<%= name %>Service.store(<%= name %>).pipe(
        map(({ data }) => new from<%= classify(name) %>Actions.StoreSuccessEntity({ entity: data })),
        catchError((errors) => of(new from<%= classify(name) %>Actions.StoreFailEntity({ error: errors })))
      );
    })
  );

  @Effect()
  updateEntity$ = this.actions$.pipe(
    ofType<from<%= classify(name) %>Actions.UpdateEntity>(from<%= classify(name) %>Actions.EntityActionTypes.UpdateEntity),
    map(action => action.payload.entity),
    switchMap((<%= name %>: fromModels.<%= classify(name) %>) => {
      return this.<%= name %>Service.update(<%= name %>).pipe(
        map(({ data }) => new from<%= classify(name) %>Actions.UpdateSuccessEntity({ entity: data })),
        catchError((errors) => of(new from<%= classify(name) %>Actions.UpdateFailEntity({ error: errors })))
      );
    })
  );

  @Effect()
  destroyEntity$ = this.actions$.pipe(
    ofType<from<%= classify(name) %>Actions.DestroyEntity>(from<%= classify(name) %>Actions.EntityActionTypes.DestroyEntity),
    map(action => action.payload.entity),
    switchMap((<%= name %>: fromModels.<%= classify(name) %>) => {
      return this.<%= name %>Service.destroy(<%= name %>).pipe(
        map(({ data }) => new from<%= classify(name) %>Actions.DestroySuccessEntity({ entity: data })),
        catchError((errors) => of(new from<%= classify(name) %>Actions.DestroyFailEntity({ error: errors })))
      );
    })
  );

  @Effect()
  paginateEntity$ = this.actions$.pipe(
    ofType<from<%= classify(name) %>Actions.PaginateEntity>(from<%= classify(name) %>Actions.EntityActionTypes.PaginateEntity),
    map(action => action.payload.page),
    withLatestFrom(
      this.store.pipe(select(from<%= classify(name) %>Selectors.getPerPage)),
      this.store.pipe(select(from<%= classify(name) %>Selectors.getQuery))
    ),
    switchMap(([currentPage, perPage, search<%= classify(name) %>]: [number, number, fromModels.Search<%= classify(name) %>]) => {
      return from(this.<%= name %>Service.pagination({ ...search<%= classify(name) %>, limit: perPage, page: currentPage })).pipe(
        map(({ data }) => new from<%= classify(name) %>Actions.LoadSuccessEntity({ entities: data })),
        catchError((errors) => of(new from<%= classify(name) %>Actions.LoadFailEntity({ error: errors })))
      );
    })
  );

  @Effect()
  loadEntityShared$ = ({ debounce = 600, scheduler = asyncScheduler } = {}): Observable<Action> =>
    this.actions$.pipe(
      ofType<from<%= classify(name) %>Actions.LoadEntityShared>(from<%= classify(name) %>Actions.EntityActionTypes.LoadEntityShared),
      debounceTime(debounce, scheduler),
      map(action => action.payload.search),
      switchMap((search<%= classify(name) %>: fromModels.Search<%= classify(name) %>) => {
        if (
          search<%= classify(name) %> === '' // TODO:
          ) {
          return EMPTY;
        }

        const nextSearch$ = this.actions$.pipe(
          ofType(from<%= classify(name) %>Actions.EntityActionTypes.LoadEntityShared),
          skip(1)
        );

        return this.<%= name %>Service.load({ ...search<%= classify(name) %>, limit: 20, page: 1 }).pipe(
          takeUntil(nextSearch$),
          map(({ data }) => new from<%= classify(name) %>Actions.LoadSuccessEntity({ entities: data })),
          catchError((errors) => {
            return of(new from<%= classify(name) %>Actions.LoadFailEntity({ error: errors }));
          })
        );

      })
    )

  constructor(
    private actions$: Actions,
    private <%= name %>Service: <%= classify(name) %>Service,
    private store: Store<from<%= classify(name) %>Reducers.State>
  ) { }
}
