import { <%= classify(name) %> } from '@web/app/<%= path %>/<%= name %>/models/<%= name %>.model';

export interface Store<%= classify(name) %> {
  store<%= classify(name)  %>: <%= classify(name) %>;
}
