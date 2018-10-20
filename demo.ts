import {create} from './src';

const parser = create();

console.log(parser.tokenizeBlock('hello world'));
console.log(parser.tokenizeInline('hello world'));
