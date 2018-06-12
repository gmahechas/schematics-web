import { <%= classify(name) %> } from './<%= name %>.model';

export interface Update<%= classify(name) %> {
  update<%= classify(name) %>: <%= classify(name) %>;
}
