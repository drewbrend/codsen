const t = require("tap");
const ct = require("../dist/codsen-tokenizer.cjs");

// 01. healthy html, no tricks
// -----------------------------------------------------------------------------

t.test("01.01 - text-tag-text", t => {
  const gathered = [];
  ct("  <a>z", obj => {
    gathered.push(obj);
  });

  t.match(
    gathered,
    [
      {
        type: "text",
        start: 0,
        end: 2
      },
      {
        type: "html",
        start: 2,
        end: 5
      },
      {
        type: "text",
        start: 5,
        end: 6
      }
    ],
    "01.01"
  );
  t.end();
});

t.test("01.02 - text only", t => {
  const gathered = [];
  ct("  ", obj => {
    gathered.push(obj);
  });
  t.same(
    gathered,
    [
      {
        type: "text",
        start: 0,
        end: 2,
        tail: null,
        kind: null,
        attribs: []
      }
    ],
    "01.02"
  );
  t.end();
});

t.test("01.03 - opening tag only", t => {
  const gathered = [];
  ct("<a>", obj => {
    gathered.push(obj);
  });
  t.same(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 3,
        tagNameStartAt: 1,
        tagNameEndAt: 2,
        tagName: "a",
        recognised: true,
        closing: false,
        void: false,
        pureHTML: true,
        esp: [],
        tail: null,
        kind: null,
        attribs: []
      }
    ],
    "01.03"
  );
  t.end();
});

t.test("01.04 - closing tag only", t => {
  const gathered = [];
  ct("</a>", obj => {
    gathered.push(obj);
  });
  t.same(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 4,
        tagNameStartAt: 2,
        tagNameEndAt: 3,
        tagName: "a",
        recognised: true,
        closing: true,
        void: false,
        pureHTML: true,
        esp: [],
        tail: null,
        kind: null,
        attribs: []
      }
    ],
    "01.04"
  );
  t.end();
});

// notice the tag name case is upper:
t.test("01.05 - self-closing tag only", t => {
  const gathered = [];
  ct("<BR/>", obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "html",
        tagNameStartAt: 1,
        tagNameEndAt: 3,
        tagName: "br",
        closing: false,
        void: true,
        start: 0,
        end: 5
      }
    ],
    "01.05"
  );
  t.end();
});

t.test("01.06 - multiple tags", t => {
  const gathered = [];
  ct("<a><b><c>", obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 3
      },
      {
        type: "html",
        start: 3,
        end: 6
      },
      {
        type: "html",
        start: 6,
        end: 9
      }
    ],
    "01.06"
  );
  t.end();
});

t.test("01.07 - closing bracket in the attribute's value", t => {
  const gathered = [];
  ct(`<a alt=">">`, obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 11
      }
    ],
    "01.07"
  );
  t.end();
});

t.test("01.08 - closing bracket layers of nested quotes", t => {
  const gathered = [];
  ct(`<a alt='"'">"'"'>`, obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 17
      }
    ],
    "01.08"
  );
  t.end();
});

t.test("01.09 - bracket as text", t => {
  const gathered = [];
  ct("a < b", obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "text",
        start: 0,
        end: 5
      }
    ],
    "01.09"
  );
  t.end();
});

t.test("01.10 - tag followed by brackets", t => {
  const gathered = [];
  ct(`<a>"something"<span>'here'</span></a>`, obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "html",
        tagName: "a",
        closing: false,
        void: false,
        start: 0,
        end: 3
      },
      {
        type: "text",
        start: 3,
        end: 14
      },
      {
        type: "html",
        tagName: "span",
        closing: false,
        void: false,
        start: 14,
        end: 20
      },
      {
        type: "text",
        start: 20,
        end: 26
      },
      {
        type: "html",
        tagName: "span",
        closing: true,
        void: false,
        start: 26,
        end: 33
      },
      {
        type: "html",
        tagName: "a",
        closing: true,
        void: false,
        start: 33,
        end: 37
      }
    ],
    "01.10"
  );
  t.end();
});

t.test("01.11 - html comment", t => {
  const gathered = [];
  ct("<table><!--[if (gte mso 9)|(IE)]>\n<table", obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 7
      },
      {
        type: "html",
        start: 7,
        end: 33,
        kind: "comment"
      },
      {
        type: "text",
        start: 33,
        end: 34
      },
      {
        type: "html",
        start: 34,
        end: 40
      }
    ],
    "01.11"
  );
  t.end();
});

