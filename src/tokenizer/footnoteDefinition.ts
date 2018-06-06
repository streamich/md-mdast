import {TTokenizer, IFootnoteDefinition} from '../types';

const REG = /^\[\^([a-zA-Z0-9\-_]+)\]: *([^\n]*(\n?((  ([^\n]*)\n?)|\n(?!\n))*)?)/;

// tslint:disable only-arrow-functions, no-invalid-this
const footnoteDefinition: TTokenizer<IFootnoteDefinition> = function(eat, value) {
    const matches = value.match(REG);

    if (!matches) {
        return void 0;
    }

    const subvalue = matches[0];
    const identifier = matches[1];
    const children = this.tokenizeChildBlock(matches[2]);

    return eat(subvalue, 'footnoteDefinition', children, {identifier});
};

export default footnoteDefinition;
