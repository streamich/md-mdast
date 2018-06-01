import {token} from '../../createParser';
import highlight from '../highlight';

const tokenizer = highlight();

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
        expect(typeof highlight).toBe('function');
        expect(typeof highlight()).toBe('function');
    });

    test('matches highlighted text', () => {
        const tok = runTokenizer(tokenizer, '==lol==');

        expect(tok).toMatchObject({
            type: 'highlight',
            children: 'lol',
        });
    });
});
