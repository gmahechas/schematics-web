import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../store';

import { <%= classify(name) %> } from './../../../models/<%= name %>.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-dropdown-page-<%= name %>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dropdown-page-<%= name %>.component.html',
  styles: []
})
export class DropdownPage<%= classify(name) %>Component implements OnInit {

  @Input() group: FormGroup;
  @Input() controlName: string;
  @Input() options: string[];
  @Input() placeholder: string;
  @Input() filterPlaceholder: string;
  @Output() changeDropdown: EventEmitter<any> = new EventEmitter<any>();
  entities$: Observable<<%= classify(name) %>[]>;
  configDropDown: any;

  constructor(
    private store: Store<fromStore.State>
  ) {
    this.entities$ = store.pipe(select(fromStore.getAllEntities));
    this.configDropDown = {
      dataKey: '<%= name %>_id',
      optionLabel: '<%= name %>_id' // TODO:
    };
  }

  ngOnInit() {
  }

  keyUp(event) {
    this.store.dispatch(new fromStore.LoadEntityShared({
      <%= name %>: {
        // TODO:
      },
      // TODO:
    }));
  }

  handleChange(event) {
    this.changeDropdown.emit(event);
  }
}
