import {TTokenizer, IDelete} from '../types';

const REG = /^~~(?=\S)([\s\S]*?\S)~~/;

const deletedText = () => {
    // tslint:disable only-arrow-functions, no-invalid-this
    const tokenizer: TTokenizer<IDelete> = function(eat, value) {
        const matches = value.match(REG);

        if (matches) {
            return eat(matches[0], 'delete', this.tokenizeInline(matches[1]));
        }

        return;
    };

    return tokenizer;
};

export default deletedText;
