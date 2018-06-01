/* tslint:disable only-arrow-functions */
import {TTokenizer, IBreak} from '../types';

const REG = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;

const escape: TTokenizer<IBreak> = function(eat, value) {
    const matches = value.match(REG);

    return matches ? eat(matches[0], 'text', void 0, {value: matches[1]}) : void 0;
};

export default escape;
