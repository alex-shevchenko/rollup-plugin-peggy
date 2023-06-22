import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      exports: 'default',
      file: 'dist/index.es.js',
      format: 'es'
    },
    {
      exports: 'default',
      file: 'dist/index.cjs.js',
      format: 'cjs'
    }
  ],
  // Since peggy is listed as a peer dependency for this plugin, it is crucial
  // that we mark it as external, otherwise Rollup will compile into the output
  // bundle whatever peggy version we have currently installed
  external: ['peggy'],
  plugins: [commonjs(), nodeResolve(), typescript()]
};
