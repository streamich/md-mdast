import {token, first} from '../lib';
import Icon from '../tokenizer/Icon';

describe('lib', () => {
    describe('node()', () => {
        test('returns a token', () => {
            const tok = token('Parent', 'children', 1, 2);

            expect(tok).toMatchObject({
                type: 'Parent',
                children: 'children',
                pos: 1,
                len: 2,
            });
        });
    });

    describe('first()', () => {
        test('exists', () => {
            expect(typeof first).toBe('function');
        });

        test('works', () => {
            const tokenizer = first([(() => undefined) as any, Icon]);

            const tok = tokenizer(':smile:', 0, {} as any) as any;

            expect(typeof tok).toBe('object');
            expect(tok.type).toBe('Icon');
        });
    });
});
