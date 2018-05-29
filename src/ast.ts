export type TTokenType = 'Parent' | 'Inline' | 'Table' | 'Icon' | 'Link';

export interface TToken {
    type: TTokenType;
    children?: TToken;
    pos?: number;
    len?: number;
    src?: string;
}

export interface TIcon extends TToken {
    type: 'Link';
    emoji: string;
}

export interface TLink extends TToken {
    type: 'Link';
    title: string;
    url: string;
}

export type TAnyToken = TToken | TLink | TIcon;
