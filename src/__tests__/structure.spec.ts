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
            definitionOrder: [],
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
            definitionOrder: [],
            footnotes: {},
            footnoteOrder: [],
        });
    });
});
