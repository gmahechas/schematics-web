import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromStore from './../../store';
import * as fromCore from './../../../../core/store';

import { <%= classify(name) %> } from './../../models/<%= name %>.model';
import { Search<%= classify(name) %> } from './../../models/search-<%= name %>.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-index-page-<%= name %>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './index-page-<%= name %>.component.html',
  styleUrls: ['./index-page-<%= name %>.component.scss']
})
export class IndexPage<%= classify(name) %>Component implements OnInit {

  query$: Observable<Search<%= classify(name) %>>;

  data$: Observable<<%= classify(name) %>[]>;
  total$: Observable<number>;
  perPage$: Observable<number>;
  from$: Observable<number>;
  to$: Observable<number>;
  configTable: any;

  constructor(
    private store: Store<fromStore.State>
  ) {
    this.data$ = store.pipe(select(fromStore.getAllEntities));
    this.query$ = store.pipe(select(fromStore.getQuery));
    this.total$ = store.pipe(select(fromStore.getTotal));
    this.perPage$ = store.pipe(select(fromStore.getPerPage));
    this.from$ = store.pipe(select(fromStore.getFrom));
    this.to$ = store.pipe(select(fromStore.getTo));
    this.configTable = {
      dataKey: '<%= name %>_id',
      cols: [
        { field: '<%= name %>_id', header: 'Id', style: { width: '10%' } }
      ]
    };
  }

  ngOnInit() { }

  onLoad(<%= name %>Search: Search<%= classify(name) %>) {
    this.store.dispatch(new fromStore.LoadEntity({ ...<%= name %>Search, limit: 20, page: 1 }));
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
    this.store.dispatch(new fromStore.PaginateEntity(event.page + 1));
  }

  onCancel() {
    this.store.dispatch(new fromCore.Go({
      path: ['<%= name %>']
    }));
  }

}
