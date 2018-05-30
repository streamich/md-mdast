export type TTokenType = 'root' | 'inline' | 'text' | 'icon' | 'link' | 'whitespace';

export interface IToken {
    type: TTokenType;
    children?: IToken;
    pos?: number;
    len?: number;
    src?: string;
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
}

export type TAnyToken = IToken | ILink | IIcon | IWhitespace;
