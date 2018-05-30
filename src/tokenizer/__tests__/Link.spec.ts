import Link from '../Link';
import {ILink} from '../../ast';

describe('Link', () => {
    test('exists', () => {
        expect(typeof Link).toBe('function');
        expect(typeof Link()).toBe('function');
    });

    test('matches a link', () => {
        const tokenizer = Link();
        const tok = tokenizer('[hello](http://example.com) more text', 0, {} as any) as ILink;

        expect(tok.type).toBe('link');
        expect(tok.url).toBe('http://example.com');
    });
});
