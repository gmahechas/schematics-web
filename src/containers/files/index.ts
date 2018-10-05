import { IndexPage<%= classify(name) %>Component } from '@web/app/<%= path %>/<%= name %>/containers/index-page-<%= name %>/index-page-<%= name %>.component';
import { FormPage<%= classify(name) %>Component } from '@web/app/<%= path %>/<%= name %>/containers/form-page-<%= name %>/form-page-<%= name %>.component';

export const containers: any[] = [
  IndexPage<%= classify(name) %>Component,
  FormPage<%= classify(name) %>Component
];

export * from '@web/app/<%= path %>/<%= name %>/containers/index-page-<%= name %>/index-page-<%= name %>.component';
export * from '@web/app/<%= path %>/<%= name %>/containers/form-page-<%= name %>/form-page-<%= name %>.component';
