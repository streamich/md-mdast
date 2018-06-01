export type TTokenType = 'root' | 'inline' | 'text' | 'icon' | 'link' | 'whitespace';

export interface IToken {
    type: TTokenType;
    children?: IToken;
    len?: number;
    value?: string;
}

export interface IIcon extends IToken {
    type: 'icon';
    emoji: string;
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

export type TAnyToken = IToken | ILink | IIcon | IWhitespace;

export type TNullableToken<T extends TAnyToken> = T | undefined | null;
export type TChildrenToken<T extends TAnyToken> = TNullableToken<T> | T[];
export type TEat<T extends TAnyToken> = (subvalue: string, type: TTokenType, children?: TNullableToken<any>, overrides?: Partial<TAnyToken>) => T;
export type TTokenizer<T extends TAnyToken> = (this: IParser, eat: TEat<T>, value: string) => TNullableToken<T>;

export interface IParser {
    tokenizeInline(value: string): TChildrenToken<any>;
}
