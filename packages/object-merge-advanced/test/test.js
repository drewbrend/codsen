/* eslint max-len:0 */

import { test } from "uvu";
// eslint-disable-next-line no-unused-vars
import { equal, is, ok, throws, type, not, match } from "uvu/assert";
import clone from "lodash.clonedeep";

import { mergeAdvanced as m } from "../dist/object-merge-advanced.esm.js";
import { mergeAdvanced } from "./util.js";

// There should be two (or more) tests in each, with input args swapped, in order to
// guarantee that there are no sneaky things happening when argument order is backwards

// ==============================
// Edge cases
// ==============================

test("01 - missing second arg", () => {
  equal(
    m({
      a: "a",
    }),
    {
      a: "a",
    },
    "01"
  );
});

test("02 - missing first arg", () => {
  equal(
    m(undefined, {
      a: "a",
    }),
    {
      a: "a",
    },
    "02.01"
  );
  equal(
    m(null, {
      a: "a",
    }),
    {
      a: "a",
    },
    "02.02"
  );
});

test("03 - both args missing - throws", () => {
  throws(() => {
    m();
  }, /THROW_ID_01/g);
});

test("04", () => {
  equal(mergeAdvanced(equal, null, null), null, "04");
});

test("05", () => {
  equal(mergeAdvanced(equal, undefined, undefined), undefined, "05");
});

test("06", () => {
  equal(mergeAdvanced(equal, true, false), true, "06");
});

test("07", () => {
  equal(m(["a"], ["b"]), ["a", "b"], "07");
});

test("08", () => {
  let returnsAlwaysFirstOne = (i1) => i1;
  equal(m(["a"], ["b"], { cb: returnsAlwaysFirstOne }), ["a"], "08");
});

test("09", () => {
  let returnsAlwaysSecondOne = (_i1, i2) => i2;
  equal(m(["a"], ["b"], { cb: returnsAlwaysSecondOne }), ["b"], "09");
});

test("10", () => {
  equal(mergeAdvanced(equal, [], []), [], "10");
});

// ==============================
// Input argument mutation
// ==============================

test("11 - testing for mutation of the input args", () => {
  let obj1 = {
    a: "a",
    b: "b",
  };
  let originalObj1 = clone(obj1);
  let obj2 = {
    c: "c",
    d: "d",
  };
  m(obj1, obj2);
  equal(obj1, originalObj1, "11");
});

// ================================================
// does not introduce non-unique values into arrays
// ================================================

test("12 - arrays, checking against dupes being added", () => {
  equal(
    m(
      {
        b: "b",
        a: [
          {
            x1: "x1",
            x2: "x2",
            x3: "x3",
          },
          {
            y1: "y1",
            y2: "y2",
          },
        ],
      },
      {
        a: [
          {
            x1: "x1",
          },
          {
            y1: "y1",
            y2: "y2",
          },
        ],
      }
    ),
    {
      a: [
        {
          x1: "x1",
          x2: "x2",
          x3: "x3",
        },
        {
          y1: "y1",
          y2: "y2",
        },
      ],
      b: "b",
    },
    "12"
  );
});

test("13 - array merging + cb", () => {
  let returnsAlwaysFirstOne = (i1) => i1;
  equal(
    m(
      {
        b: "b",
        a: [
          {
            x1: "x1",
            x2: "x2",
            x3: "x3",
          },
          {
            y1: "y1",
            y2: "y2",
          },
        ],
      },
      {
        a: [
          {
            x1: "x1",
          },
          {
            y1: "y1",
            y2: "y2",
          },
        ],
      },
      {
        cb: returnsAlwaysFirstOne,
      }
    ),
    {
      b: "b",
      a: [
        {
          x1: "x1",
          x2: "x2",
          x3: "x3",
        },
        {
          y1: "y1",
          y2: "y2",
        },
      ],
    },
    "13"
  );
});

test("14 - array merging + cb", () => {
  let returnsAlwaysSecondOne = (_i1, i2) => i2;
  equal(
    m(
      {
        b: "b",
        a: [
          {
            x1: "x1",
            x2: "x2",
            x3: "x3",
          },
          {
            y1: "y1",
            y2: "y2",
          },
        ],
      },
      {
        a: [
          {
            x1: "x1",
          },
          {
            y1: "y1",
            y2: "y2",
          },
        ],
      },
      {
        cb: returnsAlwaysSecondOne,
      }
    ),
    {
      a: [
        {
          x1: "x1",
        },
        {
          y1: "y1",
          y2: "y2",
        },
      ],
    },
    "14"
  );
});

test("15 - arrays, checking against dupes being added", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            x1: "x1",
            x2: "x2",
            x3: "x3",
          },
          {
            y1: "y1",
            y2: "y2",
          },
        ],
        b: "b",
      },
      {
        a: [
          {
            x1: "x1",
          },
          {
            y1: "y1",
            y2: "y2",
          },
        ],
      }
    ),
    {
      a: [
        {
          x1: "x1",
          x2: "x2",
          x3: "x3",
        },
        {
          y1: "y1",
          y2: "y2",
        },
      ],
      b: "b",
    },
    "15"
  );
});

// ================================================
// does not introduce non-unique values into arrays
// ================================================

test("16 - merges objects within arrays if keyset and position within array matches", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            b: "b1",
            c: "c1",
          },
          {
            x: "x1",
            y: "y1",
          },
        ],
      },
      {
        a: [
          {
            b: "b2",
            c: "c2",
          },
          {
            x: "x2",
            y: "y2",
          },
        ],
      }
    ),
    {
      a: [
        {
          b: "b2",
          c: "c2",
        },
        {
          x: "x2",
          y: "y2",
        },
      ],
    },
    "16"
  );
});

