import {create} from '../index';

describe('Block Markdown', () => {
    describe('code', () => {
        it('works', () => {
            const parser = create();
            const ast = parser.tokenizeBlock('    alert(123);');

            expect(ast).toMatchObject({
                type: 'root',
                children: {
                    type: 'code',
                    value: 'alert(123);',
                    lang: null,
                },
            });
        });

        it('multiple lines', () => {
            const parser = create();
            const ast = parser.tokenizeBlock('    alert(123);\n' + '    console.log(123);');

            expect(ast).toMatchObject({
                type: 'root',
                children: {
                    type: 'code',
                    value: 'alert(123);\nconsole.log(123);',
                    lang: null,
                },
            });
        });
    });

    describe('newline', () => {
        it('removes newline tokens', () => {
            const parser = create();
            const ast = parser.tokenizeBlock('\n\n\n    alert(123);\n\n\n\n');

            expect(ast).toMatchObject({
                type: 'root',
                children: {
                    type: 'code',
                    value: 'alert(123);',
                    lang: null,
                },
            });
        });
    });

    describe('fences', () => {
        it('works', () => {
            const parser = create();
            const ast = parser.tokenizeBlock('```js\nalert(123);\n```');

            expect(ast).toMatchObject({
                type: 'root',
                children: {
                    type: 'code',
                    value: 'alert(123);',
                    lang: 'js',
                },
            });
        });

        it('matches meta information', () => {
            const parser = create();
            const ast = parser.tokenizeBlock('```js meta\nalert(123);\n```');

            expect(ast).toMatchObject({
                type: 'root',
                children: {
                    type: 'code',
                    value: 'alert(123);',
                    lang: 'js',
                    meta: 'meta',
                },
            });
        });
    });

    describe('math', () => {
        it('works', () => {
            const parser = create();
            const ast = parser.tokenizeBlock('$$\n1 + 1\n$$');

            expect(ast).toMatchObject({
                type: 'root',
                children: {type: 'math', len: 11, value: '1 + 1'},
                len: 11,
            });
        });

        it('multi-line', () => {
            const parser = create();
            const ast = parser.tokenizeBlock('$$\n1 + 1\nf(n) = 123\n$$');

            expect(ast).toMatchObject({
                type: 'root',
                children: {type: 'math', len: 22, value: '1 + 1\nf(n) = 123'},
                len: 22,
            });
        });
    });
});
