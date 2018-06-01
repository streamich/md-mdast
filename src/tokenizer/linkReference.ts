/* tslint:disable only-arrow-functions, no-invalid-this */
import {TTokenizer, ILinkReference} from '../types';
import {replace, label} from '../regex';

const REG = replace(/^!?\[(label)\]\s*\[([^\]]*)\]/, {label});

const linkReference: TTokenizer<ILinkReference> = function(eat, value) {
    const matches = value.match(REG);

    if (matches) {
        const subvalue = matches[1];
        let identifier = matches[2];
        let referenceType: 'shortcut' | 'collapsed' | 'full' = 'full';

        if (!identifier) {
            identifier = subvalue;
            referenceType = 'collapsed';
        }

        return eat(matches[0], 'linkReference', this.tokenizeInline(matches[1]), {
            identifier,
            referenceType,
        });
    }

    return;
};

export default linkReference;
