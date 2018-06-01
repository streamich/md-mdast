import {TEat, IParser, IHighlight} from '../types';

const REG = /^==(?=\S)([\s\S]*?\S)==/;

const highlight = () => {
    return function(this: IParser, eat: TEat<IHighlight>, value: string) {
        const matches = value.match(REG);

        if (matches) {
            return eat(matches[0], 'highlight', this.tokenizeInline(matches[1]));
        }
    };
};

export default highlight;
