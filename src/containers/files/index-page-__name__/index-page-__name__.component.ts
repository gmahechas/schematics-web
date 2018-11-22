import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as from<%= classify(name) %> from '@web/app/<%= path %>/<%= name %>/store';
import * as fromCore from '@web/app/core/store';

import { <%= classify(name) %> } from '@web/app/<%= path %>/<%= name %>/models/<%= name %>.model';
import { Search<%= classify(name) %> } from '@web/app/<%= path %>/<%= name %>/models/search-<%= name %>.model';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-index-page-<%= name %>',
  templateUrl: './index-page-<%= name %>.component.html',
  styles: []
})
export class IndexPage<%= classify(name) %>Component implements OnInit {

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
      dataKey: '<%= name %>_id',
      cols: [
        // TODO:
      ]
    };
  }

  ngOnInit() { }

  onLoad(<%= name %>Search: Search<%= classify(name) %>) {
    this.store.dispatch(new from<%= classify(name) %>.LoadEntity({
      search: {
        <%= name %>: <%= name %>Search.<%= name %>,
        // TODO:
        limit: 20,
        page: 1
      }
    }));
  }

  onCreate() {
    this.store.dispatch(new fromCore.Go({
      path: ['<%= name %>', 'create']
    }));
  }

  onEdit(<%= name %>: <%= classify(name) %>) {
    this.store.dispatch(new fromCore.Go({
      path: ['<%= name %>', <%= name %>.<%= name %>_id]
    }));
  }

  onPaginate(event) {
    this.store.dispatch(new from<%= classify(name) %>.PaginateEntity({ page: event.page + 1 }));
  }

  onCancel() {
    this.store.dispatch(new fromCore.Go({
      path: ['<%= name %>']
    }));
  }

  onResetSearch() {
    this.store.dispatch(new from<%= classify(name) %>.ResetSearch());
  }
}
