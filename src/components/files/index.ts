import { SearchForm<%= classify(name) %>Component } from '@web/app/<%= path %>/<%= name %>/components/search-form-<%= name %>/search-form-<%= name %>.component';
import { Form<%= classify(name) %>Component } from '@web/app/<%= path %>/<%= name %>/components/form-<%= name %>/form-<%= name %>.component';

export const components: any[] = [
    SearchForm<%= classify(name) %>Component,
    Form<%= classify(name) %>Component
];

export * from '@web/app/<%= path %>/<%= name %>/components/search-form-<%= name %>/search-form-<%= name %>.component';
export * from '@web/app/<%= path %>/<%= name %>/components/form-<%= name %>/form-<%= name %>.component';
