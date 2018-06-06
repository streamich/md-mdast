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
});
