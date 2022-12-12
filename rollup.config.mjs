import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'index.ts',
  output: [
    {
      exports: 'default',
      file: 'index.es.js',
      format: 'es'
    },
    {
      exports: 'default',
      file: 'index.cjs.js',
      format: 'cjs'
    }
  ],
  plugins: [commonjs(), nodeResolve(), typescript()]
};
