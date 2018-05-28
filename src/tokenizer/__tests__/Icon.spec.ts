import Icon from '../Icon';

describe('Icon', () => {
    test('exists', () => {
        expect(typeof Icon).toBe('function');
    });

    test('returns undefined if not icon', () => {
        const token = Icon('adsf', 1, {} as any);

        expect(token).toBe(undefined);
    });

    test('returns icon token', () => {
        const token = Icon(':smile:', 0, {} as any);

        expect(typeof token).toBe('object');
        expect(token).toMatchObject({
            type: 'Icon',
            children: 'smile',
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
        const token = Icon(':crossed_fingers:', 0, {} as any);

        expect(typeof token).toBe('object');
        expect(token).toMatchObject({
            type: 'Icon',
            children: 'crossed_fingers',
            pos: 0,
            len: 17,
        });
    });

    test('does not allow spaces', () => {
        const token = Icon(': space:', 0, {} as any);

        expect(typeof token).toBe('undefined');
    });

    test('does allow hyphens', () => {
        const token = Icon(':crossed-fingers:', 0, {} as any);

        expect(typeof token).toBe('object');
        expect(token).toMatchObject({
            type: 'Icon',
            children: 'crossed-fingers',
            pos: 0,
            len: 17,
        });
    });
});
