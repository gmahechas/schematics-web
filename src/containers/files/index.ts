import { IndexPage<%= classify(name) %>Component } from '@web/app/<%= path %>/<%= dasherize(name) %>/containers/index-page-<%= dasherize(name) %>/index-page-<%= dasherize(name) %>.component';
import { FormPage<%= classify(name) %>Component } from '@web/app/<%= path %>/<%= dasherize(name) %>/containers/form-page-<%= dasherize(name) %>/form-page-<%= dasherize(name) %>.component';

export const containers: any[] = [
  IndexPage<%= classify(name) %>Component,
  FormPage<%= classify(name) %>Component
];

export * from '@web/app/<%= path %>/<%= dasherize(name) %>/containers/index-page-<%= dasherize(name) %>/index-page-<%= dasherize(name) %>.component';
export * from '@web/app/<%= path %>/<%= dasherize(name) %>/containers/form-page-<%= dasherize(name) %>/form-page-<%= dasherize(name) %>.component';
