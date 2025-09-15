import { createFilter } from '@rollup/pluginutils';
import { generate, type ParserBuildOptions } from 'peggy';
import type { Plugin } from 'rollup';

export interface Options extends ParserBuildOptions {
  target?: string;
  include?: string[];
  exclude?: string[];
}

export default function (options: Options = {}): Plugin {
  return {
    name: 'rollup-plugin-peggy',
    transform(grammar, id) {
      const {
        target = 'es2015',
        include = ['*.pegjs', '**/*.pegjs'],
        exclude = []
      } = options;
      const filter = createFilter(include, exclude);
      if (filter(id)) {
        const code = generate(grammar, {
          output: 'source',
          ...options
        }).toString();
        return {
          code: code,
          map: { mappings: '' }
        };
      } else {
        return null;
      }
    }
  };
}
