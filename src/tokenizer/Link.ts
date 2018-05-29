import {regex} from '../lib';

const Icon = regex('Link', '(!?)\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]', '');

export default Icon;
