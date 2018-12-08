import { Rule, SchematicContext, Tree, chain, mergeWith, apply, url, template, move } from '@angular-devkit/schematics';
import { classify, dasherize, underscore } from '@angular-devkit/core/src/utils/strings';

const stringUtils = { classify, dasherize, underscore };

export default function (options: any): Rule {
  return chain([
    (_tree: Tree, context: SchematicContext) => {
      context.logger.info('Containers Schematic: ' + JSON.stringify(options));
    },
    mergeWith(apply(url('./files'), [
      template({ ...stringUtils, ...options }),
      move(options.path + '/' + dasherize(options.name) + '/containers')
    ]))
  ]);
}

