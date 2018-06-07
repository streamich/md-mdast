import {TTokenizer, IList, IListItem} from '../types';
import {list as REG} from '../regex';

const REG_SPLIT = /^\s{0,3}(?:[*+-]|\d\.){1}(?:\s{1,2}|\t)/gm;
const REG_BULLET = /^(\s*)([*+-]|\d\.)(\s{1,2}|\t)/;
const REG_LOOSE = /\n\n(?!\s*$)/;

// tslint:disable-next-line only-arrow-functions
const list: TTokenizer<IList> = function(eat, value) {
    const matches = value.match(REG);

    if (!matches) {
        return;
    }

    const subvalue = matches[0];
    const [, ...parts] = subvalue.split(REG_SPLIT);
    const bullets = subvalue.match(REG_SPLIT);

    if (!bullets) {
        return;
    }

    const length = parts.length;
    const children: any[] = [];

    let ordered = false;
    let start = null;
    let loose = false;

    for (let i = 0; i < length; i++) {
        const part = parts[i];
        const bullet = bullets[i];
        const bulletMatch = subvalue.match(REG_BULLET);

        // This should never happen.
        if (!bulletMatch) {
            return;
        }

        // const indent = bulletMatch[1].length;
        const bulletMarker = bulletMatch[2];
        // const space = indent + bulletMarker.length;

        if (i === 0) {
            if (bulletMarker.length > 1) {
                ordered = true;
                start = parseInt(bulletMarker, 10);
            }
        }

        // Outdent
        const outdented = part.replace(/^ {1,4}/gm, '');
        // const outdented = part.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')

        const partLoose = REG_LOOSE.test(part);

        if (partLoose) {
            loose = true;
        }

        children.push({
            type: 'listItem',
            loose: partLoose,
            checked: null,
            // tslint:disable-next-line no-invalid-this
            children: this.tokenizeChildBlock(outdented),
        });
    }

    return eat(subvalue, 'list', children, {
        ordered,
        start,
        loose,
    });
};

export default list;
