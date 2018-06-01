import {TTokenizer, IEmphasis} from '../types';

const REG = /^_([^\s][\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?[^\s])_(?!_)|^\*([^\s][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*][\s\S]*?[^\s])\*(?!\*)|^_([^\s_])_(?!_)|^\*([^\s*])\*(?!\*)/;

const emphasis = () => {
    // tslint:disable only-arrow-functions, no-invalid-this
    const tokenizer: TTokenizer<IEmphasis> = function(eat, value) {
        const matches = value.match(REG);

        if (matches) {
            return eat(matches[0], 'emphasis', this.tokenizeInline(matches[1] || matches[3]));
        }
    };

    return tokenizer;
};

export default emphasis;
