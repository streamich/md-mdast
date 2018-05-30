import createParser from '../createParser';
import Icon from '../tokenizer/Icon';

describe('createParser()', () => {
    test('returns a parser object', () => {
        const parser = createParser({
            inline: [Icon()],
            block: [],
        });

        expect(typeof parser).toBe('object');
        expect(typeof parser.inline).toBe('function');
    });

    test('returns AST', () => {
        const parser = createParser({
            inline: [Icon()],
            block: [],
        });

        const ast = parser.inline(':smile:');

        expect(typeof ast).toBe('object');
        expect(ast.type).toBe('inline');
        expect(typeof ast.children).toBe('object');
        expect(ast.children.type).toBe('icon');
    });
});
