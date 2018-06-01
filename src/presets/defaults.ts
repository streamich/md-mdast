import icon from '../tokenizer/icon';
import link from '../tokenizer/link';
import text from '../tokenizer/text';
import highlight from '../tokenizer/highlight';
import inlineCode from '../tokenizer/inlineCode';

const preset = {
    inline: [inlineCode(), link(), highlight(), icon(32), text()],
    block: [],
};

export default preset;
