import {label, url, title, replace} from '../regex';
import {IParser, TEat, ILink} from '../types';

const REG = replace(/^!?\[(label)\]\(url(?:\s+(title))?\s*\)/, {
    label,
    url,
    title,
});

const link = () => {
    return function(this: IParser, eat: TEat<ILink>, value: string) {
        const matches = value.match(REG);

        if (matches) {
            return eat(matches[0], 'link', this.tokenizeInline(matches[1]), {url: matches[2]});
        }

        return;
    };
};

export default link;
