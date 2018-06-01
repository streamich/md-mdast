import {IIcon, TAnyToken, IParser, TEat} from '../types';

const icon = (maxLength: number = 32) => {
    const REG1 = new RegExp(`^::([^'\\s:]{1,${maxLength}}?)::`, '');
    const REG2 = new RegExp(`^:([^'\\s:]{1,${maxLength}}?):`, '');

    return function(this: IParser, eat: TEat<IIcon>, value: string) {
        let matches = value.match(REG1);

        if (!matches) {
            matches = value.match(REG2);
        }

        if (matches) {
            return eat(matches[0], 'icon', void 0, {emoji: matches[1]});
        }
    };
};

export default icon;
