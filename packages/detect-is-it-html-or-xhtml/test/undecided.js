import { test } from "uvu";
// eslint-disable-next-line no-unused-vars
import { equal, is, ok, throws, type, not, match } from "uvu/assert";

import { detectIsItHTMLOrXhtml as detect } from "../dist/detect-is-it-html-or-xhtml.esm.js";

// ==============================
// Undecided and can't-identify cases
// ==============================

test("01 - no tags at all, text string only", () => {
  equal(
    detect(
      "fhgkd  gjflkgjhlfjl gh;kj;lghj;jklkdjgj hsdkffj jagfg hdkghjkdfhg khkfg sjdgfg gfjdsgfjdhgj kf gfjhk fgkj"
    ),
    null,
    "01"
  );
});

test("02 - unrecognised meta tag - counts as HTML", () => {
  equal(detect("<!DOCTYPE rubbish>"), "html", "02");
});

test("03 - no meta tag, no single tags", () => {
  equal(detect("<table><tr><td>text</td></tr></table>"), null, "03");
});

test("04 - missing input", () => {
  equal(detect(), null, "04");
});

test("05 - input is not string - throws", () => {
  throws(() => {
    detect({
      a: "a",
    });
  }, /THROW_ID_01/g);
});

test.run();