test("17 - concats instead if objects within arrays are in a wrong order", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            x: "x1",
            y: "y1",
          },
          {
            b: "b1",
            c: "c1",
          },
        ],
      },
      {
        a: [
          {
            b: "b2",
            c: "c2",
          },
          {
            x: "x2",
            y: "y2",
          },
        ],
      }
    ),
    {
      a: [
        {
          x: "x1",
          y: "y1",
        },
        {
          b: "b2",
          c: "c2",
        },
        {
          b: "b1",
          c: "c1",
        },
        {
          x: "x2",
          y: "y2",
        },
      ],
    },
    "17"
  );
});

test("18 - concats instead if objects within arrays are in a wrong order", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            b: "b1",
            c: "c1",
          },
          {
            n: "n1",
            m: "m1",
          },
          {
            x: "x1",
            y: "y1",
          },
        ],
      },
      {
        a: [
          {
            b: "b2",
            c: "c2",
          },
          {
            x: "x2",
            y: "y2",
          },
        ],
      }
    ),
    {
      a: [
        {
          b: "b2",
          c: "c2",
        },
        {
          n: "n1",
          m: "m1",
        },
        {
          x: "x2",
          y: "y2",
        },
        {
          x: "x1",
          y: "y1",
        },
      ],
    },
    "18"
  );
});

test("19 - merges objects within arrays, key sets are a subset of one another", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            b: "b1",
          },
          {
            x: "x1",
            y: "y1",
          },
        ],
      },
      {
        a: [
          {
            b: "b2",
            c: "c2",
          },
          {
            x: "x2",
          },
        ],
      }
    ),
    {
      a: [
        {
          b: "b2",
          c: "c2",
        },
        {
          x: "x2",
          y: "y1",
        },
      ],
    },
    "19"
  );
});

test("20 - merges objects within arrays, subset and no match, mixed case", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            c: "c1",
          },
          {
            x: "x1",
            y: "y1",
          },
        ],
      },
      {
        a: [
          {
            b: "b2",
            c: "c2",
          },
          {
            m: "m3",
            n: "n3",
          },
        ],
      }
    ),
    {
      a: [
        {
          b: "b2",
          c: "c2",
        },
        {
          x: "x1",
          y: "y1",
        },
        {
          m: "m3",
          n: "n3",
        },
      ],
    },
    "20"
  );
});

test("21 - opts.mergeObjectsOnlyWhenKeysetMatches", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            a: "a",
            b: "b",
          },
          {
            c: "c",
            d: "d",
          },
        ],
      },
      {
        a: [
          {
            k: "k",
            l: "l",
          },
          {
            m: "m",
            n: "n",
          },
        ],
      }
    ),
    {
      a: [
        {
          a: "a",
          b: "b",
        },
        {
          k: "k",
          l: "l",
        },
        {
          c: "c",
          d: "d",
        },
        {
          m: "m",
          n: "n",
        },
      ],
    },
    "21.01 - mergeObjectsOnlyWhenKeysetMatches = default"
  );
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            a: "a",
            b: "b",
          },
          {
            c: "c",
            d: "d",
          },
        ],
      },
      {
        a: [
          {
            k: "k",
            l: "l",
          },
          {
            m: "m",
            n: "n",
          },
        ],
      },
      {
        mergeObjectsOnlyWhenKeysetMatches: true,
      }
    ),
    {
      a: [
        {
          a: "a",
          b: "b",
        },
        {
          k: "k",
          l: "l",
        },
        {
          c: "c",
          d: "d",
        },
        {
          m: "m",
          n: "n",
        },
      ],
    },
    "21.02 - mergeObjectsOnlyWhenKeysetMatches = true"
  );
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            a: "a",
            b: "b",
          },
          {
            c: "c",
            d: "d",
          },
        ],
      },
      {
        a: [
          {
            k: "k",
            l: "l",
          },
          {
            m: "m",
            n: "n",
          },
        ],
      },
      {
        mergeObjectsOnlyWhenKeysetMatches: false,
      }
    ),
    {
      a: [
        {
          a: "a",
          k: "k",
          b: "b",
          l: "l",
        },
        {
          c: "c",
          m: "m",
          d: "d",
          n: "n",
        },
      ],
    },
    "21.03 - mergeObjectsOnlyWhenKeysetMatches = false"
  );
});

test("22 - README example: opts.mergeObjectsOnlyWhenKeysetMatches", () => {
  let obj1 = {
    a: [
      {
        a: "a",
        b: "b",
        yyyy: "yyyy",
      },
    ],
  };

  let obj2 = {
    a: [
      {
        xxxx: "xxxx",
        b: "b",
        c: "c",
      },
    ],
  };

  equal(
    mergeAdvanced(equal, obj1, obj2),
    {
      a: [
        {
          a: "a",
          b: "b",
          yyyy: "yyyy",
        },
        {
          xxxx: "xxxx",
          b: "b",
          c: "c",
        },
      ],
    },
    "22.01"
  );

  equal(
    mergeAdvanced(equal, obj1, obj2, {
      mergeObjectsOnlyWhenKeysetMatches: false,
    }),
    {
      a: [
        {
          a: "a",
          b: "b",
          yyyy: "yyyy",
          xxxx: "xxxx",
          c: "c",
        },
      ],
    },
    "22.02"
  );
});

// ==============================
// 06. Real world tests
// ==============================

