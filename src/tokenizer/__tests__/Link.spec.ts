import link from '../link';
import {ILink} from '../../ast';

describe('link tokenizer', () => {
    test('exists', () => {
        expect(typeof link).toBe('function');
        expect(typeof link()).toBe('function');
    });

    test('matches a link', () => {
        const tokenizer = link();
        const tok = tokenizer('[hello](http://example.com) more text', 0, {} as any) as ILink;

        expect(tok.type).toBe('link');
        expect(tok.url).toBe('http://example.com');
    });
});
