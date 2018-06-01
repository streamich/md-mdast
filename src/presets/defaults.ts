import icon from '../tokenizer/icon';
import whitespace from '../tokenizer/whitespace';
import link from '../tokenizer/link';

const preset = {
    inline: [whitespace(), icon(':', 32), link()],
    block: [],
};

export default preset;
