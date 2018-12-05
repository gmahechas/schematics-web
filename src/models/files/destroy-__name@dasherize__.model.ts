import { <%= classify(name) %> } from '@web/app/<%= dasherize(path) %>/<%= dasherize(name) %>/models/<%= dasherize(name) %>.model';

export interface Destroy<%= classify(name) %> {
  destroy<%= classify(name)  %>: <%= classify(name) %>;
}
