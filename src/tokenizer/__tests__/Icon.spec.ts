import icon from '../icon';

describe('icon tokenizer', () => {
    test('exists', () => {
        expect(typeof icon).toBe('function');
        expect(typeof icon()).toBe('function');
    });

    test('returns undefined if not icon', () => {
        const token = icon()('adsf', 1, {} as any);

        expect(token).toBe(undefined);
    });

    test('returns icon token', () => {
        const token = icon()(':smile:', 0, {} as any);

        expect(typeof token).toBe('object');
        expect(token).toMatchObject({
            type: 'icon',
            emoji: 'smile',
            pos: 0,
            len: 7,
        });
    });

    /*
    test('allows double colon', () => {
        const token = Icon('::smile::', 0, {} as any);

        expect(typeof token).toBe('object');
        expect(token).toMatchObject({
            type: 'Icon',
            children: 'smile',
            pos: 0,
            len: 9,
        });
    });
    */

    test('allows underscore', () => {
        const token = icon()(':crossed_fingers:', 0, {} as any);

        expect(typeof token).toBe('object');
        expect(token).toMatchObject({
            type: 'icon',
            emoji: 'crossed_fingers',
            pos: 0,
            len: 17,
        });
    });

    test('does not allow spaces', () => {
        const token = icon()(': space:', 0, {} as any);

        expect(typeof token).toBe('undefined');
    });

    test('does allow hyphens', () => {
        const token = icon()(':crossed-fingers:', 0, {} as any);

        expect(typeof token).toBe('object');
        expect(token).toMatchObject({
            type: 'icon',
            emoji: 'crossed-fingers',
            pos: 0,
            len: 17,
        });
    });
});
