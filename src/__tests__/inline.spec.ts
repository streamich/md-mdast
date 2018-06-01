import {create} from '../index';

describe('Inline Markdown', () => {
    test('icons in text', () => {
        const parser = create();
        const ast = parser.tokenizeInline('Hello :world:!');

        expect(ast).toMatchObject([
            {type: 'text', len: 6, value: 'Hello '},
            {type: 'icon', len: 7, emoji: 'world'},
            {type: 'text', len: 1, value: '!'},
        ]);
    });

    test('multiple icons', () => {
        const parser = create();
        const ast = parser.tokenizeInline(':smile: foo ::+1:: bar ::tada::');

        expect(ast).toMatchObject([
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

        expect(ast).toMatchObject([
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

        expect(ast).toMatchObject([
            {type: 'text', len: 6, value: 'Click '},
            {type: 'link', len: 24, children: {type: 'text', len: 2, value: 'me'}, url: 'http://example.com'},
            {type: 'text', len: 1, value: '!'},
        ]);
    });

    test('tokenizes link text', () => {
        const parser = create();
        const ast = parser.tokenizeInline('Click [this ==higlighted== text :smile:](http://example.com)!');

        expect(ast).toMatchObject([
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

    describe('inline code', () => {
        test('works', () => {
            const parser = create();
            const ast = parser.tokenizeInline('See this: `console.log(123)`');

            expect(ast).toMatchObject([
                {type: 'text', len: 10, value: 'See this: '},
                {type: 'inlineCode', len: 18, value: 'console.log(123)', wrap: '`'},
            ]);
        });

        test('supports double back-ticks', () => {
            const parser = create();
            const ast = parser.tokenizeInline('See this: ``console.log(123)``');

            expect(ast).toMatchObject([
                {type: 'text', len: 10, value: 'See this: '},
                {type: 'inlineCode', len: 20, value: 'console.log(123)', wrap: '``'},
            ]);
        });
    });

    describe('emphasis', () => {
        const result = [
            {type: 'text', len: 6, value: 'Hello '},
            {
                type: 'emphasis',
                len: 7,
                children: {type: 'text', len: 5, value: 'world'},
            },
            {type: 'text', len: 2, value: '! '},
            {
                type: 'emphasis',
                len: 4,
                children: {type: 'text', len: 2, value: 'OK'},
            },
        ];

        test('asterisk', () => {
            const parser = create();
            const ast = parser.tokenizeInline('Hello *world*! *OK*');

            expect(ast).toMatchObject(result);
        });

        test('underscore', () => {
            const parser = create();
            const ast = parser.tokenizeInline('Hello _world_! _OK_');

            expect(ast).toMatchObject(result);
        });
    });

    describe('strong', () => {
        const result = [
            {type: 'text', len: 6, value: 'Hello '},
            {
                type: 'strong',
                len: 9,
                children: {type: 'text', len: 5, value: 'world'},
            },
            {type: 'text', len: 2, value: '! '},
            {
                type: 'strong',
                len: 6,
                children: {type: 'text', len: 2, value: 'OK'},
            },
        ];

        test('asterisk', () => {
            const parser = create();
            const ast = parser.tokenizeInline('Hello **world**! **OK**');

            expect(ast).toMatchObject(result);
        });

        test('underscore', () => {
            const parser = create();
            const ast = parser.tokenizeInline('Hello __world__! __OK__');

            expect(ast).toMatchObject(result);
        });

        test('together with emphasis', () => {
            const parser = create();
            const ast = parser.tokenizeInline('*em1* **strong** *em2*');

            expect(ast).toMatchObject([
                {
                    type: 'emphasis',
                    len: 5,
                    children: {type: 'text', len: 3, value: 'em1'},
                },
                {type: 'text', len: 1, value: ' '},
                {
                    type: 'strong',
                    len: 10,
                    children: {type: 'text', len: 6, value: 'strong'},
                },
                {type: 'text', len: 1, value: ' '},
                {
                    type: 'emphasis',
                    len: 5,
                    children: {type: 'text', len: 3, value: 'em2'},
                },
            ]);
        });

        test('bold inside italic', () => {
            const parser = create();
            const ast = parser.tokenizeInline('*italic __bold__*');

            expect(ast).toMatchObject({
                type: 'emphasis',
                len: 17,
                children: [
                    {
                        type: 'text',
                        len: 7,
                        value: 'italic ',
                    },
                    {
                        type: 'strong',
                        len: 8,
                        children: {
                            type: 'text',
                            len: 4,
                            value: 'bold',
                        },
                    },
                ],
            });
        });

        test('italic inside bold', () => {
            const parser = create();
            const ast = parser.tokenizeInline('**bold _italic_**');

            expect(ast).toMatchObject({
                type: 'strong',
                len: 17,
                children: [
                    {
                        type: 'text',
                        len: 5,
                        value: 'bold ',
                    },
                    {
                        type: 'emphasis',
                        len: 8,
                        children: {
                            type: 'text',
                            len: 6,
                            value: 'italic',
                        },
                    },
                ],
            });
        });
    });

    describe('delete text', () => {
        test('works', () => {
            const parser = create();
            const ast = parser.tokenizeInline('~~123~~');

            expect(ast).toMatchObject({
                type: 'delete',
                children: {
                    type: 'text',
                    value: '123',
                },
            });
        });

        test('parses inline text', () => {
            const parser = create();
            const ast = parser.tokenizeInline('~~*1*~~');

            expect(ast).toMatchObject({
                type: 'delete',
                len: 7,
                children: {
                    type: 'emphasis',
                    len: 3,
                    children: {
                        type: 'text',
                        len: 1,
                        value: '1',
                    },
                },
            });
        });
    });

    describe('math', () => {
        test('works', () => {
            const parser = create();
            const ast = parser.tokenizeInline('$$1+1$$');

            expect(ast).toMatchObject({
                type: 'inlineMath',
                value: '1+1',
            });
        });

        test('in text', () => {
            const parser = create();
            const ast = parser.tokenizeInline('Hey, look $$f(x) = Y ^ 2$$ is a real function.');

            expect(ast).toMatchObject([
                {type: 'text', len: 10, value: 'Hey, look '},
                {type: 'inlineMath', len: 16, value: 'f(x) = Y ^ 2'},
                {type: 'text', len: 20, value: ' is a real function.'},
            ]);
        });

        test('emphasized', () => {
            const parser = create();
            const ast = parser.tokenizeInline('*$$123$$*');

            expect(ast).toMatchObject({
                type: 'emphasis',
                len: 9,
                children: {type: 'inlineMath', len: 7, value: '123'},
            });
        });
    });

    describe('footnoteReference', () => {
        test('works', () => {
            const parser = create();
            const ast = parser.tokenizeInline('[^1]');

            expect(ast).toMatchObject({
                type: 'footnoteReference',
                value: '1',
            });
        });

        test('end of sentence', () => {
            const parser = create();
            const ast = parser.tokenizeInline('To be, or not to be.[^my-ref]');

            expect(ast).toMatchObject([
                {type: 'text', len: 20, value: 'To be, or not to be.'},
                {type: 'footnoteReference', len: 9, value: 'my-ref'},
            ]);
        });
    });
});
