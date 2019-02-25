import {IRoot, TAnyToken} from './types';

export interface DocumentDefinitions {
    [id: string]: number;
}

export interface DocumentFootnotes {
    [id: string]: number;
}

export type TNode = (IRoot | TAnyToken) & {children?: number[]};

export interface Document {
    nodes: TNode[];
    contents: number[];
    definitions: DocumentDefinitions;
    footnotes: DocumentFootnotes;
}

export type Structure = (mdast: IRoot | TAnyToken) => Document;

export const structure: Structure = mdast => {
    const nodes: TNode[] = [];
    const contents: number[] = [];
    const definitions: DocumentDefinitions = {};
    const footnotes: DocumentFootnotes = {};
    const doc = {
        nodes,
        contents,
        definitions,
        footnotes,
    };

    const traverse = (token: IRoot | TAnyToken): number => {
        const index = nodes.length;
        const node = {...token} as TNode;
        nodes.push(node);

        if (token.children) {
            if (token.children instanceof Array) {
                node.children = (token.children as any).map(traverse).filter((i: number) => i > -1);
            } else {
                const childIndex = traverse(token.children);
                if (childIndex > -1) {
                    node.children = [childIndex] as any;
                }
            }
        }

        switch (node.type) {
            case 'heading':
                contents.push(index);
                return index;
            case 'definition':
                definitions[node.identifier] = index;
                return -1;
            case 'footnoteDefinition':
                footnotes[node.identifier] = index;
                return -1;
            default:
                return index;
        }
    };

    if (mdast) {
        traverse(mdast);
    }

    return doc;
};
