import {TTokenizer, ICode} from '../types';

const REG = /^ *(`{3,}|~{3,})([^\s]*)\s*([^\n]*)\n([\s\S]*?)\s*\1 *(?:\n+|$)/;

// tslint:disable only-arrow-functions
const fences: TTokenizer<ICode> = function(eat, value) {
    const matches = value.match(REG);

    if (!matches) {
        return;
    }

    const subvalue = matches[0];
    const overrides = {
        value: matches[4] || matches[3],
        lang: matches[2] || '',
        meta: matches.length > 4 ? matches[3] : null,
    };

    return eat(subvalue, 'code', void 0, overrides);
};

export default fences;
