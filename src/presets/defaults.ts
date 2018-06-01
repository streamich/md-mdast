import icon from '../tokenizer/icon';
import link from '../tokenizer/link';
import text from '../tokenizer/text';
import highlight from '../tokenizer/highlight';
import inlineCode from '../tokenizer/inlineCode';
import emphasis from '../tokenizer/emphasis';
import {TAnyToken, TTokenizer} from '../types';

const preset = {
    inline: [inlineCode(), emphasis(), link(), highlight(), icon(32), text()] as TTokenizer<TAnyToken>[],
};

export default preset;
