import {create} from './src';

const parser = create();

console.log(parser.tokenizeBlock('*hello* __world__'));
console.log(parser.tokenizeInline('*hello* __world__'));
