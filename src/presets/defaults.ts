import escape from '../tokenizer/escape';
import icon from '../tokenizer/icon';
import link from '../tokenizer/link';
import text from '../tokenizer/text';
import mark from '../tokenizer/mark';
import inlineCode from '../tokenizer/inlineCode';
import emphasis from '../tokenizer/emphasis';
import {TTokenizer, TBlockToken, TInlineToken} from '../types';
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
import code from '../tokenizer/code';
import newline from '../tokenizer/newline';
import fences from '../tokenizer/fences';
import math from '../tokenizer/math';
import thematicBreak from '../tokenizer/thematicBreak';
import heading from '../tokenizer/heading';
import blockquote from '../tokenizer/blockquote';
import paragraph from '../tokenizer/paragraph';
import definition from '../tokenizer/definition';

const preset = {
    block: [newline, code, fences, math, thematicBreak, heading, blockquote, definition, paragraph] as TTokenizer<
        TBlockToken
    >[],
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
    ] as TTokenizer<TInlineToken>[],
};

export default preset;
