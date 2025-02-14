# regex-empty-conditional-comments

> Regular expression for matching HTML empty conditional comments

<div class="package-badges">
  <a href="https://www.npmjs.com/package/regex-empty-conditional-comments" rel="nofollow noreferrer noopener">
    <img src="https://img.shields.io/badge/-npm-blue?style=flat-square" alt="page on npm">
  </a>
  <a href="https://codsen.com/os/regex-empty-conditional-comments" rel="nofollow noreferrer noopener">
    <img src="https://img.shields.io/badge/-codsen-blue?style=flat-square" alt="page on codsen.com">
  </a>
  <a href="https://github.com/codsen/codsen/tree/main/packages/regex-empty-conditional-comments" rel="nofollow noreferrer noopener">
    <img src="https://img.shields.io/badge/-github-blue?style=flat-square" alt="page on github">
  </a>
  <a href="https://npmcharts.com/compare/regex-empty-conditional-comments?interval=30" rel="nofollow noreferrer noopener" target="_blank">
    <img src="https://img.shields.io/npm/dm/regex-empty-conditional-comments.svg?style=flat-square" alt="Downloads per month">
  </a>
  <a href="https://prettier.io" rel="nofollow noreferrer noopener" target="_blank">
    <img src="https://img.shields.io/badge/code_style-prettier-brightgreen.svg?style=flat-square" alt="Code style: prettier">
  </a>
  <img src="https://img.shields.io/badge/licence-MIT-brightgreen.svg?style=flat-square" alt="MIT License">
  <a href="https://liberamanifesto.com" rel="nofollow noreferrer noopener" target="_blank">
    <img src="https://img.shields.io/badge/libera-manifesto-lightgrey.svg?style=flat-square" alt="libera manifesto">
  </a>
</div>

## Install

The latest version is **ESM only**: Node 12+ is needed to use it and it must be `import`ed instead of `require`d. If your project is not on ESM yet and you want to use `require`, use an older version of this program, `1.11.0`.

```bash
npm i regex-empty-conditional-comments
```

## Quick Take

```js
import { strict as assert } from "assert";

import { emptyCondCommentRegex } from "regex-empty-conditional-comments";

// empty comment which was meant to target Outlook-only
assert.equal(
  emptyCondCommentRegex().test(`<!--[if !mso]>
<![endif]-->`),
  true
);

// empty comment which was meant to target non-Outlook-only
assert.equal(
  emptyCondCommentRegex().test(`<!--[if !mso]><!-- -->
<!--<![endif]-->`),
  true
);

assert.equal(
  emptyCondCommentRegex().test(`<!--[if !mso]><!-- -->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->`),
  false
);

assert.equal(
  emptyCondCommentRegex().test(`<!--[if gte mso 9]><xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml><![endif]-->`),
  false
);

assert.equal(
  emptyCondCommentRegex().exec("<html><!--[if !mso]><![endif]--><title>")[0],
  "<!--[if !mso]><![endif]-->"
);

assert.deepEqual(
  `<html> <!--[if !mso]><![endif]--> <title>text</title> <!--[if gte mso 9]>
<xml>
<![endif]-->`.match(emptyCondCommentRegex()),
  ["<!--[if !mso]><![endif]-->"]
);
```

## Documentation

Please [visit codsen.com](https://codsen.com/os/regex-empty-conditional-comments/) for a full description of the API.

## Contributing

To report bugs or request features or assistance, [raise an issue](https://github.com/codsen/codsen/issues/new/choose) on GitHub.

## Licence

MIT License

Copyright (c) 2010-2022 Roy Revelt and other contributors

<img src="https://codsen.com/images/png-codsen-ok.png" width="98" alt="ok" align="center"> <img src="https://codsen.com/images/png-codsen-1.png" width="148" alt="codsen" align="center"> <img src="https://codsen.com/images/png-codsen-star-small.png" width="32" alt="star" align="center">
