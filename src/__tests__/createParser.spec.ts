import createParser from '../createParser';
import icon from '../tokenizer/icon';

describe('createParser()', () => {
    test('returns a parser object', () => {
        const parser = createParser({
            inline: [icon()],
            block: [],
        });

        expect(typeof parser).toBe('object');
        expect(typeof parser.inline).toBe('function');
    });

    test('returns a single AST token', () => {
        const parser = createParser({
            inline: [icon()],
            block: [],
        });

        const ast = parser.inline(':smile:');

        expect(typeof ast).toBe('object');
        expect(ast.type).toBe('icon');
    });
});
