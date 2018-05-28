import {regexToken} from '../lib';

const Icon = regexToken('Icon', '(\\s:|::)([^\\s:]{1,32}?)(:(\\s|$)|::)', '', matches => matches[2]);

export default Icon;
