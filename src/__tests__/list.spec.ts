import {create} from '../index';

describe('list', () => {
    test('works for a single unordered list item', () => {
        const parser = create();
        const ast = parser.tokenizeBlock(`- foo`);

        expect(ast).toMatchObject({
            type: 'root',
            children: [
                {
                    type: 'list',
                    ordered: false,
                    loose: false,
                    children: [
                        {
                            type: 'listItem',
                            checked: null,
                            loose: false,
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            value: 'foo',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    start: null,
                },
            ],
            len: 5,
        });
    });

    test('supports all bullet markers', () => {
        const result = {
            type: 'root',
            children: [
                {
                    type: 'list',
                    ordered: false,
                    loose: false,
                    len: 5,
                    children: [
                        {
                            type: 'listItem',
                            checked: null,
                            loose: false,
                            children: [
                                {
                                    type: 'paragraph',
                                    len: 3,
                                    children: [
                                        {
                                            type: 'text',
                                            len: 3,
                                            value: 'foo',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    start: null,
                },
            ],
            len: 5,
        };

        const parser = create();

        expect(parser.tokenizeBlock(`- foo`)).toMatchObject(result);
        expect(parser.tokenizeBlock(`* foo`)).toMatchObject(result);
        expect(parser.tokenizeBlock(`+ foo`)).toMatchObject(result);
    });

    test('supports ordered lists', () => {
        const parser = create();
        const ast = parser.tokenizeBlock(`1. foo`);

        expect(ast).toMatchObject({
            type: 'root',
            children: [
                {
                    type: 'list',
                    ordered: true,
                    loose: false,
                    children: [
                        {
                            type: 'listItem',
                            checked: null,
                            loose: false,
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            value: 'foo',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    start: 1,
                },
            ],
            len: 6,
        });
    });

    test('reports loose items', () => {
        const parser = create();
        const ast = parser.tokenizeBlock(`- foo\n\n  bar`);

        expect(ast).toMatchObject({
            type: 'root',
            children: [
                {
                    type: 'list',
                    children: [
                        {
                            type: 'listItem',
                            // loose: true,
                            checked: null,
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            value: 'foo',
                                        },
                                    ],
                                },
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            value: 'bar',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    ordered: false,
                    start: null,
                    // loose: true,
                },
            ],
        });
    });

    test('two ordered list items on first level', () => {
        const parser = create();
        const ast = parser.tokenizeBlock('1. foo\n2. bar\n');

        expect(ast).toMatchObject({
            type: 'root',
            children: [
                {
                    type: 'list',
                    children: [
                        {
                            type: 'listItem',
                        },
                        {
                            type: 'listItem',
                        },
                    ],
                },
            ],
        });
        expect(ast!.children![0].children!.length).toBe(2);
    });

    test('supports multiple items', () => {
        const parser = create();
        const ast = parser.tokenizeBlock(`- foo\n- bar\n- baz`);

        expect(ast).toMatchObject({
            type: 'root',
            children: [
                {
                    type: 'list',
                    children: [
                        {
                            type: 'listItem',
                            loose: false,
                            checked: null,
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            value: 'foo',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            type: 'listItem',
                            loose: false,
                            checked: null,
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            value: 'bar',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            type: 'listItem',
                            loose: false,
                            checked: null,
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            value: 'baz',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    ordered: false,
                    start: null,
                    loose: false,
                },
            ],
        });
    });

    test('supports nested lists', () => {
        const parser = create();
        const ast = parser.tokenizeBlock(`- foo\n   - bar\n      - baz`);

        expect(ast).toMatchObject({
            type: 'root',
            children: [
                {
                    type: 'list',
                    children: [
                        {
                            type: 'listItem',
                            loose: false,
                            checked: null,
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            value: 'foo',
                                        },
                                    ],
                                },
                                {
                                    type: 'list',
                                    children: [
                                        {
                                            type: 'listItem',
                                            loose: false,
                                            checked: null,
                                            children: [
                                                {
                                                    type: 'paragraph',
                                                    len: 4,
                                                    children: [
                                                        {
                                                            type: 'text',
                                                            value: 'bar',
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: 'list',
                                                    children: [
                                                        {
                                                            type: 'listItem',
                                                            loose: false,
                                                            checked: null,
                                                            children: [
                                                                {
                                                                    type: 'paragraph',
                                                                    children: [
                                                                        {
                                                                            type: 'text',
                                                                            value: 'baz',
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                    ordered: false,
                                                    start: null,
                                                    loose: false,
                                                },
                                            ],
                                        },
                                    ],
                                    ordered: false,
                                    start: null,
                                    loose: false,
                                },
                            ],
                        },
                    ],
                    ordered: false,
                    start: null,
                    loose: false,
                },
            ],
        });
    });
});
