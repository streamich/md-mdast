import {TTokenizer, TAnyToken, TTokenType, TEat, IParser, TNullableToken, TChildrenToken} from './types';

// tslint:disable no-any
export const token = <T extends TAnyToken>(type: TTokenType, children?: any): T => {
    if (children instanceof Array) {
        if (children.length === 1) {
            // tslint:disable no-parameter-reassignment
            children = children[0];
        }
    }

    const tok = {
        type,
        children,
    } as T;

    return tok;
};

const eat: TEat<TAnyToken> = (subvalue, type, children, overrides) => {
    const tok = token(type, children);

    if (overrides) {
        Object.assign(tok, overrides);
    }

    return tok;
};

export const loop = (parser: IParser, tokenizer: TTokenizer<TAnyToken>, value: string): TChildrenToken<TAnyToken> => {
    const children = [];
    const remaining = value;
    const end = value.length;

    let length = 0;

    while (length < end) {
        const tok = tokenizer.call(parser, eat, remaining);

        if (tok) {
            children.push(tok);
            length += tok.len || 0;
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
    block: TTokenizer<TAnyToken>[];
}

const createParser = ({inline}: IcreateParserOptions) => {
    const parser: IParser = {} as IParser;

    parser.tokenizeInline = (value: string) => loop(parser, first(inline), value);

    return parser;
};

export default createParser;
