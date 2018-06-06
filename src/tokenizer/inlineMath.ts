/* tslint:disable only-arrow-functions */
import {TTokenizer, IInlineMath} from '../types';

const REG = /^\$\$(?=\S)([\s\S]*?\S)\$\$/;

const inlineMath = () => {
    const tokenizer: TTokenizer<IInlineMath> = function(eat, value) {
        const matches = value.match(REG);

        if (matches) {
            return eat(matches[0], 'inlineMath', void 0, {value: matches[1]});
        }

        return;
    };

    return tokenizer;
};

export default inlineMath;
