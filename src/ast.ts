export type TNodeType = 'Parent' | 'Table';

export interface TNode {
    type: TNodeType;
    children?: TNode | string;
    pos?: number;
    len?: number;
    src?: string;
}

export type TAnyNode = TNode;
