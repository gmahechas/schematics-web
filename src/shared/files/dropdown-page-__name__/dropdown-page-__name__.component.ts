import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../store';

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
  @Input() optionLabel: string;
  @Input() placeholder: string;
  @Input() filterPlaceholder: string;
  @Output() changeDropdown: EventEmitter<any> = new EventEmitter<any>();
  entities$ = this.store.pipe(select(fromStore.getAllEntities));
  entityId = '<%= name %>_id'

  constructor(
    private store: Store<fromStore.State>
  ) { }

  ngOnInit() {
  }

  keyUp(event) {
    this.store.dispatch(new fromStore.LoadEntityShared({
      search: {
        <%= name %>: {
          // TODO:
        },
        // TODO:
      }
    }));
  }

  handleChange(event) {
    this.changeDropdown.emit(event);
  }
}