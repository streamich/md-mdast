import {regex} from '../lib';
import {IIcon, TAnyToken} from '../ast';

const onToken = (token: TAnyToken, matches: string[]): IIcon => {
    const tok = token as IIcon;

    tok.emoji = matches[2];

    return tok;
};

const Icon = () => regex<IIcon>('Icon', '(\\s:|:)([^\\s:]{1,32}?)(:(\\s|$)|:)', '', onToken);

export default Icon;
