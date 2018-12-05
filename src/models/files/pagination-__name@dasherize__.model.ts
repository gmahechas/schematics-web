import { <%= classify(name) %> } from '@web/app/<%= dasherize(path) %>/<%= dasherize(name) %>/models/<%= dasherize(name) %>.model';

export interface Pagination<%= classify(name) %> {
  pagination<%= classify(name)  %>: {
    total?: number;
    per_page?: number;
    current_page?: number;
    from?: number;
    to?: number;
    data?: <%= classify(name) %>[];
};
}
