import { Entity<%= classify(name) %>Effects } from '@web/app/<%= path %>/<%= name %>/store/effects/entity-<%= name %>.effects';
import { Layout<%= classify(name) %>Effects } from '@web/app/<%= path %>/<%= name %>/store/effects/layout-<%= name %>.effects';

export const effects: any[] = [
    Entity<%= classify(name) %>Effects,
    Layout<%= classify(name) %>Effects
];

export * from '@web/app/<%= path %>/<%= name %>/store/effects/entity-<%= name %>.effects';
export * from '@web/app/<%= path %>/<%= name %>/store/effects/layout-<%= name %>.effects';
