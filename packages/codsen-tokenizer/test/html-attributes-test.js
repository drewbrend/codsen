const t = require("tap");
const ct = require("../dist/codsen-tokenizer.cjs");

// 01. basic - double quoted attributes
// -----------------------------------------------------------------------------

t.test(
  `01.01 - ${`\u001b[${36}m${`basic`}\u001b[${39}m`} - single- and double-quoted attr`,
  t => {
    const gathered = [];
    ct(`<a b="c" d='e'>`, {
      tagCb: obj => {
        gathered.push(obj);
      }
    });

    t.match(gathered, [
      {
        type: "html",
        start: 0,
        end: 15,
        attribs: [
          {
            attribName: "b",
            attribNameStartsAt: 3,
            attribNameEndsAt: 4,
            attribOpeningQuoteAt: 5,
            attribClosingQuoteAt: 7,
            attribValue: "c",
            attribValueStartsAt: 6,
            attribValueEndsAt: 7,
            attribStart: 3,
            attribEnd: 8
          },
          {
            attribName: "d",
            attribNameStartsAt: 9,
            attribNameEndsAt: 10,
            attribOpeningQuoteAt: 11,
            attribClosingQuoteAt: 13,
            attribValue: "e",
            attribValueStartsAt: 12,
            attribValueEndsAt: 13,
            attribStart: 9,
            attribEnd: 14
          }
        ]
      }
    ]);
    t.end();
  }
);

t.test(
  `01.02 - ${`\u001b[${36}m${`basic`}\u001b[${39}m`} - value-less attribute`,
  t => {
    const gathered = [];
    ct(`<TD nowrap class="z">`, {
      tagCb: obj => {
        gathered.push(obj);
      }
    });

    t.match(gathered, [
      {
        type: "html",
        start: 0,
        end: 21,
        attribs: [
          {
            attribName: "nowrap",
            attribNameStartsAt: 4,
            attribNameEndsAt: 10,
            attribOpeningQuoteAt: null,
            attribClosingQuoteAt: null,
            attribValue: null,
            attribValueStartsAt: null,
            attribValueEndsAt: null,
            attribStart: 4,
            attribEnd: 10
          },
          {
            attribName: "class",
            attribNameStartsAt: 11,
            attribNameEndsAt: 16,
            attribOpeningQuoteAt: 17,
            attribClosingQuoteAt: 19,
            attribValue: "z",
            attribValueStartsAt: 18,
            attribValueEndsAt: 19,
            attribStart: 11,
            attribEnd: 20
          }
        ]
      }
    ]);
    t.end();
  }
);

t.test(
  `01.03 - ${`\u001b[${36}m${`basic`}\u001b[${39}m`} - a closing tag`,
  t => {
    const gathered = [];
    ct(`</Td>`, {
      tagCb: obj => {
        gathered.push(obj);
      }
    });

    t.match(gathered, [
      {
        tagNameStartsAt: 2,
        tagNameEndsAt: 4,
        tagName: "td",
        recognised: true,
        closing: true,
        void: false,
        pureHTML: true,
        esp: [],
        type: "html",
        start: 0,
        end: 5,
        tail: null,
        kind: null,
        attribs: []
      }
    ]);
    t.end();
  }
);

// space inside tag
t.test(
  `01.04 - ${`\u001b[${36}m${`basic`}\u001b[${39}m`} - a closing tag`,
  t => {
    const gathered = [];
    ct(`</tD >`, {
      tagCb: obj => {
        gathered.push(obj);
      }
    });

    t.match(gathered, [
      {
        tagNameStartsAt: 2,
        tagNameEndsAt: 4,
        tagName: "td",
        recognised: true,
        closing: true,
        void: false,
        pureHTML: true,
        esp: [],
        type: "html",
        start: 0,
        end: 6,
        tail: null,
        kind: null,
        attribs: []
      }
    ]);
    t.end();
  }
);

// TODO
// t.test(`01.03 - ${`\u001b[${36}m${`basic`}\u001b[${39}m`} - Nunjucks conditional class`, t => {
//   const gathered = [];
//   ct(`<td{% if something %} class="z"{% endif %} id="y">`, obj => {
//     gathered.push(obj);
//   });
//
//   t.match(
//     gathered,
//     [
//       {
//         type: "html",
//         start: 0,
//         end: 50,
//         attribs: [
//           {
//             parent: {
//               type: "esp",
//               start: 3,
//               end: 42,
//               ranges: [
//                 [3, 21],
//                 [31, 42]
//               ],
//               value: `{% if something %} class="z"{% endif %}`
//             },
//             attribName: "class",
//             attribNameStartsAt: 22,
//             attribNameEndsAt: 27,
//             attribOpeningQuoteAt: 28,
//             attribClosingQuoteAt: 30,
//             attribValue: "z",
//             attribValueStartsAt: 29,
//             attribValueEndsAt: 30,
//             attribStart: 22,
//             attribEnd: 31
//           },
//           {
//             parent: null,
//             attribName: "id",
//             attribNameStartsAt: 43,
//             attribNameEndsAt: 45,
//             attribOpeningQuoteAt: 46,
//             attribClosingQuoteAt: 48,
//             attribValue: "y",
//             attribValueStartsAt: 47,
//             attribValueEndsAt: 48,
//             attribStart: 43,
//             attribEnd: 49
//           }
//         ]
//       }
//     ],
//   );
//   t.end();
// });

// 02. broken
// -----------------------------------------------------------------------------

t.test(
  `02.01 - ${`\u001b[${36}m${`broken`}\u001b[${39}m`} - no equals but quotes present`,
  t => {
    const gathered = [];
    ct(`<a b"c" d'e'>`, {
      tagCb: obj => {
        gathered.push(obj);
      }
    });

    t.match(gathered, [
      {
        type: "html",
        start: 0,
        end: 13,
        attribs: [
          {
            attribName: "b",
            attribNameStartsAt: 3,
            attribNameEndsAt: 4,
            attribOpeningQuoteAt: 4,
            attribClosingQuoteAt: 6,
            attribValue: "c",
            attribValueStartsAt: 5,
            attribValueEndsAt: 6,
            attribStart: 3,
            attribEnd: 7
          },
          {
            attribName: "d",
            attribNameStartsAt: 8,
            attribNameEndsAt: 9,
            attribOpeningQuoteAt: 9,
            attribClosingQuoteAt: 11,
            attribValue: "e",
            attribValueStartsAt: 10,
            attribValueEndsAt: 11,
            attribStart: 8,
            attribEnd: 12
          }
        ]
      }
    ]);
    t.end();
  }
);

// TODO
// t.test(`02.02 - ${`\u001b[${36}m${`broken`}\u001b[${39}m`} - no opening quotes but equals present`, t => {
//   const gathered = [];
//   ct(`<a b=c" d=e'>`, obj => {
//     gathered.push(obj);
//   });
//
//   t.match(
//     gathered,
//     [
//       {
//         type: "html",
//         start: 0,
//         end: 13,
//         attribs: [
//           {
//             attribName: "b",
//             attribNameStartsAt: 3,
//             attribNameEndsAt: 4,
//             attribOpeningQuoteAt: 5,
//             attribClosingQuoteAt: 7,
//             attribValue: "c",
//             attribValueStartsAt: 6,
//             attribValueEndsAt: 7,
//             attribStart: 3,
//             attribEnd: 8
//           },
//           {
//             attribName: "d",
//             attribNameStartsAt: 9,
//             attribNameEndsAt: 10,
//             attribOpeningQuoteAt: 11,
//             attribClosingQuoteAt: 13,
//             attribValue: "e",
//             attribValueStartsAt: 12,
//             attribValueEndsAt: 13,
//             attribStart: 9,
//             attribEnd: 14
//           }
//         ]
//       }
//     ],
//   );
//   t.end();
// });

t.test(`02.03 - ${`\u001b[${36}m${`broken`}\u001b[${39}m`} - two equals`, t => {
  const gathered = [];
  ct(`<a b=="c" d=='e'>`, {
    tagCb: obj => {
      gathered.push(obj);
    }
  });

  t.match(gathered, [
    {
      type: "html",
      start: 0,
      end: 17,
      attribs: [
        {
          attribName: "b",
          attribNameStartsAt: 3,
          attribNameEndsAt: 4,
          attribOpeningQuoteAt: 6,
          attribClosingQuoteAt: 8,
          attribValue: "c",
          attribValueStartsAt: 7,
          attribValueEndsAt: 8,
          attribStart: 3,
          attribEnd: 9
        },
        {
          attribName: "d",
          attribNameStartsAt: 10,
          attribNameEndsAt: 11,
          attribOpeningQuoteAt: 13,
          attribClosingQuoteAt: 15,
          attribValue: "e",
          attribValueStartsAt: 14,
          attribValueEndsAt: 15,
          attribStart: 10,
          attribEnd: 16
        }
      ]
    }
  ]);
  t.end();
});

t.test(
  `02.04 - ${`\u001b[${36}m${`broken`}\u001b[${39}m`} - empty attr value`,
  t => {
    const gathered = [];
    ct(`<body alink="">`, {
      tagCb: obj => {
        gathered.push(obj);
      }
    });

    t.match(gathered, [
      {
        tagNameStartsAt: 1,
        tagNameEndsAt: 5,
        tagName: "body",
        recognised: true,
        closing: false,
        void: false,
        pureHTML: true,
        esp: [],
        type: "html",
        start: 0,
        end: 15,
        tail: null,
        kind: null,
        attribs: [
          {
            attribName: "alink",
            attribNameStartsAt: 6,
            attribNameEndsAt: 11,
            attribOpeningQuoteAt: 12,
            attribClosingQuoteAt: 13,
            attribValue: "",
            attribValueStartsAt: 13,
            attribValueEndsAt: 13,
            attribStart: 6,
            attribEnd: 14
          }
        ]
      }
    ]);
    t.end();
  }
);

t.test(`02.05 - ${`\u001b[${36}m${`broken`}\u001b[${39}m`} - rgb()`, t => {
  const gathered = [];
  ct(`<body alink="rgb()">`, {
    tagCb: obj => {
      gathered.push(obj);
    }
  });

  t.match(gathered, [
    {
      tagNameStartsAt: 1,
      tagNameEndsAt: 5,
      tagName: "body",
      recognised: true,
      closing: false,
      void: false,
      pureHTML: true,
      esp: [],
      type: "html",
      start: 0,
      end: 20,
      tail: null,
      kind: null,
      attribs: [
        {
          attribName: "alink",
          attribNameStartsAt: 6,
          attribNameEndsAt: 11,
          attribOpeningQuoteAt: 12,
          attribClosingQuoteAt: 18,
          attribValue: "rgb()",
          attribValueStartsAt: 13,
          attribValueEndsAt: 18,
          attribStart: 6,
          attribEnd: 19
        }
      ]
    }
  ]);
  t.end();
});

// 03. bool attributes
// -----------------------------------------------------------------------------

t.test(`03.01`, t => {
  const gathered = [];
  ct(`<td nowrap>`, {
    tagCb: obj => {
      gathered.push(obj);
    }
  });

  t.match(gathered, [
    {
      tagNameStartsAt: 1,
      tagNameEndsAt: 3,
      tagName: "td",
      recognised: true,
      closing: false,
      void: false,
      pureHTML: true,
      esp: [],
      type: "html",
      start: 0,
      end: 11,
      tail: null,
      kind: null,
      attribs: [
        {
          attribName: "nowrap",
          attribNameStartsAt: 4,
          attribNameEndsAt: 10,
          attribOpeningQuoteAt: null,
          attribClosingQuoteAt: null,
          attribValue: null,
          attribValueStartsAt: null,
          attribValueEndsAt: null,
          attribStart: 4,
          attribEnd: 10
        }
      ]
    }
  ]);
  t.end();
});

t.test(`03.02 - slash in the end`, t => {
  const gathered = [];
  ct(`<td nowrap/>`, {
    tagCb: obj => {
      gathered.push(obj);
    }
  });

  t.match(gathered, [
    {
      tagNameStartsAt: 1,
      tagNameEndsAt: 3,
      tagName: "td",
      recognised: true,
      closing: false,
      void: false,
      pureHTML: true,
      esp: [],
      type: "html",
      start: 0,
      end: 12,
      tail: null,
      kind: null,
      attribs: [
        {
          attribName: "nowrap",
          attribNameStartsAt: 4,
          attribNameEndsAt: 10,
          attribOpeningQuoteAt: null,
          attribClosingQuoteAt: null,
          attribValue: null,
          attribValueStartsAt: null,
          attribValueEndsAt: null,
          attribStart: 4,
          attribEnd: 10
        }
      ]
    }
  ]);
  t.end();
});

t.test(`03.03 - slash in front`, t => {
  const gathered = [];
  ct(`</td nowrap>`, {
    tagCb: obj => {
      gathered.push(obj);
    }
  });

  t.match(gathered, [
    {
      tagNameStartsAt: 2,
      tagNameEndsAt: 4,
      tagName: "td",
      recognised: true,
      closing: true,
      void: false,
      pureHTML: true,
      esp: [],
      type: "html",
      start: 0,
      end: 12,
      tail: null,
      kind: null,
      attribs: [
        {
          attribName: "nowrap",
          attribNameStartsAt: 5,
          attribNameEndsAt: 11,
          attribOpeningQuoteAt: null,
          attribClosingQuoteAt: null,
          attribValue: null,
          attribValueStartsAt: null,
          attribValueEndsAt: null,
          attribStart: 5,
          attribEnd: 11
        }
      ]
    }
  ]);
  t.end();
});

t.test(`03.04 - now crazier`, t => {
  const gathered = [];
  ct(`</td nowrap yo yo/>`, {
    tagCb: obj => {
      gathered.push(obj);
    }
  });

  t.match(gathered, [
    {
      tagNameStartsAt: 2,
      tagNameEndsAt: 4,
      tagName: "td",
      recognised: true,
      closing: true,
      void: false,
      pureHTML: true,
      esp: [],
      type: "html",
      start: 0,
      end: 19,
      tail: null,
      kind: null,
      attribs: [
        {
          attribName: "nowrap",
          attribNameStartsAt: 5,
          attribNameEndsAt: 11,
          attribOpeningQuoteAt: null,
          attribClosingQuoteAt: null,
          attribValue: null,
          attribValueStartsAt: null,
          attribValueEndsAt: null,
          attribStart: 5,
          attribEnd: 11
        },
        {
          attribName: "yo",
          attribNameStartsAt: 12,
          attribNameEndsAt: 14,
          attribOpeningQuoteAt: null,
          attribClosingQuoteAt: null,
          attribValue: null,
          attribValueStartsAt: null,
          attribValueEndsAt: null,
          attribStart: 12,
          attribEnd: 14
        },
        {
          attribName: "yo",
          attribNameStartsAt: 15,
          attribNameEndsAt: 17,
          attribOpeningQuoteAt: null,
          attribClosingQuoteAt: null,
          attribValue: null,
          attribValueStartsAt: null,
          attribValueEndsAt: null,
          attribStart: 15,
          attribEnd: 17
        }
      ]
    }
  ]);
  t.end();
});

t.test(`03.05 - unrecognised tag`, t => {
  const gathered = [];
  ct(`<zzz accept-charset="utf-8" yyy>`, {
    tagCb: obj => {
      gathered.push(obj);
    }
  });

  t.match(gathered, [
    {
      tagNameStartsAt: 1,
      tagNameEndsAt: 4,
      tagName: "zzz",
      recognised: false,
      closing: false,
      void: false,
      pureHTML: true,
      esp: [],
      type: "html",
      start: 0,
      end: 32,
      kind: null,
      attribs: [
        {
          attribName: "accept-charset",
          attribNameStartsAt: 5,
          attribNameEndsAt: 19,
          attribOpeningQuoteAt: 20,
          attribClosingQuoteAt: 26,
          attribValue: "utf-8",
          attribValueStartsAt: 21,
          attribValueEndsAt: 26,
          attribStart: 5,
          attribEnd: 27
        },
        {
          attribName: "yyy",
          attribNameStartsAt: 28,
          attribNameEndsAt: 31,
          attribOpeningQuoteAt: null,
          attribClosingQuoteAt: null,
          attribValue: null,
          attribValueStartsAt: null,
          attribValueEndsAt: null,
          attribStart: 28,
          attribEnd: 31
        }
      ]
    }
  ]);
  t.end();
});

// 04. erroneous code
// -----------------------------------------------------------------------------

t.test(`04.01 - attr value without quotes`, t => {
  const gathered = [];
  ct(`<abc de=fg hi="jkl">`, {
    tagCb: obj => {
      gathered.push(obj);
    }
  });

  t.match(gathered, [
    {
      tagNameStartsAt: 1,
      tagNameEndsAt: 4,
      tagName: "abc",
      recognised: false,
      closing: false,
      void: false,
      pureHTML: true,
      esp: [],
      type: "html",
      start: 0,
      end: 20,
      tail: null,
      kind: null,
      attribs: [
        {
          attribName: "de",
          attribNameStartsAt: 5,
          attribNameEndsAt: 7,
          attribOpeningQuoteAt: null,
          attribClosingQuoteAt: null,
          attribValue: "fg",
          attribValueStartsAt: 8,
          attribValueEndsAt: 10,
          attribStart: 5,
          attribEnd: 10
        },
        {
          attribName: "hi",
          attribNameStartsAt: 11,
          attribNameEndsAt: 13,
          attribOpeningQuoteAt: 14,
          attribClosingQuoteAt: 18,
          attribValue: "jkl",
          attribValueStartsAt: 15,
          attribValueEndsAt: 18,
          attribStart: 11,
          attribEnd: 19
        }
      ]
    }
  ]);
  t.end();
});

t.test(`04.02 - attr value without quotes leads to tag's end`, t => {
  const gathered = [];
  ct(`<abc de=fg/>`, {
    tagCb: obj => {
      gathered.push(obj);
    }
  });

  t.match(gathered, [
    {
      tagNameStartsAt: 1,
      tagNameEndsAt: 4,
      tagName: "abc",
      recognised: false,
      closing: false,
      void: false,
      pureHTML: true,
      esp: [],
      type: "html",
      start: 0,
      end: 12,
      tail: null,
      kind: null,
      attribs: [
        {
          attribName: "de",
          attribNameStartsAt: 5,
          attribNameEndsAt: 7,
          attribOpeningQuoteAt: null,
          attribClosingQuoteAt: null,
          attribValue: "fg",
          attribValueStartsAt: 8,
          attribValueEndsAt: 10,
          attribStart: 5,
          attribEnd: 10
        }
      ]
    }
  ]);
  t.end();
});

t.test(`04.03 - attr value without quotes leads to tag's end`, t => {
  const gathered = [];
  ct(`<abc de=fg>`, {
    tagCb: obj => {
      gathered.push(obj);
    }
  });

  t.match(gathered, [
    {
      tagNameStartsAt: 1,
      tagNameEndsAt: 4,
      tagName: "abc",
      recognised: false,
      closing: false,
      void: false,
      pureHTML: true,
      esp: [],
      type: "html",
      start: 0,
      end: 11,
      kind: null,
      attribs: [
        {
          attribName: "de",
          attribNameStartsAt: 5,
          attribNameEndsAt: 7,
          attribOpeningQuoteAt: null,
          attribClosingQuoteAt: null,
          attribValue: "fg",
          attribValueStartsAt: 8,
          attribValueEndsAt: 10,
          attribStart: 5,
          attribEnd: 10
        }
      ]
    }
  ]);
  t.end();
});

// 05. terminating unclosed string value (content within quotes)
// -----------------------------------------------------------------------------

// TODO
// INTERVENTION NEEDED:

// <abc de="> "a" > "z"
// <abc de="> a "text" b <div class="z">
// <abc de=" \n<div class="z">
// <abc de=" text<div class="z">
// <abc de="> < fgh>
// <abc de="> <fgh kl = "mn">

// <abc de=> text <def>
// <abc de=> fg="hi" <def>
// <abc de=> fg=hi" <def>

// <abc de=<def>
// <abc de=''<def>
// <abc de=""<def>
// <abc de='<def>
// <abc de="<def>
//
// <abc de= <def>
// <abc de='' <def>
// <abc de="" <def>
// <abc de=' <def>
// <abc de=" <def>
//
// <abc de=' fg="hi'<jkl>

// MINOR ERRORS:

// <abc de =">"> text
// <abc de =">"> text<div class="z">
// <abc de =">'> text
// <abc de =">'> text<div class="z">
// <abc de =">' fg = 'hi"> text
// <abc de =">' fg = 'hi"> text <div class="z">

t.test(`05.01 - attr value without quotes leads to tag's end`, t => {
  const gathered = [];
  ct(`<abc de =">\ntext<div class="z">`, {
    tagCb: obj => {
      gathered.push(obj);
    }
  });

  t.match(gathered, [
    {
      type: "html",
      tagNameStartsAt: 1,
      tagNameEndsAt: 4,
      tagName: "abc",
      recognised: false,
      closing: false,
      void: false,
      pureHTML: true,
      esp: [],
      start: 0,
      end: 11,
      kind: null,
      attribs: [
        {
          attribName: "de",
          attribNameStartsAt: 5,
          attribNameEndsAt: 7,
          attribOpeningQuoteAt: 9,
          attribClosingQuoteAt: null,
          attribValue: null,
          attribValueStartsAt: null,
          attribValueEndsAt: null,
          attribStart: 5,
          attribEnd: 10
        }
      ]
    },
    {
      type: "text",
      start: 11,
      end: 16
    },
    {
      type: "html",
      tagNameStartsAt: 17,
      tagNameEndsAt: 20,
      tagName: "div",
      recognised: true,
      closing: false,
      void: false,
      pureHTML: true,
      esp: [],
      start: 16,
      end: 31,
      kind: null,
      attribs: [
        {
          attribName: "class",
          attribNameStartsAt: 21,
          attribNameEndsAt: 26,
          attribOpeningQuoteAt: 27,
          attribClosingQuoteAt: 29,
          attribValue: "z",
          attribValueStartsAt: 28,
          attribValueEndsAt: 29,
          attribStart: 21,
          attribEnd: 30
        }
      ]
    }
  ]);
  t.end();
});

// TODO
// <abc de=">"a"
// <abc de=">">
// <abc de=">" fg="a">

t.test(`05.02 - missing closing quote, cheeky raw text bracket follows`, t => {
  const gathered = [];
  ct(`<abc de="> "a" > "z"`, {
    tagCb: obj => {
      gathered.push(obj);
    }
  });

  t.match(gathered, [
    {
      type: "html",
      tagNameStartsAt: 1,
      tagNameEndsAt: 4,
      tagName: "abc",
      recognised: false,
      closing: false,
      void: false,
      pureHTML: true,
      esp: [],
      start: 0,
      end: 10,
      kind: null,
      attribs: [
        {
          attribName: "de",
          attribNameStartsAt: 5,
          attribNameEndsAt: 7,
          attribOpeningQuoteAt: 8,
          attribClosingQuoteAt: null,
          attribValue: null,
          attribValueStartsAt: null,
          attribValueEndsAt: null,
          attribStart: 5,
          attribEnd: 9
        }
      ]
    },
    {
      type: "text",
      start: 10,
      end: 20
    }
  ]);
  t.end();
});

t.test(
  `05.03 - two errors: space before equal and closing quotes missing`,
  t => {
    const gathered = [];
    ct(`<input type="radio" checked =">`, {
      tagCb: obj => {
        gathered.push(obj);
      }
    });

    t.match(gathered, [
      {
        type: "html",
        tagNameStartsAt: 1,
        tagNameEndsAt: 6,
        tagName: "input",
        recognised: true,
        closing: false,
        void: true,
        pureHTML: true,
        esp: [],
        start: 0,
        end: 31,
        kind: null,
        attribs: [
          {
            attribName: "type",
            attribNameStartsAt: 7,
            attribNameEndsAt: 11,
            attribOpeningQuoteAt: 12,
            attribClosingQuoteAt: 18,
            attribValue: "radio",
            attribValueStartsAt: 13,
            attribValueEndsAt: 18,
            attribStart: 7,
            attribEnd: 19
          },
          {
            attribName: "checked",
            attribNameStartsAt: 20,
            attribNameEndsAt: 27,
            attribOpeningQuoteAt: 29,
            attribClosingQuoteAt: null,
            attribValue: null,
            attribValueStartsAt: null,
            attribValueEndsAt: null,
            attribStart: 20,
            attribEnd: 30
          }
        ]
      }
    ]);
    t.end();
  }
);

t.test(
  `05.04 - two errors: space before equal and closing quotes missing, text follows`,
  t => {
    const gathered = [];
    ct(`<input type="radio" checked ="> x y z `, {
      tagCb: obj => {
        gathered.push(obj);
      }
    });

    t.match(gathered, [
      {
        type: "html",
        tagNameStartsAt: 1,
        tagNameEndsAt: 6,
        tagName: "input",
        recognised: true,
        closing: false,
        void: true,
        pureHTML: true,
        esp: [],
        start: 0,
        end: 31,
        kind: null,
        attribs: [
          {
            attribName: "type",
            attribNameStartsAt: 7,
            attribNameEndsAt: 11,
            attribOpeningQuoteAt: 12,
            attribClosingQuoteAt: 18,
            attribValue: "radio",
            attribValueStartsAt: 13,
            attribValueEndsAt: 18,
            attribStart: 7,
            attribEnd: 19
          },
          {
            attribName: "checked",
            attribNameStartsAt: 20,
            attribNameEndsAt: 27,
            attribOpeningQuoteAt: 29,
            attribClosingQuoteAt: null,
            attribValue: null,
            attribValueStartsAt: null,
            attribValueEndsAt: null,
            attribStart: 20,
            attribEnd: 30
          }
        ]
      },
      {
        type: "text",
        start: 31,
        end: 38,
        tail: null,
        kind: null
      }
    ]);
    t.end();
  }
);

t.test(`05.05 - two asterisks as an attribute's value`, t => {
  const gathered = [];
  ct(`<frameset cols="**">`, {
    tagCb: obj => {
      gathered.push(obj);
    }
  });

  t.match(gathered, [
    {
      type: "html",
      tagNameStartsAt: 1,
      tagNameEndsAt: 9,
      tagName: "frameset",
      recognised: true,
      closing: false,
      void: false,
      pureHTML: true,
      esp: [],
      start: 0,
      end: 20,
      kind: null,
      attribs: [
        {
          attribName: "cols",
          attribNameStartsAt: 10,
          attribNameEndsAt: 14,
          attribOpeningQuoteAt: 15,
          attribClosingQuoteAt: 18,
          attribValue: "**",
          attribValueStartsAt: 16,
          attribValueEndsAt: 18,
          attribStart: 10,
          attribEnd: 19
        }
      ]
    }
  ]);
  t.end();
});

t.test(`05.06 - many asterisks as an attribute's value`, t => {
  const gathered = [];
  ct(`<frameset cols="******">`, {
    tagCb: obj => {
      gathered.push(obj);
    }
  });

  t.match(gathered, [
    {
      type: "html",
      tagNameStartsAt: 1,
      tagNameEndsAt: 9,
      tagName: "frameset",
      recognised: true,
      closing: false,
      void: false,
      pureHTML: true,
      esp: [],
      start: 0,
      end: 24,
      kind: null,
      attribs: [
        {
          attribName: "cols",
          attribNameStartsAt: 10,
          attribNameEndsAt: 14,
          attribOpeningQuoteAt: 15,
          attribClosingQuoteAt: 22,
          attribValue: "******",
          attribValueStartsAt: 16,
          attribValueEndsAt: 22,
          attribStart: 10,
          attribEnd: 23
        }
      ]
    }
  ]);
  t.end();
});

// 06. recognised and not recognised
// -----------------------------------------------------------------------------

t.test(`06.01 - two attrs, one recognised one not`, t => {
  const gathered = [];
  ct(`<table class="aa" bbb="cc">`, {
    tagCb: obj => {
      gathered.push(obj);
    }
  });

  t.match(gathered, [
    {
      type: "html",
      tagName: "table",
      recognised: true,
      start: 0,
      end: 27,
      attribs: [
        {
          attribName: "class",
          attribNameRecognised: true,
          attribStart: 7,
          attribEnd: 17
        },
        {
          attribName: "bbb",
          attribNameRecognised: false,
          attribStart: 18,
          attribEnd: 26
        }
      ]
    }
  ]);
  t.end();
});