test("23 - real world use case", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            b: "b",
            c: false,
            d: [
              {
                e: false,
                f: false,
              },
            ],
          },
        ],
        g: false,
        h: [
          {
            i: "i",
          },
        ],
        j: "j",
      },
      {
        a: [
          {
            b: {
              b2: "b2",
            },
            c: false,
            d: [
              {
                e: false,
                f: false,
              },
            ],
          },
        ],
        g: false,
        h: [
          {
            i: "i",
          },
        ],
        j: "j",
      }
    ),
    {
      a: [
        {
          b: {
            b2: "b2",
          },
          c: false,
          d: [
            {
              e: false,
              f: false,
            },
          ],
        },
      ],
      g: false,
      h: [
        {
          i: "i",
        },
      ],
      j: "j",
    },
    "23"
  );
});

test("24 - real world use case, mini", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            b: "b",
            d: [
              {
                f: false,
              },
            ],
          },
        ],
      },
      {
        a: [
          {
            b: {
              b2: "b2",
            },
            d: [
              {
                f: false,
              },
            ],
          },
        ],
      }
    ),
    {
      a: [
        {
          b: {
            b2: "b2",
          },
          d: [
            {
              f: false,
            },
          ],
        },
      ],
    },
    "24"
  );
});

// ==============================
// 07. Merging arrays
// ==============================

test("25 - merges two arrays of equal length", () => {
  equal(
    mergeAdvanced(equal, ["a", "b", "c"], ["d", "e", "f"]),
    ["a", "d", "b", "e", "c", "f"],
    "25"
  );
});

test("26 - merges two arrays of different length", () => {
  equal(
    mergeAdvanced(equal, ["a", "b", "c", "d"], ["e", "f"]),
    ["a", "e", "b", "f", "c", "d"],
    "26.01"
  );
  equal(
    mergeAdvanced(equal, ["a", "b"], ["d", "e", "f", "g"]),
    ["a", "d", "b", "e", "f", "g"],
    "26.02"
  );
});

test("27 - merges non-empty array with an empty array", () => {
  equal(
    mergeAdvanced(equal, ["a", "b", "c", "d"], []),
    ["a", "b", "c", "d"],
    "27.01"
  );
  equal(
    mergeAdvanced(equal, [], ["d", "e", "f", "g"]),
    ["d", "e", "f", "g"],
    "27.02"
  );
  equal(
    mergeAdvanced(equal, ["a", "b", "c", "d"], {}),
    ["a", "b", "c", "d"],
    "27.03"
  );
  equal(
    mergeAdvanced(equal, {}, ["d", "e", "f", "g"]),
    ["d", "e", "f", "g"],
    "27.04"
  );
  equal(
    mergeAdvanced(equal, ["a", "b", "c", "d"], ""),
    ["a", "b", "c", "d"],
    "27.05"
  );
  equal(
    mergeAdvanced(equal, "", ["d", "e", "f", "g"]),
    ["d", "e", "f", "g"],
    "27.06"
  );
});

// ==============================
// 08. Merging arrays
// ==============================

test("28 - arrays in objects", () => {
  equal(
    mergeAdvanced(equal, { a: ["b", "c"] }, { d: ["e", "f"] }),
    {
      a: ["b", "c"],
      d: ["e", "f"],
    },
    "28"
  );
});

test("29 - arrays in objects, deeper", () => {
  equal(
    mergeAdvanced(equal, { a: ["b", "c"] }, { a: ["e", "f"] }),
    {
      a: ["b", "e", "c", "f"],
    },
    "29"
  );
});

test("30 - objects in arrays in objects", () => {
  equal(
    mergeAdvanced(equal, { a: [{ b: "b" }] }, { a: [{ c: "c" }] }),
    {
      a: [{ b: "b" }, { c: "c" }],
    },
    "30"
  );
});

test("31 - objects in arrays in objects", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        a: [{ b: "b", c: ["d1"] }],
      },
      {
        a: [{ b: "d", c: ["d2"] }],
      }
    ),
    {
      a: [{ b: "d", c: ["d1", "d2"] }],
    },
    "31.01 - default"
  );
  equal(
    mergeAdvanced(
      equal,
      {
        a: [{ b: "b", c: ["d1"] }],
      },
      {
        a: [{ b: "d", c: ["d2"] }],
      },
      {
        mergeArraysContainingStringsToBeEmpty: true,
      }
    ),
    {
      a: [{ b: "d", c: [] }],
    },
    "31.02 - arrays with strings merged into empty arrays"
  );
});

// ==============================
// 09. Various
// ==============================

test("32 - empty string vs boolean #58", () => {
  equal(mergeAdvanced(equal, "", true), "", "32.01");
  equal(mergeAdvanced(equal, true, ""), "", "32.02");
});

test("33 - empty string vs undefined #59", () => {
  equal(mergeAdvanced(equal, "", null), "", "33.01");
  equal(mergeAdvanced(equal, null, ""), "", "33.02");
});

test("34 - empty string vs undefined #60", () => {
  equal(mergeAdvanced(equal, "", undefined), "", "34.01");
  equal(mergeAdvanced(equal, undefined, ""), "", "34.02");
});

test("35 - number - #81-90", () => {
  equal(mergeAdvanced(equal, 1, ["a"]), ["a"], "35.01");
  equal(mergeAdvanced(equal, ["a"], 1), ["a"], "35.02");
  equal(mergeAdvanced(equal, 1, "a"), "a", "35.03");
  equal(mergeAdvanced(equal, "a", 1), "a", "35.04");
  equal(mergeAdvanced(equal, [], 1), 1, "35.05");
  equal(mergeAdvanced(equal, 1, []), 1, "35.06");
});

test("36 - case #90 cb", () => {
  equal(
    mergeAdvanced(equal, [], 1, {
      cb: (inp1) => {
        return inp1;
      },
    }),
    [],
    "36.01"
  );
  equal(
    mergeAdvanced(equal, [], 1, {
      cb: (inp1, inp2) => {
        return inp2;
      },
    }),
    1,
    "36.02"
  );
});

