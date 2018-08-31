import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { Store, select } from '@ngrx/store';
import * as fromStore from './../store';
import * as fromCore from './../../../core/store';

import { <%= classify(name) %>Service } from './../services/<%= name %>.service';

import { Observable, of } from 'rxjs';
import { tap, map, filter, take, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class <%= classify(name) %>ExistGuard implements CanActivate {

  constructor(
    private store: Store<fromStore.State>,
    private <%= name %>Service: <%= classify(name) %>Service
  ) { }

  hasInStore(<%= name %>_id: string): Observable<boolean> {
    return this.store.pipe(
      select(fromStore.getEntities),
      map(entities => !!entities[<%= name %>_id]),
      take(1)
    );
  }

  hasEntity(<%= name %>_id: string): Observable<boolean> {
    return this.hasInStore(<%= name %>_id).pipe(
      switchMap(inStore => {
        if (inStore) {
          return of(inStore);
        }
        this.store.dispatch(new fromCore.Go({
          path: ['not-found']
        }));
        return of(false);
      })
    );
  }

  checkStore(<%= name %>_id: string): Observable<boolean> {
    return this.store.pipe(
      select(fromStore.getLoaded),
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadEntity({
            <%= name %>: {
              <%= name %>_id: <%= name %>_id,
              // TODO:
            },
            // TODO:
          }));
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore(route.params.<%= name %>_id).pipe(
      switchMap(() => this.hasEntity(route.params.<%= name %>_id))
    );
  }

}