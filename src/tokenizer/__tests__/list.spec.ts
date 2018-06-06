import {token} from '../../createParser';
import list from '../list';

const tokenizer = list;

const runTokenizer = (tk, value) => {
    // tslint:disable no-unnecessary-callback-wrapper
    const eat = (subvalue, type, children, overrides) => token(subvalue, type, children, overrides);

    return tk.call(
        {
            tokenizeChildBlock: (val: string) => val,
        },
        eat,
        value
    );
};

describe('list tokenizer', () => {
    test('exists', () => {
        expect(typeof list).toBe('function');
    });

    test('return token', () => {
        const tok = runTokenizer(tokenizer, ' - item 1\n    - item 2\n  - item 3');

        expect(typeof tok).toBe('object');
        expect(tok.type).toBe('list');
    });
});
