# pr-markdown

Markdown-to-AST parser built for speed and size.

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
