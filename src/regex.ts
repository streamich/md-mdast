export const label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/;
export const url = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?)/;
export const title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
export const urlInline = /(https?:\/\/)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}(\.[a-z]{2,4})?\b([-a-zA-Z0-9@:%_\+.~#?&//=,\*]*)/;

export const replace = (reg: RegExp, map: {[s: string]: RegExp}) => {
    let source = reg.source;

    // tslint:disable forin
    for (const key in map) {
        source = source.replace(new RegExp(key, 'g'), map[key].source);
    }

    return new RegExp(source, reg.flags);
};
