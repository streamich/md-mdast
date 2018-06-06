/* tslint:disable only-arrow-functions */
import {TTokenizer, ISub} from '../types';

const REG = /^([#~@])(([\w\-_\.\/#]{1,64})|(\{([\w\-_\.\/#=\/ ]{1,64})\}))/;

const handle: TTokenizer<ISub> = function(eat, value) {
    const matches = value.match(REG);

    if (matches) {
        const subvalue = matches[5] || matches[2];

        return eat(matches[0], 'handle', void 0, {
            value: subvalue,
            prefix: matches[1],
        });
    }

    return;
};

export default handle;
