import { test } from "uvu";
// eslint-disable-next-line no-unused-vars
import { equal, is, ok, throws, type, not, match } from "uvu/assert";

import { compare } from "../../../../../ops/helpers/shallow-compare.js";
import { applyFixes, verify } from "../../../t-util/util.js";

// RULE IS TRIGGERED DIRECTLY FROM PARSER!
// IT'S SOURCE IS IN CODSEN-PARSER, NOT IN src/rules/tag/tag-missing-closing.js

// REMEMBER TO UPDATE src/util/nonFileBasedTagRules.json WHEN YOU ADD SIMILAR RULES

// 01. basic
// -----------------------------------------------------------------------------

test(`01 - ${`\u001b[${33}m${`basic`}\u001b[${39}m`} - off`, () => {
  let str = "z <div>";
  let messages = verify(not, str, {
    rules: {
      "tag-missing-closing": 0,
    },
  });
  equal(applyFixes(str, messages), str, "01.01");
  equal(messages, [], "01.02");
});

test(`02 - ${`\u001b[${33}m${`basic`}\u001b[${39}m`} - warn`, () => {
  let str = "z <div>";
  let messages = verify(not, str, {
    rules: {
      "tag-missing-closing": 1,
    },
  });
  equal(applyFixes(str, messages), str, "02.01");
  compare(
    ok,
    messages,
    [
      {
        ruleId: "tag-missing-closing",
        severity: 1,
        idxFrom: 2,
        idxTo: 7,
        message: `Closing tag is missing.`,
        fix: null,
      },
    ],
    "02.02"
  );
});

test(`03 - ${`\u001b[${33}m${`basic`}\u001b[${39}m`} - err`, () => {
  let str = "z <div>";
  let messages = verify(not, str, {
    rules: {
      "tag-missing-closing": 2,
    },
  });
  equal(applyFixes(str, messages), str, "03.01");
  compare(
    ok,
    messages,
    [
      {
        ruleId: "tag-missing-closing",
        severity: 2,
        idxFrom: 2,
        idxTo: 7,
        message: `Closing tag is missing.`,
        fix: null,
      },
    ],
    "03.02"
  );
});

test(`04 - ${`\u001b[${33}m${`basic`}\u001b[${39}m`} - via blanket rule, severity 1`, () => {
  let str = "z <div>";
  let messages = verify(not, str, {
    rules: {
      tag: 1,
    },
  });
  equal(applyFixes(str, messages), str, "04.01");
  compare(
    ok,
    messages,
    [
      {
        ruleId: "tag-missing-closing",
        severity: 1,
        idxFrom: 2,
        idxTo: 7,
        message: `Closing tag is missing.`,
        fix: null,
      },
    ],
    "04.02"
  );
});

test(`05 - ${`\u001b[${33}m${`basic`}\u001b[${39}m`} - via blanket rule, severity 2`, () => {
  let str = "z <div>";
  let messages = verify(not, str, {
    rules: {
      tag: 2,
    },
  });
  equal(applyFixes(str, messages), str, "05.01");
  compare(
    ok,
    messages,
    [
      {
        ruleId: "tag-missing-closing",
        severity: 2,
        idxFrom: 2,
        idxTo: 7,
        message: `Closing tag is missing.`,
        fix: null,
      },
    ],
    "05.02"
  );
});

test(`06 - ${`\u001b[${33}m${`basic`}\u001b[${39}m`} - no issue here`, () => {
  let str = "<style>\n\n</style>";
  let messages = verify(not, str, {
    rules: {
      "tag-missing-closing": 2,
    },
  });
  equal(applyFixes(str, messages), str, "06.01");
  equal(messages, [], "06.02");
});

test(`07 - ${`\u001b[${33}m${`basic`}\u001b[${39}m`} - TD missing`, () => {
  let str = `<table>
  <tr>
    <td>
      z
  </tr>
</table>`;
  let messages = verify(not, str, {
    rules: {
      "tag-missing-closing": 2,
    },
  });
  equal(applyFixes(str, messages), str, "07.01");
  compare(
    ok,
    messages,
    [
      {
        message: "Closing tag is missing.",
        ruleId: "tag-missing-closing",
        idxFrom: 19,
        idxTo: 23,
        fix: null,
        keepSeparateWhenFixing: false,
        line: 3,
        column: 5,
        severity: 2,
        tokenObj: {
          type: "tag",
          start: 19,
          end: 23,
          value: "<td>",
        },
      },
    ],
    "07.02"
  );
  equal(messages.length, 1, "07.03");
});

test(`08 - ${`\u001b[${33}m${`basic`}\u001b[${39}m`} - TR missing`, () => {
  let str = `<table width="1" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td>
      z
    </td>
</table>`;
  let messages = verify(not, str, {
    rules: {
      "tag-missing-closing": 2,
    },
  });
  equal(applyFixes(str, messages), str, "08.01");
  compare(
    ok,
    messages,
    [
      {
        fix: null,
        keepSeparateWhenFixing: false,
        line: 2,
        column: 3,
        severity: 2,
        message: "Closing tag is missing.",
        ruleId: "tag-missing-closing",
        idxFrom: 63,
        idxTo: 67,
        tokenObj: {
          type: "tag",
          start: 63,
          end: 67,
          value: "<tr>",
        },
      },
    ],
    "08.02"
  );
  equal(messages.length, 1, "08.03");
});

test(`09 - ${`\u001b[${33}m${`basic`}\u001b[${39}m`} - TABLE missing`, () => {
  let str = `<table width="1" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td>
      z
    </td>
  </tr>`;
  let messages = verify(not, str, {
    rules: {
      "tag-missing-closing": 2,
    },
  });
  equal(applyFixes(str, messages), str, "09.01");
  compare(
    ok,
    messages,
    [
      {
        fix: null,
        keepSeparateWhenFixing: false,
        line: 1,
        column: 1,
        severity: 2,
        message: "Closing tag is missing.",
        ruleId: "tag-missing-closing",
        idxFrom: 0,
        idxTo: 60,
        tokenObj: {
          type: "tag",
          start: 0,
          end: 60,
          value: '<table width="1" border="0" cellpadding="0" cellspacing="0">',
        },
      },
    ],
    "09.02"
  );
  equal(messages.length, 1, "09.03");
});

test.skip(`01 - ${`\u001b[${33}m${`basic`}\u001b[${39}m`} - TR+TD missing`, () => {
  let str = `<table width="1" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td>
      z
</table>`;
  let messages = verify(not, str, {
    rules: {
      "tag-missing-closing": 2,
    },
  });
  equal(applyFixes(str, messages), str, "01");
  equal(messages, [], "01.02");
});

// 02. various
// -----------------------------------------------------------------------------

test(`11 - ${`\u001b[${33}m${`various`}\u001b[${39}m`} - opening and closing void tag`, () => {
  let str = `<br><br>zzz</br></br>`;
  let fixed = `<br /><br />zzz<br /><br />`;
  let messages = verify(not, str, {
    rules: {
      all: 2,
    },
  });
  equal(applyFixes(str, messages), fixed, "11");
});

test(`12 - ${`\u001b[${33}m${`various`}\u001b[${39}m`} - false positive - unclosed void`, () => {
  let str = `<br><br>zzz<br>`;
  let fixed = `<br /><br />zzz<br />`;
  let messages = verify(not, str, {
    rules: {
      all: 2,
    },
  });
  equal(applyFixes(str, messages), fixed, "12");
});

test.skip(`02`, () => {
  let str = `<br<div></div>`;
  let fixed = `<br /><div></div>`;
  let messages = verify(not, str, {
    rules: {
      all: 2,
    },
  });
  equal(applyFixes(str, messages), fixed, "02.01");
});

test.skip(`03`, () => {
  let str = `<br\n<div></div>`;
  let fixed = `<br />\n<div></div>`;
  let messages = verify(not, str, {
    rules: {
      all: 2,
    },
  });
  equal(applyFixes(str, messages), fixed, "03.01");
});

test.run();
