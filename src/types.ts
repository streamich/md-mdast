export type TTokenTypeInline =
    | 'inlineCode'
    | 'strong'
    | 'emphasis'
    | 'delete'
    | 'inlineMath'
    | 'footnoteReference'
    | 'linkReference'
    | 'inlineLink'
    | 'sup'
    | 'sub'
    | 'highlight'
    | 'handle'
    | 'underline'
    | 'icon'
    | 'link'
    | 'whitespace'
    | 'text';

export type TTokenType = 'root' | TTokenTypeInline;

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

export interface IStrong extends IToken {
    type: 'strong';
}

export interface IEmphasis extends IToken {
    type: 'emphasis';
}

export interface IDelete extends IToken {
    type: 'delete';
}

export interface IInlineMath extends IToken {
    type: 'inlineMath';
}

export interface IFootnoteReference extends IToken {
    type: 'footnoteReference';
}

export interface ILinkReference extends IToken {
    type: 'linkReference';
    identifier: string;
    referenceType: 'shortcut' | 'collapsed' | 'full';
}

export interface IInlineLink extends IToken {
    type: 'inlineLink';
    value: string;
}

export interface ISup extends IToken {
    type: 'sup';
}

export interface ISub extends IToken {
    type: 'sub';
}

export interface IHighlight extends IToken {
    type: 'highlight';
    children: TChildrenToken<any>;
}

export interface IHandle extends IToken {
    type: 'handle';
    value: string;
    prefix: '#' | '~' | '@';
}

export interface IUnderline extends IToken {
    type: 'underline';
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

export interface IText extends IToken {
    type: 'text';
    value: string;
}

export interface IWhitespace extends IToken {
    type: 'whitespace';
    length: number;
}

export type TInlineToken =
    | IInlineCode
    | IStrong
    | IEmphasis
    | IDelete
    | IInlineMath
    | IFootnoteReference
    | ILinkReference
    | ILink
    | IInlineLink
    | ISup
    | ISub
    | IHighlight
    | IHandle
    | IUnderline
    | IIcon
    | IText
    | IWhitespace;

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
