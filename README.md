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
       children:
        [ { type: 'emphasis',
            children: [ { type: 'text', value: 'hello' } ] },
          { type: 'text', value: ' ' },
          { type: 'strong',
            children: [ { type: 'text', value: 'world' } ] } ] } ],
}
```

## License

[Unlicense](http://unlicense.org/) &mdash; public domain.
