import {token} from '../../createParser';
import text from '../text';

const tokenizer = text();

const runTokenizer = (tk, value) => {
    // tslint:disable no-unnecessary-callback-wrapper
    const eat = (subvalue, type, children, overrides) => token(subvalue, type, children, overrides);

    return tk.call({}, eat, value);
};

describe('text tokenizer', () => {
    test('exists', () => {
        expect(typeof text).toBe('function');
        expect(typeof text()).toBe('function');
    });

    test('matches highlighted text', () => {
        const tok = runTokenizer(tokenizer, 'any text is matched');

        expect(tok).toMatchObject({
            type: 'text',
            value: 'any text is matched',
        });
    });
});
