import {IHighlight, TTokenizer} from '../types';
import createRegexTokenizer from '../createRegexTokenizer';

const REG = /^==(?=\S)([\s\S]*?\S)==/;
const highlight: TTokenizer<IHighlight> = createRegexTokenizer('highlight', REG, 1);

export default highlight;
