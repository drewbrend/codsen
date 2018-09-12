import test from "ava";
import e from "../dist/string-range-expander.esm";

// 00. THROWS.
// -----------------------------------------------------------------------------

test("00.01 - throws on Boolean input", t => {
  const err = t.throws(() => {
    e(true);
  });
  t.truthy(err.message.includes("THROW_ID_01"));
  t.truthy(err.message.includes("boolean"));
});

test("00.02 - throws on missing input", t => {
  const err = t.throws(() => {
    e();
  });
  t.truthy(err.message.includes("THROW_ID_01"));
  t.truthy(err.message.includes("missing completely"));
});

test("00.03 - throws on null input", t => {
  const err = t.throws(() => {
    e(null);
  });
  t.truthy(err.message.includes("THROW_ID_01"));
  t.truthy(err.message.includes("null"));
});

test("00.03 - throws on string input", t => {
  const err = t.throws(() => {
    e("zzz");
  });
  t.truthy(err.message.includes("THROW_ID_01"));
  t.truthy(err.message.includes("string"));
});

test("00.04 - throws on empty plain object", t => {
  const err = t.throws(() => {
    e({});
  });
  t.truthy(err.message.includes("THROW_ID_02"));
  t.truthy(err.message.includes("without any keys"));
});

test('00.05 - throws when "from" is not a number', t => {
  const err = t.throws(() => {
    e({
      str: "aaa",
      from: "0",
      to: 0
    });
  });
  t.truthy(err.message.includes("THROW_ID_03"));
});

test('00.06 - throws when "to" is not a number', t => {
  const err = t.throws(() => {
    e({
      str: "aaa",
      from: 0,
      to: "0"
    });
  });
  t.truthy(err.message.includes("THROW_ID_04"));
});

test('00.07 - throws when "from" is outside the str boundaries', t => {
  const err = t.throws(() => {
    e({
      str: "aaa",
      from: 10,
      to: 20
    });
  });
  t.truthy(err.message.includes("THROW_ID_05"));
});

test('00.08 - throws when "to" is way outside the str boundaries', t => {
  const err = t.throws(() => {
    e({
      str: "aaa",
      from: 0,
      to: 4
    });
  });
  t.truthy(err.message.includes("THROW_ID_06"));

  // but 3 (= str.length) is OK:
  t.notThrows(() => {
    e({
      str: "aaa",
      from: 0,
      to: 3
    });
  });
});

test("00.09 - throws when opts.extendToOneSide is unrecognised", t => {
  const err1 = t.throws(() => {
    e({
      str: "aaa",
      from: 1,
      to: 2,
      extendToOneSide: "zzz"
    });
  });
  t.truthy(err1.message.includes("THROW_ID_08"));

  const err2 = t.throws(() => {
    e({
      str: "aaa",
      from: 1,
      to: 2,
      extendToOneSide: null
    });
  });
  t.truthy(err2.message.includes("THROW_ID_08"));
});

// 01. BAU.
// -----------------------------------------------------------------------------

test("01.01 - nothing to expand", t => {
  // reference
  t.deepEqual(
    e({
      str: "a     b",
      from: 2,
      to: 5
    }),
    [2, 5],
    "01.01.01"
  );
  t.deepEqual(
    e({
      str: "aaaaaaaaaaaa",
      from: 2,
      to: 5
    }),
    [2, 5],
    "01.01.02"
  );
  t.deepEqual(
    e({
      str: "aaaaaaaaaaaa",
      from: 0,
      to: 5
    }),
    [0, 5],
    "01.01.03"
  );
  t.deepEqual(
    e({
      str: "aaaaaaaaaaaa",
      from: 2,
      to: 12
    }),
    [2, 12],
    "01.01.04"
  );
  t.deepEqual(
    e({
      str: "aaaaaaaaaaaa",
      from: 12,
      to: 12
    }),
    [12, 12],
    "01.01.05"
  );
  t.deepEqual(
    e({
      str: "aaaaaaaaaaaa",
      from: 2,
      to: 5,
      wipeAllWhitespaceOnLeft: true
    }),
    [2, 5],
    "01.01.06"
  );
});

