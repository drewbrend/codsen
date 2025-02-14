import { test } from "uvu";
// eslint-disable-next-line no-unused-vars
import { equal, is, ok, throws, type, not, match } from "uvu/assert";

import { stripHtml } from "./util/noLog.js";

// punctuation
// -----------------------------------------------------------------------------

test("01 - punctuation after tag - simplified, question mark", () => {
  let { result, ranges } = stripHtml("a<b>?</b> c");
  equal(result, "a? c", "01.01");
  equal(
    ranges,
    [
      [1, 4],
      [5, 10, " "],
    ],
    "01.02"
  );
});

test("02 - punctuation after tag - simplified, question mark", () => {
  equal(
    stripHtml("a<b>?</b> c", { trimOnlySpaces: true }).result,
    "a? c",
    "02"
  );
});

test("03 - punctuation after tag - simplified, question mark", () => {
  equal(
    stripHtml("a<b>?</b> c", { dumpLinkHrefsNearby: { enabled: true } }).result,
    "a? c",
    "03"
  );
});

test("04 - punctuation after tag - simplified, question mark", () => {
  equal(
    stripHtml("a<b>?</b> c", { stripTogetherWithTheirContents: false }).result,
    "a? c",
    "04"
  );
});

test("05 - punctuation after tag - simplified, question mark", () => {
  equal(stripHtml("a<b>?</b> c", { ignoreTags: ["zzz"] }).result, "a? c", "05");
});

test("06 - punctuation after tag - simplified, question mark", () => {
  equal(stripHtml("a<b>?</b> c", { ignoreTags: null }).result, "a? c", "06");
});

test("07 - punctuation after tag - simplified, exclamation mark", () => {
  let { ranges, result } = stripHtml("a<b>!</b> c");
  equal(ranges, [
    [1, 4],
    [5, 10, " "],
  ]);
  equal(result, "a! c", "07");
});

test("08 - punctuation after tag - simplified, exclamation mark", () => {
  let { result, ranges } = stripHtml("a<b>!</b> c", { trimOnlySpaces: true });
  equal(result, "a! c");
  equal(ranges, [
    [1, 4],
    [5, 10, " "],
  ]);
});

test("09 - punctuation after tag - simplified, exclamation mark", () => {
  let { result, ranges } = stripHtml(" \t a<b>!</b> c \t ", {
    trimOnlySpaces: true,
  });
  equal(result, "\t a! c \t");
  equal(ranges, [
    [0, 1],
    [4, 7],
    [8, 13, " "],
    [16, 17],
  ]);
});

test("10 - punctuation after tag - simplified, exclamation mark", () => {
  equal(
    stripHtml("a<b>!</b> c", { dumpLinkHrefsNearby: { enabled: true } }).result,
    "a! c",
    "10"
  );
});

test("11 - punctuation after tag - simplified, exclamation mark", () => {
  equal(
    stripHtml("a<b>!</b> c", { stripTogetherWithTheirContents: false }).result,
    "a! c",
    "11"
  );
});

test("12 - punctuation after tag - simplified, exclamation mark", () => {
  let { result, ranges } = stripHtml("a<b>!</b> c", { ignoreTags: ["zzz"] });
  equal(result, "a! c");
  equal(ranges, [
    [1, 4],
    [5, 10, " "],
  ]);
});

test("13 - punctuation after tag - simplified, exclamation mark", () => {
  equal(stripHtml("a<b>!</b>c").result, "a! c", "13");
});

test("14 - punctuation after tag - simplified, ellipsis", () => {
  let { result, ranges } = stripHtml("a<b>...</b> c");
  equal(result, "a... c");
  equal(ranges, [
    [1, 4],
    [7, 12, " "],
  ]);
});

test("15 - punctuation after tag - simplified, ellipsis", () => {
  let { result, ranges } = stripHtml("a<b>...</b> c", { trimOnlySpaces: true });
  equal(result, "a... c");
  equal(ranges, [
    [1, 4],
    [7, 12, " "],
  ]);
});

test("16 - punctuation after tag - simplified, ellipsis", () => {
  let { result, ranges } = stripHtml("a<b>...</b> c", {
    dumpLinkHrefsNearby: { enabled: true },
  });
  equal(result, "a... c");
  equal(ranges, [
    [1, 4],
    [7, 12, " "],
  ]);
});

test("17 - punctuation after tag - simplified, ellipsis", () => {
  let { result, ranges } = stripHtml("a<b>...</b> c", {
    stripTogetherWithTheirContents: false,
  });
  equal(result, "a... c");
  equal(ranges, [
    [1, 4],
    [7, 12, " "],
  ]);
});

test("18 - punctuation after tag - simplified, ellipsis", () => {
  let { result, ranges } = stripHtml("a<b>...</b> c", { ignoreTags: ["zzz"] });
  equal(result, "a... c");
  equal(ranges, [
    [1, 4],
    [7, 12, " "],
  ]);
});

test("19 - punctuation after tag - real-life", () => {
  // control
  equal(
    stripHtml(
      '      &nbsp;     Hi! Would you like to <a href="/">shop now</a>?      &nbsp;      '
    ).result,
    "Hi! Would you like to shop now?",
    "19"
  );
});

test("20 - punctuation after tag - real-life", () => {
  equal(
    stripHtml(
      "      &nbsp;     Hi! Please <div>shop now</div>!      &nbsp;      "
    ).result,
    "Hi! Please shop now!",
    "20"
  );
});

test("21 - punctuation after tag - real-life", () => {
  // opts.trimOnlySpaces
  equal(
    stripHtml(
      '      &nbsp;     Hi! Would you like to <a href="/">shop now</a>?      &nbsp;      ',
      {
        trimOnlySpaces: true,
      }
    ).result,
    "\u00A0     Hi! Would you like to shop now?      \u00A0",
    "21"
  );
});

test("22 - punctuation after tag - real-life", () => {
  equal(
    stripHtml(
      "      &nbsp;     Hi! Please <div>shop now</div>!      &nbsp;      ",
      { trimOnlySpaces: true }
    ).result,
    "\u00A0     Hi! Please shop now!      \u00A0",
    "22"
  );
});

test.run();
