import { TNode, TNodeType } from "./ast";


export const token = (type: TNodeType, children?: any, pos?: number, len?: number, src?: string): TNode => {
    const token: TNode = {
        type,
        children,
        pos,
        len,
    };

    if (process.env.NODE_ENV !== 'production') {
        if (src && (typeof pos === 'number')) {
            token.src = src.substr(pos, len);
        }
    }

    return token;
};
