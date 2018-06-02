import {TTokenizer, TAnyToken, TTokenType, TEat, IParser, IText} from './types';

// tslint:disable no-any
export const token = <T extends TAnyToken>(
    value: string,
    type: TTokenType,
    children?: any,
    overrides?: Partial<TAnyToken>
): T => {
    if (children instanceof Array) {
        if (children.length === 1) {
            // tslint:disable no-parameter-reassignment
            children = children[0];
        }
    }

    const tok = {
        type,
        len: value.length,
    } as T;

    if (children) {
        tok.children = children;
    }

    if (overrides) {
        Object.assign(tok, overrides);
    }

    return tok;
};

const eat: TEat<TAnyToken> = (subvalue, type, children, overrides) => {
    const tok = token(subvalue, type, children, overrides);

    return tok;
};

export const loop = (parser: IParser, tokenizer: TTokenizer<TAnyToken>, value: string): TAnyToken[] | undefined => {
    const children = [];
    const end = value.length;

    let remaining = value;
    let length = 0;

    while (length < end) {
        const tok = tokenizer.call(parser, eat, remaining);

        if (tok) {
            children.push(tok);
            length += tok.len || 0;
            remaining = remaining.substr(tok.len);
        } else {
            if (!children.length) {
                return;
            }
        }
    }

    return children;
};

export const first = (tokenizers: TTokenizer<any>[]): TTokenizer<any> => {
    // tslint:disable no-shadowed-variable
    return function(this: IParser, eat: TEat<any>, value: string) {
        for (const tokenizer of tokenizers) {
            const tok = tokenizer.call(this, eat, value);

            if (tok) {
                return tok;
            }
        }
    };
};

export interface IcreateParserOptions {
    inline: TTokenizer<TAnyToken>[];
    // block: TTokenizer<TAnyToken>[];
}

const smartypants = (text: string) =>
    text
        // em-dashes
        .replace(/---/g, '\u2014')
        // en-dashes
        .replace(/--/g, '\u2013')
        // opening singles
        .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
        // closing singles & apostrophes
        .replace(/'/g, '\u2019')
        // opening doubles
        .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
        // closing doubles
        .replace(/"/g, '\u201d')
        // ellipses
        .replace(/\.{3}/g, '\u2026');

const createParser = ({inline}: IcreateParserOptions) => {
    const parser: IParser = {} as IParser;

    parser.tokenizeInline = (value: string) => {
        let tokens = loop(parser, first(inline), value);

        if (!tokens) {
            return;
        }

        // MERGE ADJACENT TEXT TOKENS.
        const merged: TAnyToken[] = [];
        let lastTextToken: IText | null = null;

        // tslint:disable prefer-for-of
        for (let i = 0; i < tokens.length; i++) {
            const tok = tokens[i];

            if (tok.type === 'text') {
                tok.value = smartypants((tok as IText).value);

                if (lastTextToken) {
                    lastTextToken.value += tok.value;
                    lastTextToken.len += tok.len;
                } else {
                    merged.push(tok);
                    lastTextToken = tok as IText;
                }
            } else {
                merged.push(tok);
                lastTextToken = null;
            }
        }

        tokens = merged;

        return tokens.length === 1 ? tokens[0] : tokens;
    };

    return parser;
};

export default createParser;
