import {urlInline} from '../regex';
import {TTokenizer, IText} from '../types';

const REG = new RegExp(
    '^[\\s\\S]+?(?=[\\<!\\[_*`:~\\|#@\\$\\^=\\+]| {2,}\\n|(' + urlInline.source + ')|\\\\n|\\\\`|$)'
);

const text = () => {
    // tslint:disable only-arrow-functions
    const tokenizer: TTokenizer<IText> = function(eat, value) {
        const matches = value.match(REG);

        if (matches) {
            const matchedValue = matches[0];

            return eat(matchedValue, 'text', void 0, {value: matchedValue});
        }

        return;
    };

    return tokenizer;
};

export default text;