test("37 - empty string vs undefined #60", () => {
  equal(mergeAdvanced(equal, "", undefined), "", "37.01");
  equal(mergeAdvanced(equal, undefined, ""), "", "37.02");
});

// ==============================
// 10. opts.ignoreKeys
// ==============================

test("38 - \u001b[33mOPTS\u001b[39m - opts.ignoreKeys - basic cases", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        a: "b",
        k: "l",
      },
      {
        a: ["c"],
        m: "n",
      }
    ),
    {
      a: ["c"],
      k: "l",
      m: "n",
    },
    "38.01 - #1, forward"
  );
  equal(
    mergeAdvanced(
      equal,
      {
        a: ["c"],
        m: "n",
      },
      {
        a: "b",
        k: "l",
      }
    ),
    {
      a: ["c"],
      k: "l",
      m: "n",
    },
    "38.02 - #1, backward"
  );
  equal(
    mergeAdvanced(
      equal,
      {
        a: "b",
        k: "l",
      },
      {
        a: ["c"],
        m: "n",
      },
      {
        ignoreKeys: ["a"],
      }
    ),
    {
      a: "b",
      k: "l",
      m: "n",
    },
    "38.03 - #2, forward, ignoreKeys as array"
  );
  equal(
    mergeAdvanced(
      equal,
      {
        a: ["c"],
        m: "n",
      },
      {
        a: "b",
        k: "l",
      },
      {
        ignoreKeys: ["a"],
      }
    ),
    {
      a: ["c"],
      k: "l",
      m: "n",
    },
    "38.04 - #2, backward, ignoreKeys as array"
  );
  //
  // more array vs. array clashes:
  //
  equal(
    mergeAdvanced(
      equal,
      {
        a: ["b", "c", "d"],
        k: "l",
      },
      {
        a: ["c", "d", "e"],
        m: "n",
      },
      {
        concatInsteadOfMerging: false,
      }
    ),
    {
      a: ["b", "c", "d", "e"],
      k: "l",
      m: "n",
    },
    "38.05"
  );
});

test("39 - \u001b[33mOPTS\u001b[39m - opts.ignoreKeys - multiple keys ignored, multiple merged", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        a: "b",
        d: ["e"],
        k: "l",
        p: 1,
        r: "",
        equal: "u",
      },
      {
        a: ["c"],
        d: { f: "g" },
        m: "n",
        p: 2,
        r: "zzz",
        equal: ["v"],
      },
      {
        ignoreKeys: ["a", "p", "r"],
      }
    ),
    {
      a: "b",
      d: ["e"],
      k: "l",
      m: "n",
      p: 1,
      r: "",
      equal: ["v"],
    },
    "39"
  );
});

test("40 - \u001b[33mOPTS\u001b[39m - opts.ignoreKeys - wildcards", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        something: "a",
        anything: "b",
        everything: "c",
      },
      {
        something: ["a"],
        anything: ["b"],
        everything: "d",
      },
      {
        ignoreKeys: ["*thing"],
      }
    ),
    {
      something: "a",
      anything: "b",
      everything: "c",
    },
    "40"
  );
});

test("41 - \u001b[33mOPTS\u001b[39m - opts.ignoreKeys - wildcard, but not found", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        something: "a",
        anything: "b",
        everything: "c",
      },
      {
        something: ["a"],
        anything: ["b"],
        everything: "d",
      },
      {
        ignoreKeys: ["*z*"],
      }
    ),
    {
      something: ["a"],
      anything: ["b"],
      everything: "d",
    },
    "41"
  );
});

// ==============================
// 11. opts.hardMergeKeys
// ==============================

test("42 - \u001b[33mOPTS\u001b[39m - opts.hardMergeKeys", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        a: "b",
        d: ["e"],
        k: "l",
        p: 1,
        r: "",
        equal: { u: "u" },
      },
      {
        a: ["c"],
        d: { f: "g" },
        m: "n",
        p: 2,
        r: "zzz",
        equal: "v",
      }
    ),
    {
      a: ["c"],
      d: ["e"],
      k: "l",
      m: "n",
      p: 2,
      r: "zzz",
      equal: { u: "u" },
    },
    "42.01 - default behaviour"
  );
  equal(
    mergeAdvanced(
      equal,
      {
        a: "b",
        d: ["e"],
        k: "l",
        p: 1,
        r: "",
        equal: { u: "u" },
      },
      {
        a: ["c"],
        d: { f: "g" },
        m: "n",
        p: 2,
        r: "zzz",
        equal: "v",
      },
      {
        hardMergeKeys: ["d", "equal"],
      }
    ),
    {
      a: ["c"],
      d: { f: "g" },
      k: "l",
      m: "n",
      p: 2,
      r: "zzz",
      equal: "v",
    },
    "42.02 - hardMergeKeys only"
  );
  equal(
    mergeAdvanced(
      equal,
      {
        a: "b",
        d: ["e"],
        k: "l",
        p: 1,
        r: "",
        equal: { u: "u" },
      },
      {
        a: ["c"],
        d: { f: "g" },
        m: "n",
        p: 2,
        r: "zzz",
        equal: "v",
      },
      {
        hardMergeKeys: ["d", "equal"],
        ignoreKeys: ["a"],
      }
    ),
    {
      a: "b",
      d: { f: "g" },
      k: "l",
      m: "n",
      p: 2,
      r: "zzz",
      equal: "v",
    },
    "42.03 - hardMergeKeys and ignoreKeys, both"
  );
  equal(
    mergeAdvanced(
      equal,
      {
        a: "b",
        d: ["e"],
        k: "l",
        p: 1,
        r: "",
        equal: { u: "u" },
      },
      {
        a: ["c"],
        d: { f: "g" },
        m: "n",
        p: 2,
        r: "zzz",
        equal: "v",
      },
      {
        hardMergeKeys: "d",
        ignoreKeys: "a",
      }
    ),
    {
      a: "b",
      d: { f: "g" },
      k: "l",
      m: "n",
      p: 2,
      r: "zzz",
      equal: { u: "u" },
    },
    "42.04 - hardMergeKeys and ignoreKeys both at once, both as strings"
  );
});

