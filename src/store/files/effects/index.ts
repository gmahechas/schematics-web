import { Entity<%= classify(name) %>Effects } from '@web/app/<%= dasherize(path) %>/<%= dasherize(name) %>/store/effects/entity-<%= dasherize(name) %>.effects';
import { Layout<%= classify(name) %>Effects } from '@web/app/<%= dasherize(path) %>/<%= dasherize(name) %>/store/effects/layout-<%= dasherize(name) %>.effects';

export const effects: any[] = [
    Entity<%= classify(name) %>Effects,
    Layout<%= classify(name) %>Effects
];