t.test("01.12 - html5 doctype", t => {
  const gathered = [];
  ct("a<!DOCTYPE html>b", obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "text",
        start: 0,
        end: 1
      },
      {
        type: "html",
        start: 1,
        end: 16,
        kind: "doctype"
      },
      {
        type: "text",
        start: 16,
        end: 17
      }
    ],
    "01.12"
  );
  t.end();
});

t.test("01.13 - xhtml doctype", t => {
  const gathered = [];
  ct(
    `z<!DOCTYPE html PUBLIC
  "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="ar" dir="ltr" xmlns="http://www.w3.org/1999/xhtml">z`,
    obj => {
      gathered.push(obj);
    }
  );
  t.match(
    gathered,
    [
      {
        type: "text",
        start: 0,
        end: 1
      },
      {
        type: "html",
        start: 1,
        end: 126,
        kind: "doctype"
      },
      {
        type: "text",
        start: 126,
        end: 127
      },
      {
        type: "html",
        start: 127,
        end: 190
      },
      {
        type: "text",
        start: 190,
        end: 191
      }
    ],
    "01.13"
  );
  t.end();
});

t.test("01.14 - xhtml DTD doctype", t => {
  const gathered = [];
  ct(
    `z<?xml version="1.0" encoding="UTF-8"?>
 <!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
     "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
 <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">z`,
    obj => {
      gathered.push(obj);
    }
  );
  t.match(
    gathered,
    [
      {
        type: "text",
        start: 0,
        end: 1
      },
      {
        type: "html",
        start: 1,
        end: 39,
        kind: "xml"
      },
      {
        type: "text",
        start: 39,
        end: 41
      },
      {
        type: "html",
        start: 41,
        end: 160,
        kind: "doctype"
      },
      {
        type: "text",
        start: 160,
        end: 162
      },
      {
        type: "html",
        start: 162,
        end: 229
      },
      {
        type: "text",
        start: 229,
        end: 230
      }
    ],
    "01.14"
  );
  t.end();
});

t.test("01.15 - void tags", t => {
  const gathered = [];
  ct("<br>", obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 4,
        void: true
      }
    ],
    "01.15"
  );
  t.end();
});

t.test("01.16 - recognised tags", t => {
  const gathered = [];
  ct("<content>", obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 9,
        void: false,
        recognised: true
      }
    ],
    "01.16"
  );
  t.end();
});

t.test("01.17 - unrecognised tags", t => {
  const gathered = [];
  ct("<contentz>", obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 10,
        void: false,
        recognised: false
      }
    ],
    "01.17"
  );
  t.end();
});

t.test("01.18 - wrong case but still recognised tags", t => {
  const gathered = [];
  ct("</tablE>", obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 8,
        void: false,
        recognised: true
      }
    ],
    "01.18"
  );
  t.end();
});

t.test("01.19 - correct HTML5 doctype", t => {
  const gathered = [];
  ct("<!DOCTYPE html>", obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 15,
        void: false,
        recognised: true
      }
    ],
    "01.19"
  );
  t.end();
});

t.test("01.20 - correct HTML5 doctype", t => {
  const gathered = [];
  ct(
    `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">`,
    obj => {
      gathered.push(obj);
    }
  );
  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 105,
        void: false,
        recognised: true
      }
    ],
    "01.20"
  );
  t.end();
});

t.test("01.21 - tag names with numbers", t => {
  const gathered = [];
  ct("<h1>", obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "html",
        tagNameStartAt: 1,
        tagNameEndAt: 3,
        tagName: "h1",
        closing: false,
        recognised: true,
        void: false,
        start: 0,
        end: 4
      }
    ],
    "01.21"
  );
  t.end();
});