test("01.02 - expanding from the middle of a gap", t => {
  t.deepEqual(
    e({
      str: "a     b",
      from: 3,
      to: 3
    }),
    [2, 5],
    "01.02.01"
  );
  t.deepEqual(
    e({
      str: "a     b",
      from: 2,
      to: 3
    }),
    [2, 5],
    "01.02.02"
  );
  t.deepEqual(
    e({
      str: "a     b",
      from: 3,
      to: 5
    }),
    [2, 5],
    "01.02.03"
  );
  t.deepEqual(
    e({
      str: "a     b",
      from: 1,
      to: 3
    }),
    [1, 5],
    "01.02.04"
  );
  t.deepEqual(
    e({
      str: "a     b",
      from: 3,
      to: 6
    }),
    [2, 6],
    "01.02.05"
  );
  t.deepEqual(
    e({
      str: "a     b",
      from: 3,
      to: 6,
      wipeAllWhitespaceOnLeft: false
    }),
    [2, 6],
    "01.02.06"
  );
  t.deepEqual(
    e({
      str: "a     b",
      from: 3,
      to: 4,
      wipeAllWhitespaceOnLeft: true
    }),
    [1, 5],
    "01.02.07"
  );
  t.deepEqual(
    e({
      str: "a     b",
      from: 3,
      to: 6,
      wipeAllWhitespaceOnLeft: true
    }),
    [1, 6],
    "01.02.08"
  );
  t.deepEqual(
    e({
      str: "a     b",
      from: 3,
      to: 4,
      wipeAllWhitespaceOnRight: true
    }),
    [2, 6],
    "01.02.09"
  );
  t.deepEqual(
    e({
      str: "a     b",
      from: 3,
      to: 6,
      wipeAllWhitespaceOnRight: true
    }),
    [2, 6],
    "01.02.10"
  );
  t.deepEqual(
    e({
      str: "a     b",
      from: 3,
      to: 6,
      wipeAllWhitespaceOnLeft: true,
      wipeAllWhitespaceOnRight: true
    }),
    [1, 6],
    "01.02.11"
  );
  t.deepEqual(
    e({
      str: "a     b",
      from: 1,
      to: 6,
      wipeAllWhitespaceOnLeft: true,
      wipeAllWhitespaceOnRight: true
    }),
    [1, 6],
    "01.02.12"
  );
  t.deepEqual(
    e({
      str: "a     b",
      from: 1,
      to: 6,
      wipeAllWhitespaceOnLeft: false,
      wipeAllWhitespaceOnRight: false
    }),
    [1, 6],
    "01.02.13"
  );
});

test("01.03 - starting point is touching the edge (non-whitespace) even though tight cropping is not enabled", t => {
  t.deepEqual(
    e({
      str: "a     b",
      from: 1,
      to: 3
    }),
    [1, 5],
    "01.03.01"
  );
  t.deepEqual(
    e({
      str: "a     b",
      from: 3,
      to: 6
    }),
    [2, 6],
    "01.03.02"
  );
  t.deepEqual(
    e({
      str: "a     b",
      from: 2,
      to: 6
    }),
    [2, 6],
    "01.03.03"
  );
  t.deepEqual(
    e({
      str: "a     b",
      from: 1,
      to: 6
    }),
    [1, 6],
    "01.03.04"
  );
});

test("01.02 - both ends are equal", t => {
  t.deepEqual(
    e({
      str: "ab",
      from: 1,
      to: 1
    }),
    [1, 1],
    "01.02.01"
  );
  t.deepEqual(
    e({
      str: "ab",
      from: 2,
      to: 2
    }),
    [2, 2],
    "01.02.02"
  );
});

// 02. opts.ifLeftSideIncludesThisThenCropTightly
// -----------------------------------------------------------------------------

test(`02.01 - ${`\u001b[${33}m${`opts.ifLeftSideIncludesThisThenCropTightly`}\u001b[${39}m`} - normal use, both sides extended`, t => {
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 3,
      to: 6,
      ifLeftSideIncludesThisThenCropTightly: ">"
    }),
    [2, 7],
    "02.01.01"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 2,
      to: 6,
      ifLeftSideIncludesThisThenCropTightly: ">"
    }),
    [2, 7],
    "02.01.02"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 3,
      to: 7,
      ifLeftSideIncludesThisThenCropTightly: ">"
    }),
    [2, 7],
    "02.01.03"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 2,
      to: 7,
      ifLeftSideIncludesThisThenCropTightly: ">"
    }),
    [2, 7],
    "02.01.04"
  );
});

