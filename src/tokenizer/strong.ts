import {TTokenizer, IStrong} from '../types';

const REG = /^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)|^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)/;

const strong = () => {
    // tslint:disable only-arrow-functions, no-invalid-this
    const tokenizer: TTokenizer<IStrong> = function(eat, value) {
        const matches = value.match(REG);

        if (matches) {
            return eat(matches[0], 'strong', this.tokenizeInline(matches[1] || matches[2]));
        }

        return;
    };

    return tokenizer;
};

export default strong;