test("43 - \u001b[33mOPTS\u001b[39m - opts.hardMergeKeys and opts.ignoreKeys together", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        something: ["aaa"],
        anything: ["bbb"],
        everything: { c: "ccc" },
        xxx: ["ddd"],
        yyy: "yyy",
        zzz: "zzz",
      },
      {
        something: "aaa",
        anything: "bbb",
        everything: "ccc",
        xxx: "overwrite",
        yyy: "overwrite",
        zzz: "overwrite",
      },
      {
        hardMergeKeys: ["*thing", "*xx"],
        ignoreKeys: "nonexisting key",
      }
    ),
    {
      something: "aaa",
      anything: "bbb",
      everything: "ccc",
      xxx: "overwrite",
      yyy: "overwrite",
      zzz: "overwrite",
    },
    "43"
  );
});

test("44 - case #10", () => {
  equal(mergeAdvanced(equal, ["a"], undefined), ["a"], "44.01 - default");
  equal(
    mergeAdvanced(equal, { a: ["a"] }, { a: undefined }),
    { a: ["a"] },
    "44.02 - default, objects"
  );
  equal(
    mergeAdvanced(equal, { a: undefined }, { a: ["a"] }),
    { a: ["a"] },
    "44.03 - 11.03.02 opposite order (same res.)"
  );
  equal(
    mergeAdvanced(
      equal,
      { a: ["a"] },
      { a: undefined },
      { hardMergeKeys: "*" }
    ),
    { a: undefined },
    "44.04 - hard merge"
  );
});

test("45 - case #91", () => {
  equal(
    mergeAdvanced(
      equal,
      { a: undefined },
      { a: ["a"] },
      { hardMergeKeys: "*" }
    ),
    { a: ["a"] },
    "45.01 - useless hardMergeKeys setting"
  );
  equal(
    mergeAdvanced(equal, { a: undefined }, { a: ["a"] }, { ignoreKeys: "*" }),
    { a: undefined },
    "45.02 - checkin the ignores glob"
  );
});

test("46 - case #91 cb", () => {
  equal(
    mergeAdvanced(
      equal,
      { a: undefined },
      { a: ["a"] },
      {
        cb: (inp1) => {
          return inp1;
        },
      }
    ),
    { a: undefined },
    "46.01"
  );
  equal(
    mergeAdvanced(
      equal,
      { a: undefined },
      { a: ["a"] },
      {
        cb: (inp1, inp2) => {
          return inp2;
        },
      }
    ),
    { a: ["a"] },
    "46.02"
  );
});

test("47 - case #81", () => {
  equal(
    mergeAdvanced(equal, { a: null }, { a: ["a"] }, { hardMergeKeys: "*" }),
    { a: ["a"] },
    "47.01 - useless hardMergeKeys setting"
  );
  equal(
    mergeAdvanced(equal, { a: null }, { a: ["a"] }, { ignoreKeys: "*" }),
    { a: null },
    "47.02 - checkin the ignores glob"
  );
});

test("48 - case #9 (mirror to #81)", () => {
  equal(
    mergeAdvanced(equal, { a: ["a"] }, { a: null }, { hardMergeKeys: "*" }),
    { a: null },
    "48 - useless hardMergeKeys setting"
  );
});

test("49 - case #8 and its mirror, #71", () => {
  equal(
    mergeAdvanced(equal, { a: ["a"] }, { a: true }, { hardMergeKeys: "*" }),
    { a: true },
    "49.01 - #8"
  );
  equal(
    mergeAdvanced(equal, { a: true }, { a: ["a"] }, { ignoreKeys: "*" }),
    { a: true },
    "49.02 - #71"
  );
});

test("50 - case #7 and its mirror, #61", () => {
  equal(
    mergeAdvanced(equal, { a: ["a"] }, { a: 1 }, { hardMergeKeys: "*" }),
    { a: 1 },
    "50.01 - #7"
  );
  equal(
    mergeAdvanced(equal, { a: 1 }, { a: ["a"] }, { ignoreKeys: "*" }),
    { a: 1 },
    "50.02 - #61"
  );
  equal(
    mergeAdvanced(equal, { a: 1 }, { a: ["a"] }, { hardMergeKeys: "*" }),
    { a: ["a"] },
    "50.03 - #7 redundant hardMerge setting"
  );
});

test("51 - #27 and its mirror #63 - full obj vs number + hardMerge/ignore", () => {
  equal(
    mergeAdvanced(equal, { a: { b: "c" } }, { a: 1 }, { hardMergeKeys: "*" }),
    { a: 1 },
    "51.01 - #27"
  );
  equal(
    mergeAdvanced(equal, { a: 1 }, { a: { b: "c" } }, { ignoreKeys: "*" }),
    { a: 1 },
    "51.02 - #63"
  );
});

test("52 - #23 two full objects", () => {
  equal(
    mergeAdvanced(equal, { a: { b: "c" } }, { a: { b: "d" } }),
    { a: { b: "d" } },
    "52.01 - default behaviour"
  );
  equal(
    mergeAdvanced(
      equal,
      { a: { b: "c" } },
      { a: { b: "d" } },
      { hardMergeKeys: "*" }
    ),
    { a: { b: "d" } },
    "52.02 - redundant setting"
  );
  equal(
    mergeAdvanced(
      equal,
      { a: { b: "c" } },
      { a: { b: "d" } },
      { ignoreKeys: "*" }
    ),
    { a: { b: "c" } },
    "52.03 - checking ignores"
  );
});

