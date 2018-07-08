import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../store';

import { <%= classify(name) %> } from './../../../models/<%= name %>.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-dropdown-page-<%= name %>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dropdown-page-<%= name %>.component.html',
  styleUrls: ['./dropdown-page-<%= name %>.component.scss']
})
export class DropdownPage<%= classify(name) %>Component implements OnInit {

  @Input() group: FormGroup;
  @Input() controlName: string;
  @Input() options: string[];
  entities$: Observable<<%= classify(name) %>[]>;
  configDropDown: any;

  constructor(
    private store: Store<fromStore.State>
  ) {
    this.entities$ = store.pipe(select(fromStore.getAllEntities));
    this.configDropDown = {
      placeholder: 'Selecciona el pais',
      dataKey: '<%= name %>_id',
      optionLabel: 'TODO'
    };
  }

  ngOnInit() {
  }

  keyUp(event) {
    this.store.dispatch(new fromStore.LoadEntityShared({
      <%= name %>: {
        <%= name %>_id: null,
        <%= name %>_name: event, // TODO
      }
    }));
  }
}
