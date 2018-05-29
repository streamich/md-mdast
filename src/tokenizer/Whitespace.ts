import {token} from '../lib';
import {IWhitespace} from '../ast';
import {TTokenizer, TTokenizerResult} from '..';

const REG = /^\s+/;

const Whitespace = (): TTokenizer<IWhitespace> => (str: string, pos: number): TTokenizerResult<IWhitespace> => {
    const matches = str.match(REG);

    if (matches) {
        return token<IWhitespace>('Whitespace', undefined, pos, matches[0].length);
    }

    return;
};

export default Whitespace;
