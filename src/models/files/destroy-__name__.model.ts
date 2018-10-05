import { <%= classify(name) %> } from '@web/app/<%= path %>/<%= name %>/models/<%= name  %>.model';

export interface Destroy<%= classify(name) %> {
  destroy<%= classify(name)  %>: <%= classify(name) %>;
}
