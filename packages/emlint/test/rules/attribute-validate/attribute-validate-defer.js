import { test } from "uvu";
// eslint-disable-next-line no-unused-vars
import { equal, is, ok, throws, type, not, match } from "uvu/assert";

// eslint-disable-next-line no-unused-vars
import { compare } from "../../../../../ops/helpers/shallow-compare.js";
import { Linter } from "../../../dist/emlint.esm.js";
import { applyFixes } from "../../../t-util/util.js";

// 01. validation
// -----------------------------------------------------------------------------

test(`01 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no defer, error level 0`, () => {
  let str = `<script><div>`; // <---- deliberately a tag names of both kinds, suitable and unsuitable
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-defer": 0,
    },
  });
  equal(applyFixes(str, messages), str, "01.01");
  equal(messages, [], "01.02");
});

test(`02 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no defer, error level 1`, () => {
  let str = `<script><div>`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-defer": 1,
    },
  });
  equal(applyFixes(str, messages), str, "02.01");
  equal(messages, [], "02.02");
});

test(`03 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no defer, error level 2`, () => {
  let str = `<script><div>`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-defer": 2,
    },
  });
  equal(applyFixes(str, messages), str, "03.01");
  equal(messages, [], "03.02");
});

test(`04 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - healthy script`, () => {
  let str = `<script defer>`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-defer": 2,
    },
  });
  equal(applyFixes(str, messages), str, "04.01");
  equal(messages, [], "04.02");
});

// 02. wrong parent tag
// -----------------------------------------------------------------------------

test(`05 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - recognised tag`, () => {
  let str = `<div defer>`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-defer": 2,
    },
  });
  // can't fix:
  equal(applyFixes(str, messages), str, "05.01");
  compare(ok, messages, [
    {
      ruleId: "attribute-validate-defer",
      idxFrom: 5,
      idxTo: 10,
      fix: null,
    },
  ]);
});

test(`06 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - unrecognised tag`, () => {
  let str = `<zzz defer class="yyy">`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-defer": 2,
    },
  });
  // can't fix:
  equal(applyFixes(str, messages), str, "06.01");
  compare(ok, messages, [
    {
      ruleId: "attribute-validate-defer",
      idxFrom: 5,
      idxTo: 10,
      fix: null,
    },
  ]);
});

// 03. wrong value
// -----------------------------------------------------------------------------

test(`07 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - boolean value`, () => {
  let str = `<script defer="true">`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-defer": 2,
    },
  });
  // can fix:
  equal(applyFixes(str, messages), `<script defer>`, "07.01");
  compare(ok, messages, [
    {
      ruleId: "attribute-validate-defer",
      idxFrom: 13,
      idxTo: 20,
      message: `Should have no value.`,
      fix: {
        ranges: [[13, 20]],
      },
    },
  ]);
});

test(`08 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - boolean value`, () => {
  let str = `<script defer=true>`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-defer": 2,
    },
  });
  // can fix:
  equal(applyFixes(str, messages), `<script defer>`, "08.01");
  compare(ok, messages, [
    {
      ruleId: "attribute-validate-defer",
      idxFrom: 13,
      idxTo: 18,
      message: `Should have no value.`,
      fix: {
        ranges: [[13, 18]],
      },
    },
  ]);
});

test(`09 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - empty value`, () => {
  let str = `<script defer="">`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-defer": 2,
    },
  });
  // can't fix:
  equal(applyFixes(str, messages), `<script defer>`, "09.01");
  compare(ok, messages, [
    {
      ruleId: "attribute-validate-defer",
      idxFrom: 13,
      idxTo: 16,
      message: `Should have no value.`,
      fix: {
        ranges: [[13, 16]],
      },
    },
  ]);
});

test(`10 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - value missing, equal present`, () => {
  let str = `<script defer=>`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-defer": 2,
    },
  });
  // can't fix:
  equal(applyFixes(str, messages), `<script defer>`, "10.01");
  compare(ok, messages, [
    {
      ruleId: "attribute-validate-defer",
      idxFrom: 13,
      idxTo: 14,
      message: `Should have no value.`,
      fix: {
        ranges: [[13, 14]],
      },
    },
  ]);
});

// 04. XHTML
// -----------------------------------------------------------------------------

test(`11 - ${`\u001b[${34}m${`XHTML`}\u001b[${39}m`} - healthy defer checkbox, as HTML`, () => {
  let str = `<script defer>`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-defer": [2, "xhtml"],
    },
  });
  // can fix:
  equal(applyFixes(str, messages), `<script defer="defer">`, "11.01");
  compare(ok, messages, [
    {
      ruleId: "attribute-validate-defer",
      idxFrom: 8,
      idxTo: 13,
      message: `It's XHTML, add value, ="defer".`,
      fix: {
        ranges: [[13, 13, `="defer"`]],
      },
    },
  ]);
});

test(`12 - ${`\u001b[${34}m${`XHTML`}\u001b[${39}m`} - missing after equal, as HTML`, () => {
  let str = `<script defer=/>`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-defer": [2, "xhtml"],
    },
  });
  equal(applyFixes(str, messages), `<script defer="defer"/>`, "12");
});

test(`13 - ${`\u001b[${34}m${`XHTML`}\u001b[${39}m`} - closing quote and content missing, as HTML`, () => {
  let str = `<script defer =">`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-defer": [2, "xhtml"],
    },
  });
  equal(messages[0].fix.ranges, [[13, 16, `="defer"`]], "13.01");
  equal(applyFixes(str, messages), `<script defer="defer">`, "13.02");
});

test(`14 - ${`\u001b[${34}m${`XHTML`}\u001b[${39}m`} - double quotes, no content, as HTML`, () => {
  let str = `<script defer=""/>`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-defer": [2, "xhtml"],
    },
  });
  equal(applyFixes(str, messages), `<script defer="defer"/>`, "14");
});

test(`15 - ${`\u001b[${34}m${`XHTML`}\u001b[${39}m`} - single quotes, no content, as HTML`, () => {
  let str = `<script defer=''/>`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-defer": [2, "xhtml"],
    },
  });
  equal(applyFixes(str, messages), `<script defer='defer'/>`, "15");
});

test(`16 - ${`\u001b[${34}m${`XHTML`}\u001b[${39}m`} - quotes with content missing, as HTML`, () => {
  let str = `<script defer='>`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-defer": [2, "xhtml"],
    },
  });
  equal(applyFixes(str, messages), `<script defer='defer'>`, "16");
});

test(`17 - ${`\u001b[${34}m${`XHTML`}\u001b[${39}m`} - equal missing, otherwise healthy HTML`, () => {
  let str = `<script defer"defer"/>`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-defer": [2, "xhtml"],
    },
  });
  equal(applyFixes(str, messages), `<script defer="defer"/>`, "17");
});

test(`18 - ${`\u001b[${34}m${`XHTML`}\u001b[${39}m`} - equal missing, otherwise healthy HTML`, () => {
  let str = `<script defer'defer'/>`;
  let linter = new Linter();
  let messages = linter.verify(str, {
    rules: {
      "attribute-validate-defer": [2, "xhtml"],
    },
  });
  equal(applyFixes(str, messages), `<script defer='defer'/>`, "18");
});

test.run();
