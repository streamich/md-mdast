export type TTokenType = 'Parent' | 'Inline' | 'Table' | 'Icon';

export interface TToken {
    type: TTokenType;
    children?: TToken | string;
    pos?: number;
    len?: number;
    src?: string;
}

export type TAnyNode = TToken;
