import { Rule, SchematicContext, Tree, chain, mergeWith, apply, url, template, move, schematic } from '@angular-devkit/schematics';
import { classify } from '@angular-devkit/core/src/utils/strings';

const stringUtils = { classify };

export default function (options: any): Rule {
  return chain([
    (_tree: Tree, context: SchematicContext) => {
      context.logger.info('My Full Schematic: ' + JSON.stringify(options));
    },
    schematic('components', { name: options.name }),
    schematic('containers', { name: options.name }),
    schematic('graphql', { name: options.name }),
    schematic('guards', { name: options.name }),
    schematic('models', { name: options.name }),
    schematic('services', { name: options.name }),
    schematic('store', { name: options.name }),
    mergeWith(apply(url('./files'), [
      template({ ...stringUtils, ...options }),
      move(options.name)
    ]))
  ]);
}

