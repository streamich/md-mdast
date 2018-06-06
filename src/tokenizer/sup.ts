/* tslint:disable only-arrow-functions, no-invalid-this */
import {TTokenizer, ISup} from '../types';
import createRegexTokenizer from '../createRegexTokenizer';

const REG = /^\^(?=\S)([\s\S]*?\S)\^/;
const sup: TTokenizer<ISup> = createRegexTokenizer('sup', REG, 1);

export default sup;
