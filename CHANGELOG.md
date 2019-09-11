# [3.3.0](https://github.com/streamich/md-mdast/compare/v3.2.0...v3.3.0) (2019-09-11)


### Features

* 🎸 add support for `checked` prop in `ListItem` ([74351a7](https://github.com/streamich/md-mdast/commit/74351a7))

# [3.2.0](https://github.com/streamich/md-mdast/compare/v3.1.1...v3.2.0) (2019-04-23)


### Features

* 🎸 add spoiler tags ([9163dca](https://github.com/streamich/md-mdast/commit/9163dca))

## [3.1.1](https://github.com/streamich/md-mdast/compare/v3.1.0...v3.1.1) (2019-03-11)


### Bug Fixes

* 🐛 split correctly numbered lists ([651d9a2](https://github.com/streamich/md-mdast/commit/651d9a2)), closes [#35](https://github.com/streamich/md-mdast/issues/35)

# [3.1.0](https://github.com/streamich/md-mdast/compare/v3.0.0...v3.1.0) (2019-02-25)


### Features

* 🎸 remove raw, leave it only for tests ([b4f29cf](https://github.com/streamich/md-mdast/commit/b4f29cf))

# [3.0.0](https://github.com/streamich/md-mdast/compare/v2.2.0...v3.0.0) (2019-02-25)


### Features

* 🎸 make children prop always an array ([e100d01](https://github.com/streamich/md-mdast/commit/e100d01))


### BREAKING CHANGES

* children are now always Array

# [2.2.0](https://github.com/streamich/md-mdast/compare/v2.1.0...v2.2.0) (2019-02-24)


### Features

* 🎸 add footnote to structured document ([efd6982](https://github.com/streamich/md-mdast/commit/efd6982))
* 🎸 don't create children for definitions in document ([3c79726](https://github.com/streamich/md-mdast/commit/3c79726))
* 🎸 extract definitions in structured document ([7da9b48](https://github.com/streamich/md-mdast/commit/7da9b48))
* 🎸 write first version of structured document creator ([27c76a4](https://github.com/streamich/md-mdast/commit/27c76a4))

# [2.1.0](https://github.com/streamich/md-mdast/compare/v2.0.1...v2.1.0) (2019-02-24)


### Bug Fixes

* 🐛 correct NPM imports ([303d8cb](https://github.com/streamich/md-mdast/commit/303d8cb))
* remove old unused commands ([5171041](https://github.com/streamich/md-mdast/commit/5171041))


### Features

* 🎸 emit source maps ([0121fd8](https://github.com/streamich/md-mdast/commit/0121fd8))
* 🎸 upgrade dependencies ([eb9de82](https://github.com/streamich/md-mdast/commit/eb9de82))
* 🎸 upgrade dependencies ([1b2c7a0](https://github.com/streamich/md-mdast/commit/1b2c7a0))

## [2.0.1](https://github.com/streamich/md-mdast/compare/v2.0.0...v2.0.1) (2019-02-23)


### Bug Fixes

* 🐛 allow fenced code block meta only on language line ([531c824](https://github.com/streamich/md-mdast/commit/531c824))

# [2.0.0](https://github.com/streamich/md-mdast/compare/v1.0.0...v2.0.0) (2018-10-20)


### Features

* 🎸 use semantic-release plugins when publishing release ([a01dbc0](https://github.com/streamich/md-mdast/commit/a01dbc0))


### BREAKING CHANGES

* release v2

<a name="1.0.0"></a>
# 1.0.0 (2018-10-20)


### Bug Fixes

* 🐛 export create() method in distribution ([43f73b9](https://github.com/streamich/md-mdast/commit/43f73b9))
* 🐛 fix TypeScript errors ([6907433](https://github.com/streamich/md-mdast/commit/6907433))
* 🐛 outdent footnote blocks ([0167a6d](https://github.com/streamich/md-mdast/commit/0167a6d))
* 🐛 separate blockquotes split by blank lines ([aefe099](https://github.com/streamich/md-mdast/commit/aefe099))
* 🐛 support nested list items ([c505981](https://github.com/streamich/md-mdast/commit/c505981))
* 🐛 update README ([182d5c2](https://github.com/streamich/md-mdast/commit/182d5c2))
* 🐜 fix highlight() tokenizer after refactor ([e97646f](https://github.com/streamich/md-mdast/commit/e97646f))
* 🐜 fix TypeScript errors ([88361b4](https://github.com/streamich/md-mdast/commit/88361b4))
* 🐜 make first() tokenizer generator work ([55e40bf](https://github.com/streamich/md-mdast/commit/55e40bf))
* update repo link ([535c0e0](https://github.com/streamich/md-mdast/commit/535c0e0))


### Features

* 🎸 add ability to write integration tests ([74c8996](https://github.com/streamich/md-mdast/commit/74c8996))
* 🎸 add break() tokenizer ([564c110](https://github.com/streamich/md-mdast/commit/564c110))
* 🎸 add code() block tokenizer ([93886be](https://github.com/streamich/md-mdast/commit/93886be))
* 🎸 add createParser() function ([67d9260](https://github.com/streamich/md-mdast/commit/67d9260))
* 🎸 add definition() block tokenizer ([4201634](https://github.com/streamich/md-mdast/commit/4201634))
* 🎸 add delete() tokenizer ([a518b59](https://github.com/streamich/md-mdast/commit/a518b59))
* 🎸 add emphasis() tokenizer ([b21c820](https://github.com/streamich/md-mdast/commit/b21c820))
* 🎸 add escape() tokenizer ([a6af7f2](https://github.com/streamich/md-mdast/commit/a6af7f2))
* 🎸 add fences() block tokenizer ([f1712eb](https://github.com/streamich/md-mdast/commit/f1712eb))
* 🎸 add footnoteDefinition() block tokenizer ([8c971a4](https://github.com/streamich/md-mdast/commit/8c971a4))
* 🎸 add footnoteReference() tokenizer ([81ef305](https://github.com/streamich/md-mdast/commit/81ef305))
* 🎸 add handle() tokenizer ([c0066f1](https://github.com/streamich/md-mdast/commit/c0066f1))
* 🎸 add heading() tokenizer ([8b7e850](https://github.com/streamich/md-mdast/commit/8b7e850))
* 🎸 add html() block tokenizer ([e094f13](https://github.com/streamich/md-mdast/commit/e094f13))
* 🎸 add Icon tokenizer ([d44c030](https://github.com/streamich/md-mdast/commit/d44c030))
* 🎸 add image() tokenizer and title to link() ([7ff86eb](https://github.com/streamich/md-mdast/commit/7ff86eb))
* 🎸 add inlineCode() tokenizer ([906b13a](https://github.com/streamich/md-mdast/commit/906b13a))
* 🎸 add inlineLink() tokenizer ([d1cd3cc](https://github.com/streamich/md-mdast/commit/d1cd3cc))
* 🎸 add inlineMath() tokenizer ([1d53eb1](https://github.com/streamich/md-mdast/commit/1d53eb1))
* 🎸 add Link AST type ([6379b76](https://github.com/streamich/md-mdast/commit/6379b76))
* 🎸 add linkReference() tokenizer ([b2bd69b](https://github.com/streamich/md-mdast/commit/b2bd69b))
* 🎸 add list() tokenizer features ([866e905](https://github.com/streamich/md-mdast/commit/866e905))
* 🎸 add math() block tokenizer ([55c0d58](https://github.com/streamich/md-mdast/commit/55c0d58))
* 🎸 add naive highlighted text tokenizer ([dd49f13](https://github.com/streamich/md-mdast/commit/dd49f13))
* 🎸 add newline() block tokenizer ([1152a43](https://github.com/streamich/md-mdast/commit/1152a43))
* 🎸 add paragraph() and blockquote() tokenizers ([9ec82c4](https://github.com/streamich/md-mdast/commit/9ec82c4))
* 🎸 add regex replace() function ([3b735c2](https://github.com/streamich/md-mdast/commit/3b735c2))
* 🎸 add smartypants character replacement ([ac29a28](https://github.com/streamich/md-mdast/commit/ac29a28))
* 🎸 add strong() tokenizer ([fc79b71](https://github.com/streamich/md-mdast/commit/fc79b71))
* 🎸 add sub() tokenizer ([4bf07d8](https://github.com/streamich/md-mdast/commit/4bf07d8))
* 🎸 add sup() tokeziner ([03ff68d](https://github.com/streamich/md-mdast/commit/03ff68d))
* 🎸 add support for imageReference token ([09220f2](https://github.com/streamich/md-mdast/commit/09220f2))
* 🎸 add support for shortcut link references ([08c1365](https://github.com/streamich/md-mdast/commit/08c1365))
* 🎸 add text() tokenizer ([86ad8c8](https://github.com/streamich/md-mdast/commit/86ad8c8))
* 🎸 add thematicBreak() block tokenizer ([c408767](https://github.com/streamich/md-mdast/commit/c408767))
* 🎸 add token generator function ([7fbd3bb](https://github.com/streamich/md-mdast/commit/7fbd3bb))
* 🎸 add underline() tokenizer ([238e24a](https://github.com/streamich/md-mdast/commit/238e24a))
* 🎸 add Whitespace tokenizer ([a777d4d](https://github.com/streamich/md-mdast/commit/a777d4d))
* 🎸 brwoserify package into a single .js file ([ced8309](https://github.com/streamich/md-mdast/commit/ced8309))
* 🎸 export TypeScript types ([45e5926](https://github.com/streamich/md-mdast/commit/45e5926))
* 🎸 improve smartypants() ([3ee23e3](https://github.com/streamich/md-mdast/commit/3ee23e3))
* 🎸 list() tokenizer WIP ([1f9ded3](https://github.com/streamich/md-mdast/commit/1f9ded3))
* 🎸 make first table() tokenizer version work ([8b02a76](https://github.com/streamich/md-mdast/commit/8b02a76))
* 🎸 prepare package.json and other files for release ([49baefa](https://github.com/streamich/md-mdast/commit/49baefa))
* 🎸 return raw Markdown text in AST ([a2178bc](https://github.com/streamich/md-mdast/commit/a2178bc))
* 🎸 stop paragraph on bullet point ([14d19da](https://github.com/streamich/md-mdast/commit/14d19da))
* 🎸 various improvements ([373049e](https://github.com/streamich/md-mdast/commit/373049e))
* release v1.0.0 ([3f3ad3c](https://github.com/streamich/md-mdast/commit/3f3ad3c))


### BREAKING CHANGES

* release v1

<a name="1.2.0"></a>
# [1.2.0](https://github.com/onp4/md-mdast/compare/v1.1.0...v1.2.0) (2018-06-11)


### Bug Fixes

* 🐛 outdent footnote blocks ([0167a6d](https://github.com/onp4/md-mdast/commit/0167a6d))
* 🐛 separate blockquotes split by blank lines ([aefe099](https://github.com/onp4/md-mdast/commit/aefe099))


### Features

* 🎸 add ability to write integration tests ([74c8996](https://github.com/onp4/md-mdast/commit/74c8996))
* 🎸 add support for shortcut link references ([08c1365](https://github.com/onp4/md-mdast/commit/08c1365))

<a name="1.1.0"></a>
# [1.1.0](https://github.com/onp4/md-mdast/compare/v1.0.1...v1.1.0) (2018-06-09)


### Features

* 🎸 add html() block tokenizer ([e094f13](https://github.com/onp4/md-mdast/commit/e094f13))
* 🎸 add support for imageReference token ([09220f2](https://github.com/onp4/md-mdast/commit/09220f2))
* 🎸 return raw Markdown text in AST ([a2178bc](https://github.com/onp4/md-mdast/commit/a2178bc))
