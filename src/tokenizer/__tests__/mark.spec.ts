import {token} from '../../createParser';
import mark from '../mark';

const tokenizer = mark;

const runTokenizer = (tk, value) => {
    // tslint:disable no-unnecessary-callback-wrapper
    const eat = (subvalue, type, children, overrides) => token(subvalue, type, children, overrides);

    return tk.call(
        {
            tokenizeInline: (val: string) => val,
        },
        eat,
        value
    );
};

describe('highlight tokenizer', () => {
    test('exists', () => {
        expect(typeof mark).toBe('function');
        expect(typeof mark).toBe('function');
    });

    test('matches highlighted text', () => {
        const tok = runTokenizer(tokenizer, '==lol==');

        expect(tok).toMatchObject({
            type: 'mark',
            children: 'lol',
        });
    });
});
