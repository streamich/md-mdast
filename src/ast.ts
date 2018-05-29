export type TTokenType = 'Parent' | 'Inline' | 'Table' | 'Icon' | 'Link' | 'Whitespace';

export interface IToken {
    type: TTokenType;
    children?: IToken;
    pos?: number;
    len?: number;
    src?: string;
}

export interface IIcon extends IToken {
    type: 'Icon';
    emoji: string;
}

export interface ILink extends IToken {
    type: 'Link';
    title: string;
    url: string;
}

export interface IWhitespace extends IToken {
    type: 'Whitespace';
}

export type TAnyToken = IToken | ILink | IIcon | IWhitespace;
