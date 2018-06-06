import {TTokenizer, INewline} from '../types';

const REG = /^\n+/;

// tslint:disable only-arrow-functions
const newline: TTokenizer<INewline> = function(eat, value) {
    const matches = value.match(REG);

    if (!matches) {
        return;
    }

    return matches ? eat(matches[0], 'newline') : void 0;
};

export default newline;
