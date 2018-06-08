export const replace = (reg: RegExp, map: {[s: string]: RegExp}) => {
    let source = reg.source;

    // tslint:disable forin
    for (const key in map) {
        source = source.replace(new RegExp(key, 'g'), map[key].source);
    }

    return new RegExp(source, reg.flags);
};

export const label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/;
export const url = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?)/;
export const title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
export const urlInline = /(https?:\/\/)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}(\.[a-z]{2,4})?\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=,\*]*)/;
export const heading = /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/;
export const lheading = /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/;
export const blockquote = /^( *>[^\n]+(\n(?!^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$))[^\n]+)*\n*)+/;
export const hr = /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/;
export const bull = /(?:[*+-]|\d+\.)/;
export const def = replace(/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/, {
    label,
    title,
});
export const list = replace(/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/, {bull, hr, def});
export const item = replace(/^( *)(bull) [^\n]*(?:\n(?!\1\- )[^\n]*)*/gm, {bull});
export const paragraph = replace(/^((?:[^\n]+(\n(?!\s{0,3}bull))?)+)\n*/, {bull});
