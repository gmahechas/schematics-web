import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import * as from<%= classify(name) %> from '@web/app/<%= path %>/<%= dasherize(name) %>/store';

import { Search<%= classify(name) %> } from '@web/app/<%= path %>/<%= dasherize(name) %>/models/search-<%= dasherize(name) %>.model';

@Component({
  selector: 'app-dropdown-page-<%= dasherize(name) %>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dropdown-page-<%= dasherize(name) %>.component.html',
  styles: []
})
export class DropdownPage<%= classify(name) %>Component implements OnInit {

  @Input() group: FormGroup;
  @Input() groupName: string;
  @Input() controlName: string;
  @Input() options: string[];
  @Input() optionLabel: string;
  @Input() filter = true;
  @Input() placeholder: string[];
  @Input() filterPlaceholder: string[];
  @Input() showClear: boolean;
  @Input() dropdownIcon: string;
  @Input() emptyFilterMessage: string[];
  @Input() keyboardKey: 'Enter' | 'Any' = 'Enter';
  @Input() keyUpTimes = 3;
  @Input() search<%= classify(name) %>: Search<%= classify(name) %>;
  @Output() changeDropdown = new EventEmitter<any>();
  entities$ = this.store.pipe(select(from<%= classify(name) %>.getAllEntities));
  entityId = '<%= underscore(name) %>_id';

  constructor(
    private store: Store<from<%= classify(name) %>.State>
  ) { }

  ngOnInit() {
  }

  keyUp(event) {
    this.store.dispatch(new from<%= classify(name) %>.LoadEntityShared({
      search: {
        <%= underscore(name) %>: {
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
