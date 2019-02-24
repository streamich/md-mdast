import {IRoot, IFootnoteDefinition, TAnyToken} from './types';

export interface DocumentDefinitions {
    [id: string]: number;
}

export interface DocumentFootnotes {
    [id: string]: IFootnoteDefinition;
}

export type TNode = (IRoot | TAnyToken) & {children?: null | number | number[]};

export interface Document {
    nodes: TNode[];
    contents: number[];
    definitions: DocumentDefinitions;
    footnotes: DocumentFootnotes;
    footnoteOrder: string[];
}

export type Structure = (mdast: IRoot | TAnyToken) => Document;

export const structure: Structure = mdast => {
    const nodes: TNode[] = [];
    const contents: number[] = [];
    const definitions: DocumentDefinitions = {};
    const footnotes: DocumentFootnotes = {};
    const footnoteOrder: string[] = [];
    const doc = {
        nodes,
        contents,
        definitions,
        footnotes,
        footnoteOrder,
    };

    const traverse = (token: IRoot | TAnyToken) => {
        const index = nodes.length;
        const node = {...token} as TNode;
        nodes.push(node);

        if (token.children) {
            node.children = token.children instanceof Array ? token.children.map(traverse) : traverse(token.children);
        }

        switch (node.type) {
            case 'heading':
                contents.push(index);
                break;
            case 'definition':
                definitions[node.identifier] = index;
                break;
        }

        return index;
    };

    if (mdast) {
        traverse(mdast);
    }

    return doc;
};
