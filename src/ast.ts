export type TTokenType = 'Parent' | 'Inline' | 'Table' | 'Icon' | 'Link' | 'Whitespace';

export interface TToken {
    type: TTokenType;
    children?: TToken;
    pos?: number;
    len?: number;
    src?: string;
}

export interface TIcon extends TToken {
    type: 'Icon';
    emoji: string;
}

export interface TLink extends TToken {
    type: 'Link';
    title: string;
    url: string;
}

export interface IWhitespace extends TToken {
    type: 'Whitespace';
}

export type TAnyToken = TToken | TLink | TIcon | IWhitespace;
