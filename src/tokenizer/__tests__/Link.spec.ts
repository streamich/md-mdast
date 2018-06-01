import {token} from '../../createParser';
import link from '../link';

const tokenizer = link();

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
