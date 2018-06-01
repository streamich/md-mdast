/* tslint:disable only-arrow-functions, no-invalid-this */
import {TTokenizer, ISup} from '../types';

const REG = /^\^(?=\S)([\s\S]*?\S)\^/;

const superscript: TTokenizer<ISup> = function(eat, value) {
    const matches = value.match(REG);

    if (matches) {
        return eat(matches[0], 'sup', this.tokenizeInline(matches[1]));
    }

    return;
};

export default superscript;
