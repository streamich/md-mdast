export type TTokenTypeBlock =
    | 'root'
    | 'newline'
    | 'code'
    | 'math'
    | 'thematicBreak'
    | 'heading'
    | 'blockquote'
    | 'paragraph';

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
    | 'mark'
    | 'handle'
    | 'underline'
    | 'break'
    | 'icon'
    | 'link'
    | 'image'
    | 'whitespace'
    | 'text';

export type TTokenType = 'root' | TTokenTypeBlock | TTokenTypeInline;

export interface IToken {
    type: TTokenType;
    len: number;
    children?: TChildrenToken<TAnyToken>;
    value?: string;
}

export interface IRoot extends IToken {
    type: 'root';
    children: TChildrenBlock;
}

export interface INewline extends IToken {
    type: 'newline';
}

export interface ICode extends IToken {
    type: 'code';
    value: string;
    lang: string | null;
    meta?: string | null;
}

export interface IMath extends IToken {
    type: 'math';
    value: string;
}

export interface IThematicBreak extends IToken {
    type: 'thematicBreak';
    value: string;
}

export interface IHeading extends IToken {
    type: 'heading';
    depth: number;
    children: TChildrenInline;
}

export interface IBlockquote extends IToken {
    type: 'blockquote';
    children: TChildrenBlock | TChildrenInline;
}

export interface IParagraph extends IToken {
    type: 'paragraph';
    children: TChildrenInline;
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

export interface IMark extends IToken {
    type: 'mark';
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

export interface IBreak extends IToken {
    type: 'break';
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

export interface IImage extends IToken {
    type: 'image';
    title: string;
    alt: string;
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

export type TBlockToken = INewline | ICode | IMath | IThematicBreak | IHeading | IBlockquote | IParagraph;

export type TInlineToken =
    | IInlineCode
    | IStrong
    | IEmphasis
    | IDelete
    | IInlineMath
    | IFootnoteReference
    | ILinkReference
    | ILink
    | IImage
    | IInlineLink
    | ISup
    | ISub
    | IMark
    | IHandle
    | IUnderline
    | IBreak
    | IIcon
    | IText
    | IWhitespace;

export type TAnyToken = TBlockToken | TInlineToken;

export type TNullableToken<T extends TAnyToken> = T | undefined | null;
export type TChildrenToken<T extends TAnyToken> = TNullableToken<T> | T[];

export type TChildrenBlock = TChildrenToken<TBlockToken>;
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
    tokenizeBlock(value: string): IRoot | undefined | null;
    tokenizeChildBlock(value: string): TChildrenBlock | TChildrenInline;
}