t.test("01.22 - exact match, tag pair with whitespace", t => {
  const gathered = [];
  ct("<a href> </a>", obj => {
    gathered.push(obj);
  });
  t.same(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 8,
        tagNameStartAt: 1,
        tagNameEndAt: 2,
        tagName: "a",
        recognised: true,
        closing: false,
        void: false,
        pureHTML: true,
        esp: [],
        tail: null,
        kind: null,
        attribs: [
          {
            attribName: "href",
            attribNameRecognised: true,
            attribNameStartAt: 3,
            attribNameEndAt: 7,
            attribOpeningQuoteAt: null,
            attribClosingQuoteAt: null,
            attribValue: null,
            attribValueStartAt: null,
            attribValueEndAt: null,
            attribStart: 3,
            attribEnd: 7
          }
        ]
      },
      {
        type: "text",
        start: 8,
        end: 9,
        tail: null,
        kind: null,
        attribs: []
      },
      {
        type: "html",
        start: 9,
        end: 13,
        tagNameStartAt: 11,
        tagNameEndAt: 12,
        tagName: "a",
        recognised: true,
        closing: true,
        void: false,
        pureHTML: true,
        esp: [],
        tail: null,
        kind: null,
        attribs: []
      }
    ],
    "01.22"
  );
  t.end();
});

t.test("01.23 - closing tag with attributes", t => {
  const gathered = [];
  ct(`</a class="z">`, obj => {
    gathered.push(obj);
  });
  t.same(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 14,
        tagNameStartAt: 2,
        tagNameEndAt: 3,
        tagName: "a",
        recognised: true,
        closing: true,
        void: false,
        pureHTML: true,
        esp: [],
        tail: null,
        kind: null,
        attribs: [
          {
            attribName: "class",
            attribStart: 4,
            attribEnd: 13,
            attribNameRecognised: true,
            attribNameStartAt: 4,
            attribNameEndAt: 9,
            attribOpeningQuoteAt: 10,
            attribClosingQuoteAt: 12,
            attribValue: "z",
            attribValueStartAt: 11,
            attribValueEndAt: 12
          }
        ]
      }
    ],
    "01.23"
  );
  t.end();
});

// 02. CDATA
// -----------------------------------------------------------------------------

t.test("02.01 - CDATA - correct", t => {
  const gathered = [];
  ct(`<![CDATA[x<y]]>`, obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 15,
        void: false,
        recognised: true,
        kind: "cdata"
      }
    ],
    "02.01"
  );
  t.end();
});

t.test("02.02 - CDATA - messed up 1", t => {
  const gathered = [];
  ct(`<[CDATA[x<y]]>`, obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 14,
        void: false,
        recognised: true,
        kind: "cdata"
      }
    ],
    "02.02"
  );
  t.end();
});

t.test("02.03 - CDATA - messed up 2", t => {
  const gathered = [];
  ct(`<!CDATA[x<y]]>`, obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 14,
        void: false,
        recognised: true,
        kind: "cdata"
      }
    ],
    "02.03"
  );
  t.end();
});

t.test("02.04 - CDATA - messed up 3", t => {
  const gathered = [];
  ct(`<![ CData[x<y]]>`, obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 16,
        void: false,
        recognised: true,
        kind: "cdata"
      }
    ],
    "02.04"
  );
  t.end();
});

// 03. XML
// -----------------------------------------------------------------------------

t.test("03.01 - XML - correct", t => {
  const gathered = [];
  ct(`<?xml version="1.0" encoding="UTF-8"?>`, obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 38,
        void: false,
        recognised: true,
        kind: "xml"
      }
    ],
    "03.01"
  );
  t.end();
});

t.test("03.02 - XML - incorrect 1", t => {
  const gathered = [];
  ct(`< ?xml version="1.0" encoding="UTF-8"?>`, obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 39,
        void: false,
        recognised: true,
        kind: "xml"
      }
    ],
    "03.02"
  );
  t.end();
});

t.test("03.03 - XML - incorrect 2", t => {
  const gathered = [];
  ct(`<? xml version="1.0" encoding="UTF-8"?>`, obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 39,
        void: false,
        recognised: true,
        kind: "xml"
      }
    ],
    "03.03"
  );
  t.end();
});

t.test("03.04 - XML - incorrect 3", t => {
  const gathered = [];
  ct(`< ?XML version="1.0" encoding="UTF-8"?>`, obj => {
    gathered.push(obj);
  });
  t.match(
    gathered,
    [
      {
        type: "html",
        start: 0,
        end: 39,
        void: false,
        recognised: true,
        kind: "xml"
      }
    ],
    "03.04"
  );
  t.end();
});
