/* tslint:disable only-arrow-functions, no-invalid-this */
import {TTokenizer, ISub} from '../types';
import createRegexTokenizer from '../createRegexTokenizer';

const REG = /^~(?=\S)([\s\S]*?\S)~/;
const sub: TTokenizer<ISub> = createRegexTokenizer('sub', REG, 1);

export default sub;
