import { createFilter } from '@rollup/pluginutils';
import { generate } from 'peggy';
import type { Plugin } from 'rollup';

interface Options {
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
      const exporter =
        target?.indexOf('es') === 0 ? 'export default' : 'module.exports =';
      const generated = generate(grammar, {
        output: 'source',
        ...options
      });
      return filter(id)
        ? {
            code: `${exporter} ${generated};`,
            map: { mappings: '' }
          }
        : null;
    }
  };
}
