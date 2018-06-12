import { <%= classify(name) %> } from './<%= name %>.model';

export interface Store<%= classify(name) %> {
  store<%= classify(name)  %>: <%= classify(name) %>;
}
