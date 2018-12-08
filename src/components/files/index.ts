import { SearchForm<%= classify(name) %>Component } from '@web/app/<%= path %>/<%= dasherize(name) %>/components/search-form-<%= dasherize(name) %>/search-form-<%= dasherize(name) %>.component';
import { Form<%= classify(name) %>Component } from '@web/app/<%= path %>/<%= dasherize(name) %>/components/form-<%= dasherize(name) %>/form-<%= dasherize(name) %>.component';

export const components: any[] = [
    SearchForm<%= classify(name) %>Component,
    Form<%= classify(name) %>Component
];

export * from '@web/app/<%= path %>/<%= dasherize(name) %>/components/search-form-<%= dasherize(name) %>/search-form-<%= dasherize(name) %>.component';
export * from '@web/app/<%= path %>/<%= dasherize(name) %>/components/form-<%= dasherize(name) %>/form-<%= dasherize(name) %>.component';
