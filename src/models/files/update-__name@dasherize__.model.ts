import { <%= classify(name) %> } from '@web/app/<%= dasherize(path) %>/<%= dasherize(name) %>/models/<%= dasherize(name) %>.model';

export interface Update<%= classify(name) %> {
  update<%= classify(name) %>: <%= classify(name) %>;
}
