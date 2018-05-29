import {regex} from '../lib';
import {TIcon, TAnyToken} from '../ast';

const onToken = (token: TAnyToken, matches: string[]): TIcon => {
    const tok = token as TIcon;

    tok.emoji = matches[2];

    return tok;
};

const Icon = regex<TIcon>('Icon', '(\\s:|:)([^\\s:]{1,32}?)(:(\\s|$)|:)', '', onToken);

export default Icon;
