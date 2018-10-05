import { DropdownPage<%= classify(name) %>Component } from '@web/app/<%= path %>/<%= name %>/shared/dropdown-page-<%= name %>/dropdown-page-<%= name %>.component';

export const shared: any[] = [
  DropdownPage<%= classify(name) %>Component
];

export * from '@web/app/<%= path %>/<%= name %>/shared/dropdown-page-<%= name %>/dropdown-page-<%= name %>.component';
