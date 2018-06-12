import { <%= classify(name) %> } from './<%= name  %>.model';

export interface Destroy<%= classify(name) %> {
  destroy<%= classify(name)  %>: <%= classify(name) %>;
}
