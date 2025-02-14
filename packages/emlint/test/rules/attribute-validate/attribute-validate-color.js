import { test } from "uvu";
// eslint-disable-next-line no-unused-vars
import { equal, is, ok, throws, type, not, match } from "uvu/assert";

// eslint-disable-next-line no-unused-vars
import { compare } from "../../../../../ops/helpers/shallow-compare.js";
import { Linter } from "../../../dist/emlint.esm.js";
import { applyFixes } from "../../../t-util/util.js";

// 01. validation
// -----------------------------------------------------------------------------

test(`01 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no color, error level 0`, () => {
  let str = `<font>`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-color": 0,
    },
  });
  equal(applyFixes(str, messages), str, "01.01");
  equal(messages, [], "01.02");
});

test(`02 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no color, error level 1`, () => {
  let str = `<font>`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-color": 1,
    },
  });
  equal(applyFixes(str, messages), str, "02.01");
  equal(messages, [], "02.02");
});

test(`03 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no color, error level 2`, () => {
  let str = `<font>`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-color": 2,
    },
  });
  equal(applyFixes(str, messages), str, "03.01");
  equal(messages, [], "03.02");
});

test(`04 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - healthy color`, () => {
  let str = `<font class='zz' color='#CCCCCC' id='yy aa'>`; // <-- notice single quotes
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-color": 2,
    },
  });
  equal(applyFixes(str, messages), str, "04.01");
  equal(messages, [], "04.02");
});

// 02. rogue whitespace
// -----------------------------------------------------------------------------

test(`05 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - space in front`, () => {
  let str = `<font color=" #CCCCCC">`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-color": 2,
    },
  });
  equal(applyFixes(str, messages), `<font color="#CCCCCC">`, "05.01");
  compare(ok, messages, [
    {
      ruleId: "attribute-validate-color",
      idxFrom: 13,
      idxTo: 14,
      message: `Remove whitespace.`,
      fix: {
        ranges: [[13, 14]],
      },
    },
  ]);
});

test(`06 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - space after`, () => {
  let str = `<font color="#cccccc ">`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-color": 2,
    },
  });
  equal(applyFixes(str, messages), `<font color="#cccccc">`, "06.01");
  compare(ok, messages, [
    {
      ruleId: "attribute-validate-color",
      idxFrom: 20,
      idxTo: 21,
      message: `Remove whitespace.`,
      fix: {
        ranges: [[20, 21]],
      },
    },
  ]);
});

test(`07 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - copious whitespace around - 6 digit hex`, () => {
  let str = `<font color="  #CCCCCC  ">`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-color": 2,
    },
  });
  equal(applyFixes(str, messages), `<font color="#CCCCCC">`, "07.01");
  compare(ok, messages, [
    {
      ruleId: "attribute-validate-color",
      idxFrom: 13,
      idxTo: 24,
      message: `Remove whitespace.`,
      fix: {
        ranges: [
          [13, 15],
          [22, 24],
        ],
      },
    },
  ]);
});

test(`08 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - copious whitespace around - named`, () => {
  let str = `<font color="  PeachPuff  ">`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-color": 2,
    },
  });
  equal(applyFixes(str, messages), `<font color="PeachPuff">`, "08.01");
  compare(ok, messages, [
    {
      ruleId: "attribute-validate-color",
      idxFrom: 13,
      idxTo: 26,
      message: `Remove whitespace.`,
      fix: {
        ranges: [
          [13, 15],
          [24, 26],
        ],
      },
    },
  ]);
});

test(`09 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - only trimmable whitespace as a value`, () => {
  let str = `<font color="  \t">`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-color": 2,
    },
  });
  // can't fix:
  equal(applyFixes(str, messages), str, "09.01");
  compare(ok, messages, [
    {
      ruleId: "attribute-validate-color",
      idxFrom: 13,
      idxTo: 16,
      message: `Missing value.`,
      fix: null,
    },
  ]);
});

test(`10 - ${`\u001b[${36}m${`whitespace`}\u001b[${39}m`} - empty value`, () => {
  let str = `<font color="">`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-color": 2,
    },
  });
  // can't fix:
  equal(applyFixes(str, messages), str, "10.01");
  compare(ok, messages, [
    {
      ruleId: "attribute-validate-color",
      idxFrom: 6,
      idxTo: 14,
      message: `Missing value.`,
      fix: null,
    },
  ]);
});

