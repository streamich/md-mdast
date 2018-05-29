import {TAnyToken} from './ast';
import {loop, first} from './lib';

export interface IContext {
    off?: number;
    parser: any;
}

export type TTokenizerResult<T extends TAnyToken> = T | undefined | null;
export type TTokenizer<T extends TAnyToken> = (src: string, pos: number, ctx: IContext) => TTokenizerResult<T>;

export interface IcreateParserOptions {
    inline: TTokenizer<any>[];
    block: TTokenizer<any>[];
}

const createParser = ({inline}: IcreateParserOptions) => {
    const parser: any = {};
    const inlineTokenizer = loop('Inline', first(inline));

    parser.inline = (str: string) =>
        inlineTokenizer(str, 0, {
            parser,
        });

    return parser;
};

export default createParser;
