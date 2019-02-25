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

console.log(parser.tokenizeBlock('*hello* __world__'));
```

Result:

```
{ type: 'root',
  children:
   [ { type: 'paragraph',
       raw: '*hello* __world__',
       len: 17,
       children:
        [ { type: 'emphasis',
            raw: '*hello*',
            len: 7,
            children: [ { type: 'text', raw: 'hello', len: 5, value: 'hello' } ] },
          { type: 'text', raw: ' ', len: 1, value: ' ' },
          { type: 'strong',
            raw: '__world__',
            len: 9,
            children: [ { type: 'text', raw: 'world', len: 5, value: 'world' } ] } ] } ],
  len: 17 }
```

## License

[Unlicense](http://unlicense.org/) &mdash; public domain.
