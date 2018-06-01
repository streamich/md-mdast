/* tslint:disable only-arrow-functions */
import {TTokenizer, IInlineMath} from '../types';

const REG = /^\[\^([a-zA-Z0-9\-_]+)\]/;

const footnoteReference: TTokenizer<IInlineMath> = function(eat, value) {
    const matches = value.match(REG);

    if (matches) {
        return eat(matches[0], 'footnoteReference', void 0, {value: matches[1]});
    }

    return;
};

export default footnoteReference;
