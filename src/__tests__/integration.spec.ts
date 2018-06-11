import * as fs from 'fs';
import * as path from 'path';
import {create} from '../index';

const check = (md, json) =>
    test(md, () => {
        const parser = create();
        const mdFilepath = path.join(__dirname, 'fixtures', md);
        const ast = parser.tokenizeBlock(fs.readFileSync(mdFilepath, 'utf8'));
        const expected = require(path.join(__dirname, 'fixtures', json));

        expect(ast).toMatchObject(expected);
    });

const log = (md, json) => {
    const parser = create();
    const mdFilepath = path.join(__dirname, 'fixtures', md);
    const ast = parser.tokenizeBlock(fs.readFileSync(mdFilepath, 'utf8'));

    // tslint:disable-next-line no-console
    console.log(JSON.stringify(ast, null, 4));
};

describe('Integration', () => {
    check('basic.md', 'basic.json');
    check('blockquotes.md', 'blockquotes.json');
    check('footnote.md', 'footnote.json');
    check('references.md', 'references.json');
});
