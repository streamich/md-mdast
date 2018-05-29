import {TToken, TTokenType} from './ast';
import {TTokenizer, IContext} from '.';

// tslint:disable no-any
export const token = (type: TTokenType, children?: any, pos?: number, len?: number): TToken => {
    if (children instanceof Array) {
        if (children.length === 1) {
            // tslint:disable no-parameter-reassignment
            children = children[0];
        }
    }

    const tok: TToken = {
        type,
        children,
        pos,
        len,
    };

    return tok;
};

export const regexToken = (
    type: TTokenType,
    regex: string | RegExp,
    flags: string,
    getChildren: (matches: any, src: string, pos: number, ctx: IContext) => string | TToken
) => {
    const tokenizer: TTokenizer = (src, pos, ctx) => {
        const matches = src.substr(pos).match(regex instanceof RegExp ? regex : new RegExp('^' + regex + '', flags));

        if (!matches) {
            return;
        }

        const children = getChildren(matches, src, pos, ctx);

        return token(type, children, pos, matches[0].length);
    };

    return tokenizer;
};

export const first = (tokenizers: TTokenizer[]): TTokenizer => (src: string, pos: number, ctx: IContext) => {
    for (const tokenizer of tokenizers) {
        const tok = tokenizer(src, pos, ctx);

        if (tok) {
            return tok;
        }
    }

    return;
};

export const loop = (type: TTokenType, tokenizer: TTokenizer) => (src: string, pos: number, ctx: IContext) => {
    const children = [];
    const end = src.length;

    let length = 0;

    while (length < end) {
        const tok = tokenizer(src, pos, ctx);

        if (tok) {
            children.push(tok);
            length += tok.len || 0;
        } else {
            if (!children.length) {
                return;
            }
        }
    }

    return token(type, children, pos, length);
};
