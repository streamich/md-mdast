import icon from '../tokenizer/icon';
import link from '../tokenizer/link';
import text from '../tokenizer/text';
import highlight from '../tokenizer/highlight';
import inlineCode from '../tokenizer/inlineCode';
import emphasis from '../tokenizer/emphasis';
import {TAnyToken, TTokenizer} from '../types';
import strong from '../tokenizer/strong';

const preset = {
    inline: [inlineCode(), strong(), emphasis(), link(), highlight(), icon(32), text()] as TTokenizer<TAnyToken>[],
};

export default preset;
