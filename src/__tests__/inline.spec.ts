import {create} from '../index';

describe('Inline Markdown', () => {
    test('icons in text', () => {
        const parser = create();
        const ast = parser.tokenizeInline('Hello :world:!');

        expect(ast).toEqual([
            {type: 'text', len: 6, value: 'Hello '},
            {type: 'icon', len: 7, emoji: 'world'},
            {type: 'text', len: 1, value: '!'},
        ]);
    });

    test('multiple icons', () => {
        const parser = create();
        const ast = parser.tokenizeInline(':smile: foo ::+1:: bar ::tada::');

        expect(ast).toEqual([
            {type: 'icon', len: 7, emoji: 'smile'},
            {type: 'text', len: 5, value: ' foo '},
            {type: 'icon', len: 6, emoji: '+1'},
            {type: 'text', len: 5, value: ' bar '},
            {type: 'icon', len: 8, emoji: 'tada'},
        ]);
    });

    test('highlighted text', () => {
        const parser = create();
        const ast = parser.tokenizeInline('I ==really== want this!');

        expect(ast).toEqual([
            {type: 'text', len: 2, value: 'I '},
            {
                type: 'highlight',
                len: 10,
                children: {type: 'text', len: 6, value: 'really'},
            },
            {type: 'text', len: 11, value: ' want this!'},
        ]);
    });

    test('tokenizes a link', () => {
        const parser = create();
        const ast = parser.tokenizeInline('Click [me](http://example.com)!');

        expect(ast).toEqual([
            {type: 'text', len: 6, value: 'Click '},
            {type: 'link', len: 24, children: {type: 'text', len: 2, value: 'me'}, url: 'http://example.com'},
            {type: 'text', len: 1, value: '!'},
        ]);
    });

    test('tokenizes link text', () => {
        const parser = create();
        const ast = parser.tokenizeInline('Click [this ==higlighted== text :smile:](http://example.com)!');

        expect(ast).toEqual([
            {type: 'text', len: 6, value: 'Click '},
            {
                type: 'link',
                len: 54,
                children: [
                    {
                        type: 'text',
                        len: 5,
                        value: 'this ',
                    },
                    {
                        type: 'highlight',
                        len: 14,
                        children: {
                            type: 'text',
                            len: 10,
                            value: 'higlighted',
                        },
                    },
                    {
                        type: 'text',
                        len: 6,
                        value: ' text ',
                    },
                    {
                        type: 'icon',
                        len: 7,
                        emoji: 'smile',
                    },
                ],
                url: 'http://example.com',
            },
            {
                type: 'text',
                len: 1,
                value: '!',
            },
        ]);
    });
});
