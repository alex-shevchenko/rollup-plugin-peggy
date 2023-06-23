# rollup-plugin-peggy

Copyright (c) 2016 Cameron Hunter  
Copyright (c) 2022-2023 Caleb Evans  
Released under the MIT license

A [rollup](http://rollupjs.org) plugin allowing you to import [PEG.js](http://peggy.org) grammars as parsers directly in your code via Peggy, the PEG.js successor. This project is a fork of [rollup-plugin-pegjs](https://github.com/cameronhunter/rollup-plugin-pegjs), since PEG.js has been abandoned in favor of Peggy.

```js
import { parse } from 'grammar.pegjs';
console.log(parse('language to parse'));
```

## Install

This plugin is compatible with Rollup 2 and 3, as well as Vite 3 and 4. To use
it with either, simply install it via the command below.

The `peggy` package is also required as a peer dependency. You may install any
version as old as 1.2.0, through version 3.x.

```sh
npm install --save-dev peggy
npm install --save-dev rollup-plugin-peggy
```

## Usage

```js
// rollup.config.mjs
import { rollup } from 'rollup';
import peggy from 'rollup-plugin-peggy';

export default {
  input: 'main.js',
  plugins: [peggy()]
});
```

You can also pass any of the documented [Peggy JavaScript API options][docs].

[docs]: https://peggyjs.org/documentation.html#generating-a-parser-javascript-api

```js
peggy({ cache: true });
```
