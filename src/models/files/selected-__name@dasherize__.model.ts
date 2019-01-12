import { <%= classify(name) %> } from '@web/app/<%= dasherize(path) %>/<%= dasherize(name) %>/models/<%= dasherize(name) %>.model';

export interface Selected<%= classify(name) %> {
  selectedEntity: <%= classify(name) %> | null;
}

export const initialStateSelected<%= classify(name) %>: Selected<%= classify(name) %> = {
  selectedEntity: null
};
