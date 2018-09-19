import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromStore from './../../store';
import * as fromCore from './../../../../core/store';

import { <%= classify(name) %> } from './../../models/<%= name %>.model';

@Component({
  selector: 'app-form-page-<%= name %>',
  templateUrl: './form-page-<%= name %>.component.html',
  styles: []
})
export class FormPage<%= classify(name) %>Component implements OnInit {

  <%= name %>$ = this.store.pipe(select(fromStore.getSelectedByRouter));

  constructor(
    private store: Store<fromStore.State>
  ) { }

  ngOnInit() {
  }

  onStore(<%= name %>: <%= classify(name) %>) {
    this.store.dispatch(new fromStore.StoreEntity(<%= name %>));
  }

  onUpdate(<%= name %>: <%= classify(name) %>) {
    this.store.dispatch(new fromStore.UpdateEntity(<%= name %>));
  }

  onCancel() {
    this.store.dispatch(new fromCore.Go({
      path: ['<%= name %>']
    }));
  }

  onDestroy(<%= name %>: <%= classify(name) %>) {
    this.store.dispatch(new fromStore.DestroyEntity(<%= name %>));
  }
}