// 03. named colors
// -----------------------------------------------------------------------------

test(`11 - ${`\u001b[${35}m${`named`}\u001b[${39}m`} - healthy`, () => {
  let str = `<font class='zz' color='blue' id='yy aa'>`; // <-- notice single quotes
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-color": 2,
    },
  });
  equal(applyFixes(str, messages), str, "11.01");
  equal(messages, [], "11.02");
});

test(`12 - ${`\u001b[${35}m${`named`}\u001b[${39}m`} - unrecognised`, () => {
  let str = `<font color="nearlyRed">`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-color": 2,
    },
  });
  // can't fix:
  equal(applyFixes(str, messages), str, "12.01");
  compare(ok, messages, [
    {
      ruleId: "attribute-validate-color",
      idxFrom: 13,
      idxTo: 22,
      message: `Unrecognised color value.`,
      fix: null,
    },
  ]);
});

// 04. hex colors
// -----------------------------------------------------------------------------

test(`13 - ${`\u001b[${35}m${`hex`}\u001b[${39}m`} - unrecognised`, () => {
  let str = `<font color="#gg0000">`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-color": 2,
    },
  });
  // can't fix:
  equal(applyFixes(str, messages), str, "13.01");
  compare(ok, messages, [
    {
      ruleId: "attribute-validate-color",
      idxFrom: 13,
      idxTo: 20,
      message: `Unrecognised hex code.`,
      fix: null,
    },
  ]);
});

test(`14 - ${`\u001b[${35}m${`hex`}\u001b[${39}m`} - bad hex`, () => {
  let str = `<font color="#ccc">`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-color": 2,
    },
  });
  // can't fix:
  equal(applyFixes(str, messages), str, "14.01");
  compare(ok, messages, [
    {
      ruleId: "attribute-validate-color",
      idxFrom: 13,
      idxTo: 17,
      message: `Hex color code should be 6 digits-long.`,
      fix: null,
    },
  ]);
});

test(`15 - ${`\u001b[${35}m${`hex`}\u001b[${39}m`} - bad hex`, () => {
  let str = `<font color="#aaaa">`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-color": 2,
    },
  });
  // can't fix:
  equal(applyFixes(str, messages), str, "15.01");
  compare(ok, messages, [
    {
      ruleId: "attribute-validate-color",
      idxFrom: 13,
      idxTo: 18,
      message: `Hex color code should be 6 digits-long.`,
      fix: null,
    },
  ]);
});

// 05. hex colors
// -----------------------------------------------------------------------------

test(`16 - ${`\u001b[${32}m${`rgba`}\u001b[${39}m`} - healthy`, () => {
  let str = `<font color="rgb(255, 0, 153)">`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-color": 2,
    },
  });
  // can't fix:
  equal(applyFixes(str, messages), str, "16.01");
  compare(ok, messages, [
    {
      ruleId: "attribute-validate-color",
      idxFrom: 13,
      idxTo: 29,
      message: `rgb() is not allowed.`,
      fix: null,
    },
  ]);
});

test(`17 - ${`\u001b[${32}m${`rgba`}\u001b[${39}m`} - broken`, () => {
  let str = `<font color="rgb(255)">`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-color": 2,
    },
  });
  // can't fix:
  equal(applyFixes(str, messages), str, "17.01");
  compare(ok, messages, [
    {
      ruleId: "attribute-validate-color",
      idxFrom: 13,
      idxTo: 21,
      message: `rgb() is not allowed.`,
      fix: null,
    },
  ]);
});

test(`18 - ${`\u001b[${32}m${`rgba`}\u001b[${39}m`} - broken`, () => {
  let str = `<basefont color="rgb()">`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-color": 2,
    },
  });
  // can't fix:
  equal(applyFixes(str, messages), str, "18.01");
  compare(ok, messages, [
    {
      ruleId: "attribute-validate-color",
      idxFrom: 17,
      idxTo: 22,
      message: `rgb() is not allowed.`,
      fix: null,
    },
  ]);
});

test.run();
