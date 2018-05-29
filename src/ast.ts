export type TTokenType = 'Parent' | 'Inline' | 'Table' | 'Icon' | 'Link';

export interface TToken {
    type: TTokenType;
    children?: TToken;
    pos?: number;
    len?: number;
    src?: string;
}

export interface TLink extends TToken {
    type: 'Link';
    title: string;
    url: string;
}

export type TAnyNode = TToken | TLink;
