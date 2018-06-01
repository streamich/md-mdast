/* tslint:disable only-arrow-functions, no-invalid-this */
import {TTokenizer, IUnderline} from '../types';
import createRegexTokenizer from '../createRegexTokenizer';

const REG = /^\+\+(?=\S)([\s\S]*?\S)\+\+/;
const underline: TTokenizer<IUnderline> = createRegexTokenizer('underline', REG, 1);

export default underline;
