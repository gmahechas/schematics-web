import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromStore from '@web/app/<%= path %>/<%= name %>/store';
import * as fromCore from '@web/app/core/store';

import { <%= classify(name) %> } from '@web/app/<%= path %>/<%= name %>/models/<%= name %>.model';
import { Search<%= classify(name) %> } from '@web/app/<%= path %>/<%= name %>/models/search-<%= name %>.model';

@Component({
  selector: 'app-index-page-<%= name %>',
  templateUrl: './index-page-<%= name %>.component.html',
  styles: []
})
export class IndexPage<%= classify(name) %>Component implements OnInit {

  query$ = this.store.pipe(select(fromStore.getQuery));

  data$ = this.store.pipe(select(fromStore.getAllEntities));
  total$ = this.store.pipe(select(fromStore.getTotal));
  perPage$ = this.store.pipe(select(fromStore.getPerPage));
  from$ = this.store.pipe(select(fromStore.getFrom));
  to$ = this.store.pipe(select(fromStore.getTo));
  configTable: any;

  constructor(
    private store: Store<fromStore.State>
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
    this.store.dispatch(new fromStore.LoadEntity({
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
    this.store.dispatch(new fromStore.PaginateEntity({ page: event.page + 1 }));
  }

  onCancel() {
    this.store.dispatch(new fromCore.Go({
      path: ['<%= name %>']
    }));
  }

  onResetSearch() {
    this.store.dispatch(new fromStore.ResetSearch());
  }
}
