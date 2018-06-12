import { <%= classify(name) %>Service } from './<%= name %>.service';

export const services: any[] = [<%= classify(name) %>Service];

export * from './<%= name %>.service';
