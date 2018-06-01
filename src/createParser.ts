import {TTokenizer, TAnyToken, TTokenType, TEat, IParser, TChildrenToken, IText} from './types';

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

export const loop = (parser: IParser, tokenizer: TTokenizer<TAnyToken>, value: string): TChildrenToken<TAnyToken> => {
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

    if (children.length === 1) {
        return children[0];
    } else {
        return children;
    }
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

const createParser = ({inline}: IcreateParserOptions) => {
    const parser: IParser = {} as IParser;

    parser.tokenizeInline = (value: string) => {
        let tokens = loop(parser, first(inline), value);

        // MERGE ADJACENT TEXT TOKENS.
        if (tokens instanceof Array) {
            const merged: TAnyToken[] = [];
            let lastTextToken: IText | null = null;

            // tslint:disable prefer-for-of
            for (let i = 0; i < tokens.length; i++) {
                const tok = tokens[i];

                if (!tok) {
                    continue;
                }

                if (tok.type === 'text') {
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
        }

        if (tokens instanceof Array) {
            if (tokens.length === 1) {
                tokens = tokens[0];
            }
        }

        return tokens;
    };

    return parser;
};

export default createParser;
