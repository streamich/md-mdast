import {TTokenType, TAnyToken, TTokenizer} from './types';

// tslint:disable no-any
export const token = <T extends TAnyToken>(type: TTokenType, children?: any, pos?: number, len?: number): T => {
    if (children instanceof Array) {
        if (children.length === 1) {
            // tslint:disable no-parameter-reassignment
            children = children[0];
        }
    }

    const tok = {
        type,
        children,
        pos,
        len,
    } as T;

    return tok;
};

export const regex = <T extends TAnyToken>(
    type: TTokenType,
    reg: string | RegExp,
    flags: string,
    onToken: (token: TAnyToken, matches: any, src: string, pos: number, ctx: IContext) => T
): TTokenizer<T> => (src: string, pos: number, ctx: IContext): TTokenizerResult<T> => {
    const matches = src.substr(pos).match(reg instanceof RegExp ? reg : new RegExp('^' + reg + '', flags));

    if (!matches) {
        return;
    }

    let tok = token<T>(type, undefined, pos, matches[0].length);

    if (onToken) {
        tok = onToken(tok, matches, src, pos, ctx);
    }

    return tok;
};

export const first = <T extends TAnyToken>(tokenizers: TTokenizer<T>[]): TTokenizer<T> => {
    return function (this: IParser, eat: TEat<T>, value: string) {
        for (const tokenizer of tokenizers) {
            const tok = tokenizer(src, pos, ctx);

            if (tok) {
                return tok;
            }
        }

        return;
    };
};

export const loop = (tokenizer: TTokenizer<TAnyToken>) => (
    src: string,
    pos: number,
    ctx: IContext
): TAnyToken | TAnyToken[] | null | undefined => {
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

    if (children.length === 1) {
        return children[0];
    } else {
        return children;
    }
};
