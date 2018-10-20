# md-mdast

[![](https://img.shields.io/bundlephobia/minzip/md-mdast.svg)](https://bundlephobia.com/result?p=md-mdast@1.0.1)

- Markdown to [MDAST](https://github.com/syntax-tree/mdast) converter.
- Small and fast.
- No dependencies.

## Installation

```shell
npm install md-mdast
```

## Usage

```js
const {create} = require('md-mdast');

const parser = create();

console.log(parser.tokenizeBlock('hello world'));
console.log(parser.tokenizeInline('hello world'));
```

Result:

```
{ type: 'root',
  children:
   { type: 'paragraph',
     raw: 'hello world',
     len: 11,
     children:
      { type: 'text',
        raw: 'hello world',
        len: 11,
        value: 'hello world' } },
  len: 11 }
{ type: 'text',
  raw: 'hello world',
  len: 11,
  value: 'hello world' }
```

## License

[Unlicense](http://unlicense.org/) &mdash; public domain.