// ==================================
// 12. opts.oneToManyArrayObjectMerge
// ==================================

test("53 - \u001b[33mOPTS\u001b[39m - opts.oneToManyArrayObjectMerge", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            k: false,
            l: false,
            m: "m1",
          },
          {
            k: "k1",
            l: "l1",
            m: false,
          },
        ],
      },
      {
        a: [
          {
            k: "k2",
            l: "l2",
            m: "m2",
          },
        ],
      }
    ),
    {
      a: [
        {
          k: "k2",
          l: "l2",
          m: "m2",
        },
        {
          k: "k1",
          l: "l1",
          m: false,
        },
      ],
    },
    "53.01 - default behaviour will merge first keys and leave second key as it is"
  );
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            k: "k2",
            l: "l2",
            m: "m2",
          },
        ],
      },
      {
        a: [
          {
            k: false,
            l: false,
            m: "m1",
          },
          {
            k: "k1",
            l: "l1",
            m: false,
          },
        ],
      }
    ),
    {
      a: [
        {
          k: "k2",
          l: "l2",
          m: "m1",
        },
        {
          k: "k1",
          l: "l1",
          m: false,
        },
      ],
    },
    "53.02 - same as #01, but swapped order of input arguments. Should not differ except for string merge order."
  );
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            k: false,
            l: false,
            m: "m1",
          },
          {
            k: "k1",
            l: "l1",
            m: false,
          },
        ],
      },
      {
        a: [
          {
            k: "k2",
            l: "l2",
            m: "m2",
          },
        ],
      },
      {
        oneToManyArrayObjectMerge: true,
      }
    ),
    {
      a: [
        {
          k: "k2",
          l: "l2",
          m: "m2",
        },
        {
          k: "k2",
          l: "l2",
          m: "m2",
        },
      ],
    },
    "53.03 - one-to-many merge, normal argument order"
  );
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            k: "k2",
            l: "l2",
            m: "m2",
          },
        ],
      },
      {
        a: [
          {
            k: false,
            l: false,
            m: "m1",
          },
          {
            k: "k1",
            l: "l1",
            m: false,
          },
        ],
      },
      {
        oneToManyArrayObjectMerge: true,
      }
    ),
    {
      a: [
        {
          k: "k2",
          l: "l2",
          m: "m1",
        },
        {
          k: "k1",
          l: "l1",
          m: "m2",
        },
      ],
    },
    "53.04 - one-to-many merge, opposite arg. order"
  );
});

test("54 - \u001b[33mOPTS\u001b[39m - opts.oneToManyArrayObjectMerge - two-to-many does not work", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            k: false,
            l: "l1",
            m: "m1",
          },
          {
            k: "k1",
            l: "l1",
            m: false,
          },
          {
            k: "k1",
            l: false,
            m: "m1",
          },
        ],
      },
      {
        a: [
          {
            k: "k2",
            l: "l2",
            m: "m2",
          },
          {
            k: "k2",
            l: "l2",
            m: "m2",
          },
        ],
      },
      {
        oneToManyArrayObjectMerge: true,
      }
    ),
    {
      a: [
        {
          k: "k2",
          l: "l2",
          m: "m2",
        },
        {
          k: "k2",
          l: "l2",
          m: "m2",
        },
        {
          k: "k1",
          l: false,
          m: "m1",
        },
      ],
    },
    "54 - does not activate when two-to-many found"
  );
});

// ==============================
// 13. throws of all kinds
// ==============================

test("55 - \u001b[33mOPTS\u001b[39m - third argument is not a plain object", () => {
  not.throws(() => {
    mergeAdvanced(equal, { a: "a" }, { b: "b" }, {});
  }, "55");
});

test("56 - \u001b[33mOPTS\u001b[39m - opts.ignoreKeys type checks work", () => {
  throws(() => {
    mergeAdvanced(equal, { a: "a" }, { b: "b" }, { ignoreKeys: 1 });
  }, "56.01");
  throws(() => {
    mergeAdvanced(equal, { a: "a" }, { b: "b" }, { ignoreKeys: true });
  }, "56.02");
  not.throws(() => {
    mergeAdvanced(equal, { a: "a" }, { b: "b" }, { ignoreKeys: "" });
  }, "56.03");
  not.throws(() => {
    mergeAdvanced(equal, { a: "a" }, { b: "b" }, { ignoreKeys: [""] });
  }, "56.04");
  not.throws(() => {
    mergeAdvanced(equal, { a: "a" }, { b: "b" }, { ignoreKeys: [] });
  }, "56.05");
});

test("57 - \u001b[33mOPTS\u001b[39m - opts.hardMergeKeys type checks work", () => {
  throws(() => {
    mergeAdvanced(equal, { a: "a" }, { b: "b" }, { hardMergeKeys: 1 });
  }, "57.01");
  throws(() => {
    mergeAdvanced(equal, { a: "a" }, { b: "b" }, { hardMergeKeys: true });
  }, "57.02");
  not.throws(() => {
    mergeAdvanced(equal, { a: "a" }, { b: "b" }, { hardMergeKeys: "" });
  }, "57.03");
  not.throws(() => {
    mergeAdvanced(equal, { a: "a" }, { b: "b" }, { hardMergeKeys: [""] });
  }, "57.04");
  not.throws(() => {
    mergeAdvanced(equal, { a: "a" }, { b: "b" }, { hardMergeKeys: [] });
  }, "57.05");
});

