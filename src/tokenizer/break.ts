/* tslint:disable only-arrow-functions */
import {TTokenizer, IBreak} from '../types';

const REG1 = /^\s{2,}\n(?!\s*$)/;
const REG2 = /^ *\\n/;

const inlineBreak: TTokenizer<IBreak> = function(eat, value) {
    const matches = value.match(REG1) || value.match(REG2);

    return matches ? eat(matches[0], 'break') : void 0;
};

export default inlineBreak;
