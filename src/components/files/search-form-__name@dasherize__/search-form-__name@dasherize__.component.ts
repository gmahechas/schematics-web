import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Search<%= classify(name) %> } from '@web/app/<%= path %>/<%= dasherize(name) %>/models/search-<%= dasherize(name) %>.model';

@Component({
  selector: 'app-search-form-<%= dasherize(name) %>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-form-<%= dasherize(name) %>.component.html',
  styles: []
})
export class SearchForm<%= classify(name) %>Component implements OnChanges, OnInit {

  @Input() query: Search<%= classify(name) %>;
  @Output() search: EventEmitter<Search<%= classify(name) %>> = new EventEmitter<Search<%= classify(name) %>>();
  @Output() create: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() resetSearch: EventEmitter<boolean> = new EventEmitter<boolean>();

  searchForm<%= classify(name) %> = this.formBuilder.group({
    <%= underscore(name) %>: this.formBuilder.group({
      // TODO:
    })
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnChanges() {
    this.searchForm<%= classify(name) %>.setValue({
      <%= underscore(name) %>: {
        // TODO:
      }
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.search.emit(this.searchForm<%= classify(name) %>.value);
  }

  onCreate() {
    this.create.emit(true);
  }

  onReset() {
    this.resetSearch.emit(true);
  }
}