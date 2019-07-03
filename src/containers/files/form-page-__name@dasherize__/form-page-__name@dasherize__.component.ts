import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as from<%= classify(name) %> from '@web/app/<%= path %>/<%= dasherize(name) %>/store';
import * as fromCore from '@web/app/core/store';

import { <%= classify(name) %> } from '@web/app/<%= path %>/<%= dasherize(name) %>/models/<%= dasherize(name) %>.model';
import { initialStateSelected<%= classify(name) %> } from '@web/app/<%= path %>/<%= dasherize(name) %>/models/selected-<%= dasherize(name) %>.model';

@Component({
  selector: 'app-form-page-<%= dasherize(name) %>',
  templateUrl: './form-page-<%= dasherize(name) %>.component.html',
  styles: []
})
export class FormPage<%= classify(name) %>Component implements OnInit {

  pending$ = this.store.pipe(select(from<%= classify(name) %>.getPending));
  <%= name %>$ = this.store.pipe(select(from<%= classify(name) %>.getSelectedByRouter));

  constructor(
    private store: Store<from<%= classify(name) %>.State>
  ) { }

  ngOnInit() {
  }

  onStore(<%= name %>: <%= classify(name) %>) {
    this.store.dispatch(from<%= classify(name) %>.EntityActions.StoreEntity({ entity: <%= name %> }));
  }

  onUpdate(<%= name %>: <%= classify(name) %>) {
    this.store.dispatch(from<%= classify(name) %>.EntityActions.UpdateEntity({ entity: <%= name %> }));
  }

  onCancel() {
    this.store.dispatch(from<%= classify(name) %>.EntityActions.SetSelected({ selected: initialStateSelected<%= classify(name) %> }));
    this.store.dispatch(fromCore.RouterActions.Go({
      path: ['<%= name %>']
    }));
  }

  onDestroy(<%= name %>: <%= classify(name) %>) {
    this.store.dispatch(from<%= classify(name) %>.EntityActions.DestroyEntity({ entity: <%= name %> }));
  }
}
