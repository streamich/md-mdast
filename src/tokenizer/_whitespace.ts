import {token} from '../lib';
import {IWhitespace} from '../ast';
import {TTokenizer, TTokenizerResult} from '../createParser';

const REG = /^\s+/;

const whitespace = (): TTokenizer<IWhitespace> => (str: string, pos: number): TTokenizerResult<IWhitespace> => {
    const matches = str.match(REG);

    if (matches) {
        return token<IWhitespace>('whitespace', undefined, pos, matches[0].length);
    }

    return;
};

export default whitespace;
