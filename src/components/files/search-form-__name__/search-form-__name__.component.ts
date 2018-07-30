import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Search<%= classify(name) %> } from './../../models/search-<%= name %>.model';

@Component({
  selector: 'app-search-form-<%= name %>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-form-<%= name %>.component.html',
  styles: []
})
export class SearchForm<%= classify(name) %>Component implements OnChanges, OnInit {

  @Input() query: Search<%= classify(name) %>;
  @Output() search: EventEmitter<Search<%= classify(name) %>> = new EventEmitter<Search<%= classify(name) %>>();
  @Output() create: EventEmitter<boolean> = new EventEmitter<boolean>();

  searchForm<%= classify(name) %>: FormGroup = this.formBuilder.group({
    <%= name %>: this.formBuilder.group({
      // TODO
    })
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnChanges() {
    this.searchForm<%= classify(name) %>.setValue({
      <%= name %>: {
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