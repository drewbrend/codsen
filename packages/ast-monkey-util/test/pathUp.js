import { test } from "uvu";
// eslint-disable-next-line no-unused-vars
import { equal, is, ok, throws, type, not, match } from "uvu/assert";

import { pathUp } from "../dist/ast-monkey-util.esm.js";

test(`01 - ${`\u001b[${34}m${`pathUp`}\u001b[${39}m`} - empty str`, () => {
  equal(pathUp(""), "0", "01");
});

test(`02 - ${`\u001b[${34}m${`pathUp`}\u001b[${39}m`} - upon first element`, () => {
  equal(pathUp("0"), "0", "02");
});

test(`03 - ${`\u001b[${34}m${`pathUp`}\u001b[${39}m`} - upon second element`, () => {
  equal(pathUp("1"), "0", "03");
});

test(`04 - ${`\u001b[${34}m${`pathUp`}\u001b[${39}m`} - non-numeric`, () => {
  equal(pathUp("1.z"), "0", "04");
});

test(`05 - ${`\u001b[${34}m${`pathUp`}\u001b[${39}m`} - usual`, () => {
  equal(pathUp("9.children.3"), "9", "05");
});

test(`06 - ${`\u001b[${34}m${`pathUp`}\u001b[${39}m`} - usual, two levels`, () => {
  equal(pathUp("9.children.1.children.2"), "9.children.1", "06");
});

test.run();
