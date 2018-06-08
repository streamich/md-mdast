# pr-markdown

Markdown-to-MDAST converter. Small and fast.

## Installation

```shell
npm i -g md-mdast
```

## Usage

```js
const {create} = require('md-mdast');

const parser = create();

console.log(parser.tokenizeBlock('hello world'));
console.log(parser.tokenizeInline('hello world'));
```

## License

[Unlicense](http://unlicense.org/) &mdash; public domain.
