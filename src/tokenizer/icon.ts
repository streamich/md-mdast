import {IIcon, TAnyToken, IParser, TEat} from '../types';

const icon = (sentinel: string, maxLength: number) => {
    const REG = new RegExp(`^(\\s${sentinel}|${sentinel})([^\\s${sentinel}]{1,${maxLength}?)(${sentinel}(\\s|$)|${sentinel})`, '');

    return function (this: IParser, eat: TEat<IIcon>, value: string) {
        const matches = value.match(REG);

        if (matches) {
            return eat(matches[0], 'icon', void 0, {emoji: matches[2]});
        }
    };
};

export default icon;
