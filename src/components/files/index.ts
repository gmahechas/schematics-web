import { SearchForm<%= classify(name) %>Component } from './search-form-<%= name %>/search-form-<%= name %>.component';
import { Form<%= classify(name) %>Component } from './form-<%= name %>/form-<%= name %>.component';

export const components: any[] = [
    SearchForm<%= classify(name) %>Component,
    Form<%= classify(name) %>Component
];

export * from './search-form-<%= name %>/search-form-<%= name %>.component';
export * from './form-<%= name %>/form-<%= name %>.component';
