import { rollup } from 'rollup';
import { expect, test } from 'vitest';
import peggy from '../src';

test('should compile grammar into parser', async () => {
  const bundle = await rollup({
    input: 'test/grammar.pegjs',
    plugins: [peggy()]
  });

  const outputName = 'test_parser';
  const generated = await bundle.generate({
    name: outputName,
    format: 'iife'
  });
  const { parse } = new Function(
    `${generated.output[0].code}; return ${outputName};`
  )();
  const pass = parse('PASS?');
  const fail = parse('FAIL!');

  expect(pass).toEqual({ pass: true });
  expect(fail).toEqual({ pass: false });
});
