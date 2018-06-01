import {IIcon, TAnyToken, IParser, TEat} from '../types';

const icon = (maxLength: number = 32) => {
    const REG = new RegExp(`^(:|::)([^'\\s:]{1,${maxLength}}?)(:|::)`, '');

    return function(this: IParser, eat: TEat<IIcon>, value: string) {
        const matches = value.match(REG);

        if (matches) {
            return eat(matches[0], 'icon', void 0, {emoji: matches[2]});
        }
    };
};

export default icon;
