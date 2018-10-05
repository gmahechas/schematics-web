import { Rule, SchematicContext, Tree, chain, mergeWith, apply, url, template, move, schematic } from '@angular-devkit/schematics';
import { classify } from '@angular-devkit/core/src/utils/strings';

const stringUtils = { classify };

export default function (options: any): Rule {
  return chain([
    (_tree: Tree, context: SchematicContext) => {
      context.logger.info('Module Schematic: ' + JSON.stringify(options));
    },
    schematic('components', { path: options.path, name: options.name }),
    schematic('containers', { path: options.path, name: options.name }),
    schematic('graphql', { path: options.path, name: options.name }),
    schematic('guards', { path: options.path, name: options.name }),
    schematic('models', { path: options.path, name: options.name }),
    schematic('services', { path: options.path, name: options.name }),
    schematic('shared', { path: options.path, name: options.name }),
    schematic('store', { path: options.path, name: options.name }),
    mergeWith(apply(url('./files'), [
      template({ ...stringUtils, ...options }),
      move(options.path + '/' + options.name)
    ]))
  ]);
}

