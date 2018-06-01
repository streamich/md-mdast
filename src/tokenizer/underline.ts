/* tslint:disable only-arrow-functions, no-invalid-this */
import {TTokenizer, IUnderline} from '../types';

const REG = /^\+\+(?=\S)([\s\S]*?\S)\+\+/;

const underline: TTokenizer<IUnderline> = function(eat, value) {
    const matches = value.match(REG);

    if (matches) {
        return eat(matches[0], 'underline', this.tokenizeInline(matches[1]));
    }

    return;
};

export default underline;
