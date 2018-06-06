import escape from '../tokenizer/escape';
import icon from '../tokenizer/icon';
import link from '../tokenizer/link';
import text from '../tokenizer/text';
import mark from '../tokenizer/mark';
import inlineCode from '../tokenizer/inlineCode';
import emphasis from '../tokenizer/emphasis';
import {TAnyToken, TTokenizer} from '../types';
import strong from '../tokenizer/strong';
import deletedText from '../tokenizer/delete';
import inlineMath from '../tokenizer/inlineMath';
import footnoteReference from '../tokenizer/footnoteReference';
import linkReference from '../tokenizer/linkReference';
import inlineLink from '../tokenizer/inlineLink';
import sup from '../tokenizer/sup';
import sub from '../tokenizer/sub';
import handle from '../tokenizer/handle';
import underline from '../tokenizer/underline';
import inlineBreak from '../tokenizer/break';

const preset = {
    inline: [
        escape,
        inlineCode(),
        strong,
        emphasis,
        deletedText(),
        inlineMath(),
        footnoteReference,
        link(),
        linkReference,
        inlineLink,
        sup,
        sub,
        mark,
        handle,
        underline,
        inlineBreak,
        icon(32),
        text(),
    ] as TTokenizer<TAnyToken>[],
};

export default preset;
