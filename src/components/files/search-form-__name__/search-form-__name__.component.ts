import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { Search<%= name %> } from './../../models/search-<%= name %>.model';

@Component({
  selector: 'app-search-form-<%= name %>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-form-<%= name %>.component.html',
  styleUrls: ['./search-form-<%= name %>.component.scss']
})
export class SearchForm<%= classify(name) %>Component implements OnChanges, OnInit {

  @Input() query: Search<%= classify(name) %>;
  @Output() search: EventEmitter<Search<%= classify(name) %>> = new EventEmitter<Search<%= classify(name) %>>();
  @Output() create: EventEmitter<boolean> = new EventEmitter<boolean>();

  searchForm<%= classify(name) %>: FormGroup = this.formBuilder.group({
    <%= name %>: this.formBuilder.group({
      <%= name %>_id: new FormControl(''),
      // TODO
    })
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnChanges() {
    this.searchForm<%= classify(name) %>.setValue({
      <%= name %>: {
        <%= name %>_id: this.query.<%= name %>.<%= name %>_id,
        // TODO
      }
    });
  }

  ngOnInit() {
  }

  onSubmit(searchForm<%= classify(name) %>: FormGroup) {
    this.search.emit(searchForm<%= classify(name) %>.value);
  }

  onCreate() {
    this.create.emit(true);
  }
}
