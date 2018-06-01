export type TTokenType = 'root' | 'inlineCode' | 'text' | 'icon' | 'highlight' | 'link' | 'whitespace' | 'text';

export interface IToken {
    type: TTokenType;
    len: number;
    children?: IToken;
    value?: string;
}

export interface IInlineCode extends IToken {
    type: 'inlineCode';
    value: string;
    wrap: string;
}

export interface IIcon extends IToken {
    type: 'icon';
    emoji: string;
}

export interface IHighlight extends IToken {
    type: 'highlight';
    children: TChildrenToken<any>;
}

export interface ILink extends IToken {
    type: 'link';
    title: string;
    url: string;
}

export interface IWhitespace extends IToken {
    type: 'whitespace';
    length: number;
}

export interface IText extends IToken {
    type: 'text';
    value: string;
}

export type TInlineToken = IInlineCode | ILink | IIcon | IHighlight | IWhitespace;
export type TAnyToken = IToken | TInlineToken;

export type TNullableToken<T extends TAnyToken> = T | undefined | null;
export type TChildrenToken<T extends TAnyToken> = TNullableToken<T> | T[];
export type TChildrenInline = TChildrenToken<TInlineToken>;
export type TEat<T extends TAnyToken> = (
    subvalue: string,
    type: TTokenType,
    children?: TNullableToken<any>,
    overrides?: Partial<TAnyToken>
) => T;
export type TTokenizer<T extends TAnyToken> = (this: IParser, eat: TEat<T>, value: string) => TNullableToken<T>;

export interface IParser {
    tokenizeInline(value: string): TChildrenToken<any>;
}
