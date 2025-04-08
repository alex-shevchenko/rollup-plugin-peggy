import { rollup } from 'rollup';
import { expect, test } from 'vitest';
import peggy from '../src';

test('should compile grammar into parser', async () => {
  const bundle = await rollup({
    input: 'test/arithmetic.pegjs',
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
  expect(parse('1+2')).toEqual(3);
  expect(() => parse('1+')).toThrow(
    new SyntaxError('Expected "(" or simple number but end of input found.')
  );
});

test('should accept standard Peggy options', async () => {
  const bundle = await rollup({
    input: 'test/arithmetic.pegjs',
    plugins: [peggy({ cache: true })]
  });

  const outputName = 'test_parser';
  const generated = await bundle.generate({
    name: outputName,
    format: 'iife'
  });
  const { parse } = new Function(
    `${generated.output[0].code}; return ${outputName};`
  )();
  expect(() => parse('3*((((((1+2')).toThrow(
    new SyntaxError('Expected ")", "*", or "+" but end of input found.')
  );
});
