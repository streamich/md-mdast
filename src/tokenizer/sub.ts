/* tslint:disable only-arrow-functions, no-invalid-this */
import {TTokenizer, ISub} from '../types';

const REG = /^~(?=\S)([\s\S]*?\S)~/;

const sub: TTokenizer<ISub> = function(eat, value) {
    const matches = value.match(REG);

    if (matches) {
        return eat(matches[0], 'sub', this.tokenizeInline(matches[1]));
    }

    return;
};

export default sub;
