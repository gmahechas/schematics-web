import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Store, select, Action } from '@ngrx/store';
import * as from<%= classify(name) %>Reducers from '@web/app/<%= path %>/<%= dasherize(name) %>/store/reducers';
import * as from<%= classify(name) %>Selectors from '@web/app/<%= path %>/<%= dasherize(name) %>/store/selectors';
import * as from<%= classify(name) %>Actions from '@web/app/<%= path %>/<%= dasherize(name) %>/store/actions';

import * as fromModels from '@web/app/<%= path %>/<%= dasherize(name) %>/models';

import { <%= classify(name) %>Service } from '@web/app/<%= path %>/<%= dasherize(name) %>/services/<%= dasherize(name) %>.service';

import { of, from, asyncScheduler, EMPTY, Observable } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom, debounceTime, skip, takeUntil, mergeMap } from 'rxjs/operators';

@Injectable()
export class Entity<%= classify(name) %>Effects {

  loadEntity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(from<%= classify(name) %>Actions.EntityActions.LoadEntity),
      map(action => action.search),
      withLatestFrom(
        this.store.pipe(select(from<%= classify(name) %>Selectors.getPerPage)),
        this.store.pipe(select(from<%= classify(name) %>Selectors.getCurrentPage))
      ),
      mergeMap(([search<%= classify(name) %>, perPage, currentPage]: [fromModels.Search<%= classify(name) %>, number, number]) => {
        perPage = (perPage) ? perPage : search<%= classify(name) %>.limit;
        currentPage = (currentPage) ? currentPage : search<%= classify(name) %>.page;
        return this.<%= camelize(name) %>Service.load({ ...search<%= classify(name) %>, limit: perPage, page: currentPage }).pipe(
          map(({ data }) => from<%= classify(name) %>Actions.EntityActions.LoadSuccessEntity({ entities: data })),
          catchError((error) => of(from<%= classify(name) %>Actions.EntityActions.LoadFailEntity({ error })))
        );
      })
    )
  );

  storeEntity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(from<%= classify(name) %>Actions.EntityActions.StoreEntity),
      map(action => action.entity),
      mergeMap((<%= name %>: fromModels.<%= classify(name) %>) => {
        return this.<%= camelize(name) %>Service.store(<%= name %>).pipe(
          map(({ data }) => from<%= classify(name) %>Actions.EntityActions.StoreSuccessEntity({ entity: data })),
          catchError((error) => of(from<%= classify(name) %>Actions.EntityActions.StoreFailEntity({ error })))
        );
      })
    )
  );

  updateEntity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(from<%= classify(name) %>Actions.EntityActions.UpdateEntity),
      map(action => action.entity),
      mergeMap((<%= name %>: fromModels.<%= classify(name) %>) => {
        return this.<%= camelize(name) %>Service.update(<%= name %>).pipe(
          map(({ data }) => from<%= classify(name) %>Actions.EntityActions.UpdateSuccessEntity({ entity: data })),
          catchError((error) => of(from<%= classify(name) %>Actions.EntityActions.UpdateFailEntity({ error })))
        );
      })
    )
  );

  destroyEntity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(from<%= classify(name) %>Actions.EntityActions.DestroyEntity),
      map(action => action.entity),
      mergeMap((<%= name %>: fromModels.<%= classify(name) %>) => {
        return this.<%= camelize(name) %>Service.destroy(<%= name %>).pipe(
          map(({ data }) => from<%= classify(name) %>Actions.EntityActions.DestroySuccessEntity({ entity: data })),
          catchError((error) => of(from<%= classify(name) %>Actions.EntityActions.DestroyFailEntity({ error })))
        );
      })
    )
  );

  paginateEntity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(from<%= classify(name) %>Actions.EntityActions.PaginateEntity),
      map(action => action.page),
      withLatestFrom(
        this.store.pipe(select(from<%= classify(name) %>Selectors.getPerPage)),
        this.store.pipe(select(from<%= classify(name) %>Selectors.getQuery))
      ),
      mergeMap(([currentPage, perPage, search<%= classify(name) %>]: [number, number, fromModels.Search<%= classify(name) %>]) => {
        return from(this.<%= camelize(name) %>Service.pagination({ ...search<%= classify(name) %>, limit: perPage, page: currentPage })).pipe(
          map(({ data }) => from<%= classify(name) %>Actions.EntityActions.LoadSuccessEntity({ entities: data })),
          catchError((error) => of(from<%= classify(name) %>Actions.EntityActions.LoadFailEntity({ error })))
        );
      })
    )
  );

  loadEntityShared$ = createEffect(() => ({ debounce = 600, scheduler = asyncScheduler } = {}): Observable<Action> =>
    this.actions$.pipe(
      ofType(from<%= classify(name) %>Actions.EntityActions.LoadEntityShared),
      debounceTime(debounce, scheduler),
      map(action => action.search),
      switchMap((search<%= classify(name) %>: fromModels.Search<%= classify(name) %>) => {
        if (
          search<%= classify(name) %> === '' // TODO:
        ) {
          return EMPTY;
        }

        const nextSearch$ = this.actions$.pipe(
          ofType(from<%= classify(name) %>Actions.EntityActions.LoadEntityShared),
          skip(1)
        );

        return this.<%= camelize(name) %>Service.load({ ...search<%= classify(name) %>, limit: 20, page: 1 }).pipe(
          takeUntil(nextSearch$),
          map(({ data }) => from<%= classify(name) %>Actions.EntityActions.LoadSuccessEntity({ entities: data })),
          catchError((error) => of(from<%= classify(name) %>Actions.EntityActions.LoadFailEntity({ error })))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private <%= camelize(name) %>Service: <%= classify(name) %>Service,
    private store: Store<from<%= classify(name) %>Reducers.State>
  ) { }
}
