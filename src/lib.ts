import {TNode, TNodeType} from './ast';

// tslint:disable no-any
export const token = (type: TNodeType, children?: any, pos?: number, len?: number, src?: string): TNode => {
    const tok: TNode = {
        type,
        children,
        pos,
        len,
    };

    if (process.env.NODE_ENV !== 'production') {
        if (src && typeof pos === 'number') {
            tok.src = src.substr(pos, len);
        }
    }

    return tok;
};