test(`02.02 - ${`\u001b[${33}m${`opts.ifLeftSideIncludesThisThenCropTightly`}\u001b[${39}m`} - normal use, mismatching value`, t => {
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 5,
      to: 5,
      ifLeftSideIncludesThisThenCropTightly: "z"
    }),
    [3, 6],
    "02.02.01"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 4,
      to: 5,
      ifLeftSideIncludesThisThenCropTightly: "z"
    }),
    [3, 6],
    "02.02.02"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 3,
      to: 6,
      ifLeftSideIncludesThisThenCropTightly: "z"
    }),
    [3, 6],
    "02.02.03"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 2,
      to: 6,
      ifLeftSideIncludesThisThenCropTightly: "z"
    }),
    [2, 6],
    "02.02.04"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 3,
      to: 7,
      ifLeftSideIncludesThisThenCropTightly: "z"
    }),
    [3, 7],
    "02.02.05"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 2,
      to: 7,
      ifLeftSideIncludesThisThenCropTightly: "z"
    }),
    [2, 7],
    "02.02.06"
  );
});

test(`02.03 - ${`\u001b[${33}m${`opts.ifLeftSideIncludesThisThenCropTightly`}\u001b[${39}m`} - range within characters, no whitespace`, t => {
  t.deepEqual(
    e({
      str: "aaaaaaaaaaaaa",
      from: 5,
      to: 5,
      ifLeftSideIncludesThisThenCropTightly: "z"
    }),
    [5, 5],
    "02.03.01"
  );
  t.deepEqual(
    e({
      str: "aaaaaaaaaaaaa",
      from: 5,
      to: 5,
      ifLeftSideIncludesThisThenCropTightly: "a"
    }),
    [5, 5],
    "02.03.02"
  );
  t.deepEqual(
    e({
      str: "-aaaaaaaaaaaaa-",
      from: 5,
      to: 5,
      ifLeftSideIncludesThisThenCropTightly: "a"
    }),
    [5, 5],
    "02.03.03"
  );
});

// 03. opts.ifRightSideIncludesThisThenCropTightly
// -----------------------------------------------------------------------------

test(`03.01 - ${`\u001b[${33}m${`opts.ifRightSideIncludesThisThenCropTightly`}\u001b[${39}m`} - normal use, both sides extended`, t => {
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 3,
      to: 6,
      ifRightSideIncludesThisThenCropTightly: "<"
    }),
    [2, 7],
    "03.01.01"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 2,
      to: 6,
      ifRightSideIncludesThisThenCropTightly: "<"
    }),
    [2, 7],
    "03.01.02"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 3,
      to: 7,
      ifRightSideIncludesThisThenCropTightly: "<"
    }),
    [2, 7],
    "03.01.03"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 2,
      to: 7,
      ifRightSideIncludesThisThenCropTightly: "<"
    }),
    [2, 7],
    "03.01.04"
  );
});

test(`03.02 - ${`\u001b[${33}m${`opts.ifRightSideIncludesThisThenCropTightly`}\u001b[${39}m`} - normal use, mismatching value`, t => {
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 5,
      to: 5,
      ifRightSideIncludesThisThenCropTightly: "z"
    }),
    [3, 6],
    "03.02.01"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 4,
      to: 5,
      ifRightSideIncludesThisThenCropTightly: "z"
    }),
    [3, 6],
    "03.02.02"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 3,
      to: 6,
      ifRightSideIncludesThisThenCropTightly: "z"
    }),
    [3, 6],
    "03.02.03"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 2,
      to: 6,
      ifRightSideIncludesThisThenCropTightly: "z"
    }),
    [2, 6],
    "03.02.04"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 3,
      to: 7,
      ifRightSideIncludesThisThenCropTightly: "z"
    }),
    [3, 7],
    "03.02.05"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 2,
      to: 7,
      ifRightSideIncludesThisThenCropTightly: "z"
    }),
    [2, 7],
    "03.02.06"
  );
});

