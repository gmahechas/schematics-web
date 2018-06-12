import { IndexPage<%= classify(name) %>Component } from './index-page-<%= name %>/index-page-<%= name %>.component';
import { FormPage<%= classify(name) %>Component } from './form-page-<%= name %>/form-page-<%= name %>.component';

export const containers: any[] = [
  IndexPage<%= classify(name) %>Component,
  FormPage<%= classify(name) %>Component
];

export * from './index-page-<%= name %>/index-page-<%= name %>.component';
export * from './form-page-<%= name %>/form-page-<%= name %>.component';
