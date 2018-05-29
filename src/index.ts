import {TToken} from './ast';
import {loop, first} from './lib';

export interface IContext {
    off?: number;
    parser: any;
}

export type TTokenizer = (src: string, pos: number, ctx: IContext) => TToken | undefined | null;

export interface IcreateParserOptions {
    inline: TTokenizer[];
    block: TTokenizer[];
}

export const createParser = ({inline}: IcreateParserOptions) => {
    const parser: any = {};
    const inlineTokenizer = loop('Inline', first(inline));

    parser.inline = (str: string) =>
        inlineTokenizer(str, 0, {
            parser,
        });

    return parser;
};