test(`03.03 - ${`\u001b[${33}m${`opts.ifRightSideIncludesThisThenCropTightly`}\u001b[${39}m`} - range within characters, no whitespace`, t => {
  t.deepEqual(
    e({
      str: "aaaaaaaaaaaaa",
      from: 5,
      to: 5,
      ifRightSideIncludesThisThenCropTightly: "z"
    }),
    [5, 5],
    "03.03.01"
  );
  t.deepEqual(
    e({
      str: "aaaaaaaaaaaaa",
      from: 5,
      to: 5,
      ifRightSideIncludesThisThenCropTightly: "a"
    }),
    [5, 5],
    "03.03.02"
  );
  t.deepEqual(
    e({
      str: "-aaaaaaaaaaaaa-",
      from: 5,
      to: 5,
      ifRightSideIncludesThisThenCropTightly: "a"
    }),
    [5, 5],
    "03.03.03"
  );
});

// 04. combos with opts.if***SideIncludesThisCropItToo
// -----------------------------------------------------------------------------

test(`04.01 - ${`\u001b[${33}m${`opts.ifLeftSideIncludesThisCropItToo`}\u001b[${39}m`} - combo with tight crop`, t => {
  t.deepEqual(
    e({
      str: "something>\n\t    zzzz <here",
      from: 16,
      to: 20,
      ifRightSideIncludesThisThenCropTightly: "<"
    }),
    [10, 21],
    "04.01.01 - control #1"
  );
  t.deepEqual(
    e({
      str: "something>\n\t    zzzz <here",
      from: 16,
      to: 20,
      ifLeftSideIncludesThisCropItToo: "\n\t"
    }),
    [11, 20],
    "04.01.02 - control #2"
  );
  t.deepEqual(
    e({
      str: "something>\n\t    zzzz <here",
      from: 16,
      to: 20,
      ifLeftSideIncludesThisCropItToo: "\n\t",
      ifRightSideIncludesThisThenCropTightly: "<"
    }),
    [10, 21],
    "04.01.03"
  );
  t.deepEqual(
    e({
      str: "something> a    zzzz <here",
      from: 16,
      to: 20,
      ifRightSideIncludesThisThenCropTightly: "<",
      ifLeftSideIncludesThisThenCropTightly: ">"
    }),
    [12, 21],
    "04.01.04"
  );
  t.deepEqual(
    e({
      str: "something> a    zzzz <here",
      from: 16,
      to: 20,
      ifRightSideIncludesThisThenCropTightly: "<",
      ifLeftSideIncludesThisCropItToo: "a",
      ifLeftSideIncludesThisThenCropTightly: ">"
    }),
    [10, 21],
    "04.01.05"
  );
  t.deepEqual(
    e({
      str: "something> a    zzzz <here",
      from: 16,
      to: 20,
      ifLeftSideIncludesThisCropItToo: "a",
      ifLeftSideIncludesThisThenCropTightly: ">"
    }),
    [10, 21],
    "04.01.06"
  );
});

// 05. extendToOneSide
// -----------------------------------------------------------------------------

test(`05.01 - ${`\u001b[${33}m${`opts.extendToOneSide`}\u001b[${39}m`} - one side only`, t => {
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 4,
      to: 5
    }),
    [3, 6],
    "05.01.01 - default, a control"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 4,
      to: 5,
      extendToOneSide: false
    }),
    [3, 6],
    "05.01.02 - hardcoded default"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 4,
      to: 5,
      extendToOneSide: "right"
    }),
    [4, 6],
    "05.01.03 - right only"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 4,
      to: 5,
      extendToOneSide: "left"
    }),
    [3, 5],
    "05.01.04 - left only"
  );
});

// 06. opts.wipeAllWhitespaceOnLeft & opts.wipeAllWhitespaceOnRight
// -----------------------------------------------------------------------------

test(`06.01 - ${`\u001b[${33}m${`opts.wipeAllWhitespaceOnLeft`}\u001b[${39}m`} - extends to both sides`, t => {
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 4,
      to: 5
    }),
    [3, 6],
    "06.01.01 - a control"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 4,
      to: 5,
      wipeAllWhitespaceOnLeft: true
    }),
    [2, 6],
    "06.01.02 - left"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 4,
      to: 5,
      wipeAllWhitespaceOnRight: true
    }),
    [3, 7],
    "06.01.03 - right"
  );
  t.deepEqual(
    e({
      str: "a>     <b",
      from: 4,
      to: 5,
      wipeAllWhitespaceOnLeft: true,
      wipeAllWhitespaceOnRight: true
    }),
    [2, 7],
    "06.01.04 - both"
  );
});

// -----------------------------------------------------------------------------

//             ▄▄ ▄████▄▐▄▄▄▌
//            ▐  ████▀███▄█▄▌
//          ▐ ▌  █▀▌  ▐▀▌▀█▀
//           ▀   ▌ ▌  ▐ ▌
//               ▌ ▌  ▐ ▌
//               █ █  ▐▌█ me eatz bugz
