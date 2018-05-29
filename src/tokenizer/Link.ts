import {regex} from '../lib';
import {TLink, TAnyToken} from '../ast';
import {label, url, title, replace} from '../regex';

const onToken = (token: TAnyToken, matches: string[]): TLink => {
    const tok = token as TLink;

    tok.children = matches[1] as any;
    tok.url = matches[2];

    return tok;
};

const REG = replace(/^!?\[(label)\]\(url(?:\s+(title))?\s*\)/, {
    label,
    url,
    title,
});

const Link = () => regex<TLink>('Link', REG, '', onToken);

export default Link;
