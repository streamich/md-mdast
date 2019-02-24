import {create} from '..';
import {structure} from '../structure';

describe('structure', () => {
    it('exists', () => {
        expect(typeof structure).toBe('function');
    });

    it('returns correct document shape', () => {
        const parser = create();
        const mdast = parser.tokenizeBlock('foo');
        const doc = structure(mdast!);

        expect(mdast).toMatchObject({
            type: 'root',
            children: {
                type: 'paragraph',
                children: {
                    type: 'text',
                    value: 'foo',
                },
            },
        });
        expect(doc).toMatchObject({
            nodes: [
                {
                    type: 'root',
                    children: 1,
                },
                {
                    type: 'paragraph',
                    children: 2,
                },
                {
                    type: 'text',
                    value: 'foo',
                },
            ],
            contents: [],
            definitions: {},
            footnotes: {},
            footnoteOrder: [],
        });
    });

    it('adds titles to contents list', () => {
        const parser = create();
        const mdast = parser.tokenizeBlock('# Title\n' + '\n' + '## Subtitle\n');
        const doc = structure(mdast!);

        expect(mdast).toMatchObject({
            type: 'root',
            children: [
                {
                    type: 'heading',
                    depth: 1,
                    children: {
                        type: 'text',
                        value: 'Title',
                    },
                },
                {
                    type: 'heading',
                    depth: 2,
                    children: {
                        type: 'text',
                        value: 'Subtitle',
                    },
                },
            ],
        });
        expect(doc).toMatchObject({
            nodes: [
                {
                    type: 'root',
                    children: [1, 3],
                },
                {
                    type: 'heading',
                    children: 2,
                },
                {
                    type: 'text',
                    value: 'Title',
                },
                {
                    type: 'heading',
                    children: 4,
                },
                {
                    type: 'text',
                    value: 'Subtitle',
                },
            ],
            contents: [1, 3],
            definitions: {},
            footnotes: {},
            footnoteOrder: [],
        });
    });

    it('structure link definitions', () => {
        const parser = create();
        const mdast = parser.tokenizeBlock('[Click me][click]\n' + '\n' + '[click]: https://github.com/');
        const doc = structure(mdast!);

        expect(mdast).toMatchObject({
            type: 'root',
            children: [
                {
                    type: 'paragraph',
                    children: {
                        type: 'linkReference',
                        children: {
                            type: 'text',
                            value: 'Click me',
                        },
                        identifier: 'click',
                        referenceType: 'full',
                    },
                },
                {
                    type: 'definition',
                    identifier: 'click',
                    title: null,
                    url: 'https://github.com/',
                },
            ],
        });
        expect(doc).toMatchObject({
            nodes: [
                {
                    type: 'root',
                    children: [1, 4],
                },
                {
                    type: 'paragraph',
                    children: 2,
                },
                {
                    type: 'linkReference',
                    children: 3,
                    identifier: 'click',
                    referenceType: 'full',
                },
                {
                    type: 'text',
                    value: 'Click me',
                },
                {
                    type: 'definition',
                    identifier: 'click',
                    title: null,
                    url: 'https://github.com/',
                },
            ],
            contents: [],
            definitions: {
                click: 4,
            },
            footnotes: {},
            footnoteOrder: [],
        });
    });
});
