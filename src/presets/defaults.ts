import Icon from '../tokenizer/Icon';
import Whitespace from '../tokenizer/Whitespace';
import Link from '../tokenizer/Link';

const preset = {
    inline: [Whitespace(), Icon(), Link()],
    block: [],
};

export default preset;
