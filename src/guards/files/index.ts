import { <%= classify(name) %>ExistGuard } from './<%= name %>-exist.guard';

export const guards: any[] = [<%= classify(name) %>ExistGuard];

export * from './<%= name %>-exist.guard';