// ==============================
// 14. ad-hoc
// ==============================

test("58 - objects within arrays", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            b: "zzz",
            c: "ccc", // <----- this key is unique.
          },
        ],
      },
      {
        a: [
          {
            b: false,
            d: "ddd", // <----- and this key is unique.
          },
        ],
      }
    ),
    {
      a: [
        {
          b: "zzz",
          c: "ccc",
        },
        {
          b: false,
          d: "ddd",
        },
      ],
    },
    "58.01 - default behaviour"
  );
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            b: "zzz",
            c: "ccc", // <----- this key is unique.
          },
        ],
      },
      {
        a: [
          {
            b: false,
            d: "ddd", // <----- and this key is unique.
          },
        ],
      },
      {
        mergeObjectsOnlyWhenKeysetMatches: false,
      }
    ),
    {
      a: [
        {
          b: "zzz",
          c: "ccc",
          d: "ddd",
        },
      ],
    },
    "58.02 - customising opts.mergeObjectsOnlyWhenKeysetMatches - one way"
  );
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            b: false,
            d: "ddd", // <----- this key is unique.
          },
        ],
      },
      {
        a: [
          {
            b: "zzz",
            c: "ccc", // <----- and this key is unique.
          },
        ],
      },
      {
        mergeObjectsOnlyWhenKeysetMatches: false,
      }
    ),
    {
      a: [
        {
          b: "zzz",
          c: "ccc",
          d: "ddd",
        },
      ],
    },
    "58.03 - customising opts.mergeObjectsOnlyWhenKeysetMatches - other way (swapped args of 14.01.02.01)"
  );

  // setting the glob is the same as setting opts.hardMergeEverything to true
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            b: "zzz",
            c: "ccc", // <----- this key is unique but it doesn'equal matter
          },
        ],
      },
      {
        a: [
          {
            b: false,
            d: "ddd", // <----- and this key is unique but it doesn'equal matter
          },
        ],
      },
      {
        hardMergeKeys: "*", // <----- notice it's glob
      }
    ),
    {
      a: [
        // <----- hard merge happens back at "a" key's level, no matter the contents
        {
          b: false,
          d: "ddd",
        },
      ],
    },
    "58.04 - hardMergeKeys: * in per-key settings is the same as global flag"
  );

  // setting the glob is the same as setting opts.ignoreEverything to true
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            b: "zzz",
            c: "ccc", // <----- this key is unique but it doesn'equal matter
          },
        ],
      },
      {
        a: [
          {
            b: false,
            d: "ddd", // <----- and this key is unique but it doesn'equal matter
          },
        ],
      },
      {
        ignoreKeys: "*", // <----- notice it's glob
      }
    ),
    {
      a: [
        // <----- hard merge happens back at "a" key's level, no matter the contents
        {
          b: "zzz",
          c: "ccc",
        },
      ],
    },
    "58.05 - ignoreKeys: * in per-key settings is the same as global flag"
  );
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            b: "zzz",
            c: "ccc", // <----- this key is unique.
          },
        ],
      },
      {
        a: [
          {
            b: false,
            d: "ddd", // <----- and this key is unique.
          },
        ],
      },
      {
        hardMergeKeys: "b", // <----- forcing hard merge on "b"
        mergeObjectsOnlyWhenKeysetMatches: false,
      }
    ),
    {
      a: [
        {
          b: false,
          c: "ccc",
          d: "ddd",
        },
      ],
    },
    "58.06 - with mergeObjectsOnlyWhenKeysetMatches=false objects will clash, plus we got hard merge"
  );
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            b: false,
            d: "ddd", // <----- and this key is unique.
          },
        ],
      },
      {
        a: [
          {
            b: "zzz",
            c: "ccc", // <----- this key is unique.
          },
        ],
      },
      {
        hardMergeKeys: "b", // <----- unnecessarily forcing hard merge on "b"
        mergeObjectsOnlyWhenKeysetMatches: false,
      }
    ),
    {
      a: [
        {
          b: "zzz", // it would result in string anyway, without a hard merge.
          c: "ccc",
          d: "ddd",
        },
      ],
    },
    "58.07 - with mergeObjectsOnlyWhenKeysetMatches=false objects will clash, plus we got hard merge"
  );
});

// ==============================
// 15. combo of opts.oneToManyArrayObjectMerge and unidirectional merge,
// either opts.ignoreKeys, opts.hardMergeKeys, opts.hardMergeEverything or opts.ignoreEverything
// ==============================

