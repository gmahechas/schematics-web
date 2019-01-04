import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as from<%= classify(name) %> from '@web/app/<%= path %>/<%= dasherize(name) %>/store';
import * as fromCore from '@web/app/core/store';

import { <%= classify(name) %> } from '@web/app/<%= path %>/<%= dasherize(name) %>/models/<%= dasherize(name) %>.model';
import { Search<%= classify(name) %> } from '@web/app/<%= path %>/<%= dasherize(name) %>/models/search-<%= dasherize(name) %>.model';

import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-index-page-<%= dasherize(name) %>',
  templateUrl: './index-page-<%= dasherize(name) %>.component.html',
  styles: []
})
export class IndexPage<%= classify(name) %>Component implements OnInit, OnDestroy {

  subscription: Subscription;
  selected: any;

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
    this.subscription = this.store.pipe(select(from<%= classify(name) %>.getSelectedEntity), take(1)).subscribe(
      (<%= underscore(name) %>: <%= classify(name) %>) => {
        if (<%= underscore(name) %>) {
          this.selected = <%= underscore(name) %>;
          this.store.dispatch(new fromCore.Go({
            path: ['<%= underscore(name) %>', <%= underscore(name) %>.<%= underscore(name) %>_id]
          }));
        }
      }
    );
  }

  onLoad(<%= name %>Search: Search<%= classify(name) %>) {
    this.store.dispatch(new from<%= classify(name) %>.LoadEntity({
      search: {
        <%= underscore(name) %>: <%= name %>Search.<%= underscore(name) %>,
        // TODO:
        limit: 20,
        page: 1
      }
    }));
  }

  onCreate() {
    this.store.dispatch(new from<%= classify(name) %>.SelectEntity({ entity: null }));
    this.store.dispatch(new fromCore.Go({
      path: ['<%= underscore(name) %>', 'create']
    }));
  }

  onEdit(<%= name %>: <%= classify(name) %>) {
    this.store.dispatch(new from<%= classify(name) %>.SelectEntity({ entity: <%= name %> }));
    this.store.dispatch(new fromCore.Go({
      path: ['<%= underscore(name) %>', <%= name %>.<%= underscore(name) %>_id]
    }));
  }

  onPaginate(event) {
    this.store.dispatch(new from<%= classify(name) %>.PaginateEntity({ page: event.page + 1 }));
  }

  onCancel() {
    this.store.dispatch(new from<%= classify(name) %>.SelectEntity({ entity: null }));
    this.store.dispatch(new fromCore.Go({
      path: ['<%= underscore(name) %>']
    }));
  }

  onResetSearch() {
    this.store.dispatch(new from<%= classify(name) %>.ResetSearch());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
