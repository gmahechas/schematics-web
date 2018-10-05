import { Rule, SchematicContext, Tree, chain, mergeWith, apply, url, template, move } from '@angular-devkit/schematics';
import { classify } from '@angular-devkit/core/src/utils/strings';

const stringUtils = {classify};

export default function (options: any): Rule {
  return chain([
    (_tree: Tree, context: SchematicContext) => {
      context.logger.info('Testing Schematic: ' + JSON.stringify(options));
    },
    mergeWith(apply(url('./files'), [
      template({...stringUtils, ...options }),
      move(options.path + '/' + options.name)
    ]))
  ]);
}