test("59 - hard merge on clashing keys only case #1", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            b: "888",
            c: "111",
          },
          {
            b: "999",
            c: "222",
          },
        ],
      },
      {
        a: [
          {
            c: "333",
          },
        ],
      }
    ),
    {
      a: [
        {
          b: "888",
          c: "333", // <------ overwrites just this
        },
        {
          b: "999",
          c: "222", // <------ not this
        },
      ],
    },
    "59.01 - default behaviour"
  );
  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            b: "888",
            c: "111",
          },
          {
            b: "999",
            c: "222",
          },
        ],
      },
      {
        a: [
          {
            c: "333", // <------ imagine this is an override, used in mapping
          },
        ],
      },
      {
        oneToManyArrayObjectMerge: true,
      }
    ),
    {
      a: [
        {
          b: "888",
          c: "333", // <------ gets overwritten as standard
        },
        {
          b: "999",
          c: "333", // <------ BUT ALSO THIS TOO
        },
      ],
    },
    "59.02 - one-to-many"
  );

  // PRESS PAUSE HERE.

  // LET'S TEST TYPE CLASHES.

  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            b: "888",
            c: ["111"], // <------ OOPS! array!
          },
          {
            b: "999",
            c: ["222"], // <------ OOPS! array!
          },
        ],
      },
      {
        a: [
          {
            c: "333", // <------ now it's a string vs array...
          },
        ],
      },
      {
        oneToManyArrayObjectMerge: true,
      }
    ),
    {
      a: [
        {
          b: "888",
          c: ["111"], // <------ nothing happens because array is higher in food chain
        },
        {
          b: "999",
          c: ["222"], // <------ nothing happens because array is higher in food chain
        },
      ],
    },
    "59.03 - one to many, string tries override arrays, against the food chain order"
  );

  // WHAT DO WE DO? HOW CAN WE OVERWRITE LIKE IN 15.01.02 ?

  // LET'S TRY HARD OVERWRITE!

  equal(
    mergeAdvanced(
      equal,
      {
        a: [
          {
            b: "888",
            c: ["111"], // <------ will this get overwritten by '333'?
          },
          {
            b: "999",
            c: ["222"], // <------ will this get overwritten by '333'?
          },
        ],
      },
      {
        a: [
          {
            c: "333",
          },
        ],
      },
      {
        oneToManyArrayObjectMerge: true,
        hardMergeKeys: ["c"], // <------ is this the solution?
      }
    ),
    {
      a: [
        {
          b: "888",
          c: "333",
        },
        {
          b: "999",
          c: "333",
        },
      ],
    },
    "59.04 - hard overwrite, per-key setting"
  );
});

// ==============================
// 16. Object values are arrays and they contain strings.
// We test their various merge cases.
// ==============================

test("60 - values as arrays that contain strings", () => {
  equal(
    mergeAdvanced(
      equal,
      {
        a: ["a"],
      },
      {
        a: ["b"],
      }
    ),
    {
      a: ["a", "b"],
    },
    "60.01 - default behaviour, different strings"
  );
  equal(
    mergeAdvanced(
      equal,
      {
        a: ["a"],
      },
      {
        a: ["a"],
      }
    ),
    {
      a: ["a", "a"],
    },
    "60.02 - default behaviour, same string"
  );
  equal(
    mergeAdvanced(
      equal,
      {
        a: ["a"],
      },
      {
        a: ["a"],
      },
      {
        concatInsteadOfMerging: false,
      }
    ),
    {
      a: ["a"],
    },
    "60.03 - opts.concatInsteadOfMerging"
  );
  // now the first array goes straight to result, so three "zzz" will come.
  // then second array's "zzz" will be matched as existing and won'equal be let in.
  equal(
    mergeAdvanced(
      equal,
      {
        a: ["zzz", "zzz", "zzz"],
      },
      {
        a: ["zzz"],
      },
      {
        concatInsteadOfMerging: false,
      }
    ),
    {
      a: ["zzz", "zzz", "zzz"],
    },
    "60.04 - opts.concatInsteadOfMerging pt2."
  );
  equal(
    mergeAdvanced(
      equal,
      {
        a: ["bbb", "zzz", "zzz", "bbb", "zzz", "bbb"],
      },
      {
        a: ["zzz", "bbb"],
      },
      {
        concatInsteadOfMerging: false,
        dedupeStringsInArrayValues: true,
      }
    ),
    {
      a: ["bbb", "zzz"],
    },
    "60.05 - opts.concatInsteadOfMerging + opts.dedupeStringsInArrayValues"
  );
});

// ==============================
// 17. Date objects
// ==============================

test("61", () => {
  let date1 = new Date(`2020-02-08T12:32:00`);
  let date2 = new Date(`2020-02-10T02:32:00`);
  let o1 = { a: date1 };
  let o2 = { a: date2 };

  let gathered = [];
  equal(
    mergeAdvanced(equal, o1, o2, {
      cb: (obj1, obj2, currRes, infoObj) => {
        gathered.push({
          obj1,
          obj2,
          currRes,
          infoObj,
        });
        return currRes;
      },
    }),
    o2,
    "61.01"
  );
  equal(
    gathered,
    [
      {
        obj1: date1,
        obj2: date2,
        currRes: date2,
        infoObj: {
          path: "a",
          key: "a",
          type: ["date", "date"],
        },
      },
      {
        obj1: { a: date1 },
        obj2: { a: date2 },
        currRes: { a: date2 },
        infoObj: {
          path: "",
          key: null,
          type: ["object", "object"],
        },
      },
    ],
    "61.02"
  );

  equal(mergeAdvanced(equal, o2, o1), o2, "61.03");
});

test("62", () => {
  let o1 = { a: new Date(`2020-02-08T12:32:00`) };
  let o2 = { a: "zzz" };

  equal(mergeAdvanced(equal, o1, o2), o2, "62.01");
  equal(mergeAdvanced(equal, o2, o1), o2, "62.02");
});

test("63", () => {
  let o1 = { a: new Date(`2020-02-08T12:32:00`) };
  let o2 = { a: null };

  equal(mergeAdvanced(equal, o1, o2), o1, "63.01");
  equal(mergeAdvanced(equal, o2, o1), o1, "63.02");
});

test("64", () => {
  let o1 = { a: new Date(`2020-02-08T12:32:00`) };
  let o2 = { a: { b: "c" } };

  equal(mergeAdvanced(equal, o1, o2), o2, "64.01");
  equal(mergeAdvanced(equal, o2, o1), o2, "64.02");
});

test("65 - not finite date", () => {
  let o1 = { a: new Date(`z`) };
  let o2 = { a: new Date(`2020-02-08T12:32:00`) };

  // don't use the wrapper, call dist/ exported function directly
  equal(m(o1, o2), o2, "64.01");
  equal(m(o2, o1), o2, "64.02");
});

test.run();
