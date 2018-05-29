import {regex} from '../lib';
import {TIcon} from '../ast';

const Icon = regex('Icon', '(\\s:|:)([^\\s:]{1,32}?)(:(\\s|$)|:)', '', (token, matches) => {
    (token as TIcon).emoji = matches[2];

    return token;
});

export default Icon;
