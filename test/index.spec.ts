import { rollup } from 'rollup';
import { expect, test } from 'vitest';
import peggy from '..';

test('should compile grammar into parser', async () => {
  const bundle = await rollup({
    input: 'test/grammar.pegjs',
    plugins: [peggy()]
  });

  const generated = await bundle.generate({
    name: 'test_parser',
    format: 'iife'
  });
  const { parse } = new Function(
    `${generated.output[0].code}; return test_parser;`
  )();
  const pass = parse('PASS?');
  const fail = parse('FAIL!');

  expect(pass).toEqual({ pass: true });
  expect(fail).toEqual({ pass: false });
});
