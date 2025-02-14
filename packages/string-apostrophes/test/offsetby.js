import { test } from "uvu";
// eslint-disable-next-line no-unused-vars
import { equal, is, ok, throws, type, not, match } from "uvu/assert";

import { convertOne } from "../dist/string-apostrophes.esm.js";

const leftSingleQuote = "\u2018";
// const rightSingleQuote = "\u2019";
// const leftDoubleQuote = "\u201C";
// const rightDoubleQuote = "\u201D";
// const singlePrime = "\u2032";
// const doublePrime = "\u2033";

// offset is needed to bypass characters we already fixed - it happens for
// example with nested quotes - we'd fix many in one go and we need to skip
// further processing, otherwise those characters would get processed
// multiple times

// offsetBy increments the index of external iterator

test(`01 - ${`\u001b[${33}m${`offset`}\u001b[${39}m`} - let's skip single quotes`, () => {
  let str = `Rock ${leftSingleQuote}n${leftSingleQuote} roll`;
  let gathered = [];
  let res = convertOne(str, {
    from: 5,
    to: 6,
    convertApostrophes: 0,
    convertEntities: 0,
    // offset will be called once when it enters first quote of 'n'
    offsetBy: (idx) => {
      // 2 will be passed, meaning "skip by two indexes"
      gathered.push(idx);
    },
  });

  // console.log(
  //   `036 ${`\u001b[${33}m${`gathered`}\u001b[${39}m`} = ${JSON.stringify(
  //     gathered,
  //     null,
  //     4
  //   )}`
  // );
  equal(res, [[5, 8, `'n'`]], "01.01");
  equal(gathered, [2], "01.02");
});

test.run();
