import {TToken, TTokenType} from './ast';
import {TTokenizer, IContext} from '.';

// tslint:disable no-any
export const token = (type: TTokenType, children?: any, pos?: number, len?: number): TToken => {
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
