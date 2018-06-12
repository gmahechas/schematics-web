import { Entity<%= classify(name) %>Effects } from './entity-<%= name %>.effects';
import { Layout<%= classify(name) %>Effects } from './layout-<%= name %>.effects';

export const effects: any[] = [
    Entity<%= classify(name) %>Effects,
    Layout<%= classify(name) %>Effects
];

export * from './entity-<%= name %>.effects';
export * from './layout-<%= name %>.effects';
