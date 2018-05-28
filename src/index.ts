import {TToken} from './ast';

export interface IContext {
    off: number;
}

export type TTokenizer = (src: string, pos: number, ctx: IContext) => TToken | undefined | null;
