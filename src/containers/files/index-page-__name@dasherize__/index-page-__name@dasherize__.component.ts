import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as from<%= classify(name) %> from '@web/app/<%= path %>/<%= dasherize(name) %>/store';
import * as fromCore from '@web/app/core/store';

import { <%= classify(name) %> } from '@web/app/<%= path %>/<%= dasherize(name) %>/models/<%= dasherize(name) %>.model';
import { Search<%= classify(name) %> } from '@web/app/<%= path %>/<%= dasherize(name) %>/models/search-<%= dasherize(name) %>.model';
import { Selected<%= classify(name) %>, initialStateSelected<%= classify(name) %> } from '@web/app/<%= path %>/<%= dasherize(name) %>/models/selected-<%= dasherize(name) %>.model';

import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-index-page-<%= dasherize(name) %>',
  templateUrl: './index-page-<%= dasherize(name) %>.component.html',
  styles: []
})
export class IndexPage<%= classify(name) %>Component implements OnInit, OnDestroy {

  subscription: Subscription;
  selectedEntity: <%= classify(name) %>;

  query$ = this.store.pipe(select(from<%= classify(name) %>.getQuery, take(1)));

  data$ = this.store.pipe(select(from<%= classify(name) %>.getAllEntities));
  total$ = this.store.pipe(select(from<%= classify(name) %>.getTotal));
  perPage$ = this.store.pipe(select(from<%= classify(name) %>.getPerPage));
  from$ = this.store.pipe(select(from<%= classify(name) %>.getFrom));
  to$ = this.store.pipe(select(from<%= classify(name) %>.getTo));
  configTable: any;

  constructor(
    private store: Store<from<%= classify(name) %>.State>
  ) {
    this.configTable = {
      dataKey: '<%= underscore(name) %>_id',
      cols: [
        // TODO:
      ]
    };
  }

  ngOnInit() {
    this.subscription = this.store.pipe(select(from<%= classify(name) %>.getSelected), take(1)).subscribe(
      (selected: Selected<%= classify(name) %>) => {
        if (selected.selectedEntity) {
          this.selectedEntity = selected.selectedEntity;
          this.store.dispatch(new fromCore.Go({
            path: ['<%= underscore(name) %>', selected.selectedEntity.<%= underscore(name) %>_id]
          }));
        }
      }
    );
  }

  onLoad(<%= name %>Search: Search<%= classify(name) %>) {
    this.store.dispatch(from<%= classify(name) %>.EntityActions.LoadEntity({
      search: {
        ...<%= name %>Search,
        limit: 20,
        page: 1
      }
    }));
  }

  onCreate() {
    this.store.dispatch(from<%= classify(name) %>.EntityActions.SetSelected({ selected: initialStateSelected<%= classify(name) %> }));
    this.store.dispatch(new fromCore.Go({
      path: ['<%= underscore(name) %>', 'create']
    }));
  }

  onEdit(<%= name %>: <%= classify(name) %>) {
    this.store.dispatch(from<%= classify(name) %>.EntityActions.SetSelected({ selected: { selectedEntity: <%= name %> } }));
    this.store.dispatch(new fromCore.Go({
      path: ['<%= underscore(name) %>', <%= name %>.<%= underscore(name) %>_id]
    }));
  }

  onPaginate(event) {
    this.store.dispatch(from<%= classify(name) %>.EntityActions.PaginateEntity({ page: event.page + 1 }));
  }

  onCancel() {
    this.store.dispatch(from<%= classify(name) %>.EntityActions.SetSelected({ selected: initialStateSelected<%= classify(name) %> }));
    this.store.dispatch(new fromCore.Go({
      path: ['<%= underscore(name) %>']
    }));
  }

  onResetSearch() {
    this.store.dispatch(from<%= classify(name) %>.EntityActions.Reset({ redirect: true }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
