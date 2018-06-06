import {TTokenizer, IThematicBreak} from '../types';

// const REG = /^ *([-*_]{3,})\s*(?:\n+|$)/;
const REG = /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/;

// tslint:disable only-arrow-functions
const thematicBreak: TTokenizer<IThematicBreak> = function(eat, value) {
    const matches = value.match(REG);

    return matches ? eat(matches[0], 'thematicBreak', void 0, {value: matches[1]}) : void 0;
};

export default thematicBreak;
