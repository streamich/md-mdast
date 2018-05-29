import {regex} from '../lib';
import {ILink, TAnyToken} from '../ast';
import {label, url, title, replace} from '../regex';

const onToken = (token: TAnyToken, matches: string[]): ILink => {
    const tok = token as ILink;

    tok.children = matches[1] as any;
    tok.url = matches[2];

    return tok;
};

const REG = replace(/^!?\[(label)\]\(url(?:\s+(title))?\s*\)/, {
    label,
    url,
    title,
});

const Link = () => regex<ILink>('Link', REG, '', onToken);

export default Link;
