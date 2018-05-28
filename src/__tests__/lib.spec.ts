import {token} from '../lib';

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
});
