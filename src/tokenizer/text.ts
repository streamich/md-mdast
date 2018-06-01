import {urlInline} from '../regex';
import {TTokenizer, IText} from '../types';

const REG = new RegExp('^[\\s\\S]+?(?=[\\<!\\[_*`:~#@\\$\\^=\\+]| {2,}\\n|(' + urlInline.source + ')|\\\\n|\\\\`|$)');

const text = () => {
    // tslint:disable only-arrow-functions
    const tokenizer: TTokenizer<IText> = function(eat, value) {
        const matches = value.match(REG);

        if (matches) {
            return eat(matches[0], 'text');
        }
    };

    return tokenizer;
};

export default text;
