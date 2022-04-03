# rollup-plugin-peggy

[![Build Status](https://travis-ci.org/caleb531/rollup-plugin-peggy.svg?branch=master)](https://travis-ci.org/caleb531/rollup-plugin-peggy) [![NPM Version](https://img.shields.io/npm/v/rollup-plugin-peggy.svg)](https://npmjs.org/package/rollup-plugin-peggy) [![License](https://img.shields.io/npm/l/rollup-plugin-peggy.svg)](https://github.com/caleb531/rollup-plugin-peggy/blob/master/LICENSE.md)

A [rollup](http://rollupjs.org) plugin allowing you to import [PEG.js](http://peggy.org) grammars as parsers directly in your code via Peggy, the PEG.js successor. This project is a fork of [rollup-plugin-pegjs](https://github.com/cameronhunter/rollup-plugin-pegjs), since PEG.js has been abandoned in favor of Peggy.

```js
import { parse } from "grammar.pegjs";
console.log(parse("language to parse"));
```

## Install

```sh
npm install --save-dev rollup-plugin-peggy
```

## Usage

```js
import { rollup } from "rollup";
import peggy from "rollup-plugin-peggy";

rollup({
  entry: "main.js",
  plugins: [
    peggy()
  ]
});
```
