import { <%= classify(name) %> } from '@web/app/<%= path %>/<%= name %>/models/<%= name %>.model';

export interface Update<%= classify(name) %> {
  update<%= classify(name) %>: <%= classify(name) %>;
}
