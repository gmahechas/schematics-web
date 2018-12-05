import { <%= classify(name) %> } from '@web/app/<%= dasherize(path) %>/<%= dasherize(name) %>/models/<%= dasherize(name) %>.model';

export interface Store<%= classify(name) %> {
  store<%= classify(name)  %>: <%= classify(name) %>;
}
