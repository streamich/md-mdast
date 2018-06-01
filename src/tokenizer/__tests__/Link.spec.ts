import {token} from '../../createParser';
import link from '../link';

const tokenizer = link();

const runTokenizer = (tk, value) => {
    const eat = (subvalue, type, children, overrides) => {
        const tok = token(type, children);

        if (overrides) {
            Object.assign(tok, overrides);
        }

        return tok;
    };

    return tk.call({}, eat, value);
};

describe('link tokenizer', () => {
    test('exists', () => {
        expect(typeof link).toBe('function');
        expect(typeof link()).toBe('function');
    });

    test('matches a link', () => {
        const tok = runTokenizer(tokenizer, '[hello](http://example.com) more text');

        expect(tok).toMatchObject({
            type: 'link',
            url: 'http://example.com',
        });
    });
});
