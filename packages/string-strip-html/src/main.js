/* eslint no-nested-ternary: 0 */

import rangesApply from "ranges-apply";
import Ranges from "ranges-push";
import isObj from "lodash.isplainobject";
import trim from "lodash.trim";
import without from "lodash.without";
import ent from "ent";
import { right } from "string-left-right";
import { characterSuitableForNames, prepHopefullyAnArray } from "./util";

function stripHtml(str, originalOpts) {
  // const
  // ===========================================================================
  const start = Date.now();

  const definitelyTagNames = new Set([
    "!doctype",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "base",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "doctype",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "math",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "param",
    "picture",
    "pre",
    "progress",
    "rb",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "samp",
    "script",
    "section",
    "select",
    "slot",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "svg",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "ul",
    "var",
    "video",
    "wbr",
    "xml",
  ]);
  const singleLetterTags = new Set(["a", "b", "i", "p", "q", "s", "u"]);

  const punctuation = new Set([
    ".",
    ",",
    "?",
    ";",
    ")",
    "\u2026",
    '"',
    "\u00BB",
  ]);
  // \u00BB is &raquo; - guillemet - right angled quote
  // \u2026 is &hellip; - ellipsis

  const stripTogetherWithTheirContentsDefaults = new Set([
    "script",
    "style",
    "xml",
  ]);

  // we'll gather opening tags from ranged-pairs here:
  const rangedOpeningTags = [];

  // we'll put tag locations here
  const allTagLocations = [];
  const filteredTagLocations = [];

  // variables
  // ===========================================================================

  // records the info about the suspected tag:
  let tag = { attributes: [] };

  // records the beginning of the current whitespace chunk:
  let chunkOfWhitespaceStartsAt = null;

  // records the beginning of the current chunk of spaces (strictly spaces-only):
  let chunkOfSpacesStartsAt = null;

  // temporary variable to assemble the attribute pieces:
  let attrObj = {};

  // marker to store captured href, used in opts.dumpLinkHrefsNearby.enabled
  let hrefDump = {}; // 2 keys: "tagName" - where href was spotted, "hrefValue" - URL

  // used to insert extra things when pushing into ranges array
  let stringToInsertAfter = "";

  // state flag
  let hrefInsertionActive;

  // marker to keep a note where does the whitespace chunk that follows closing bracket end.
  // It's necessary for opts.trimOnlySpaces when there's closing bracket, whitespace, non-space
  // whitespace character ("\n", "\t" etc), whitspace, end-of-file. Trim will kick in and will
  // try to trim up until the EOF, be we'll have to pull the end of trim back, back to the first
  // character of aforementioned non-space whitespace character sequence.
  // This variable will tell exactly where it is located.
  let spacesChunkWhichFollowsTheClosingBracketEndsAt = null;

  // functions
  // ===========================================================================

  function existy(x) {
    return x != null;
  }
  function isStr(something) {
    return typeof something === "string";
  }

  function treatRangedTags(i, opts, rangesToDelete) {
    console.log(`204 treatRangedTags(${i}) called`);
    console.log(
      `206 opts.stripTogetherWithTheirContents = ${JSON.stringify(
        opts.stripTogetherWithTheirContents,
        null,
        0
      )}; tag.name = ${tag.name}`
    );
    if (
      Array.isArray(opts.stripTogetherWithTheirContents) &&
      opts.stripTogetherWithTheirContents.includes(tag.name)
    ) {
      // it depends, is it opening or closing range tag:

      // We could try to distinguish opening from closing tags by presence of
      // slash, but that would be a liability for dirty code cases where clash
      // is missing. Better, instead, just see if an entry for that tag name
      // already exists in the rangesToDelete[].

      console.log(
        `224 ${`\u001b[${33}m${`rangedOpeningTags`}\u001b[${39}m`} = ${JSON.stringify(
          rangedOpeningTags,
          null,
          4
        )}`
      );
      if (
        Array.isArray(rangedOpeningTags) &&
        rangedOpeningTags.some(
          (obj) => obj.name === tag.name && obj.lastClosingBracketAt < i
        )
      ) {
        // if (tag.slashPresent) {
        console.log(
          `238 \u001b[${31}m${`treatRangedTags():`}\u001b[${39}m closing ranged tag`
        );
        // closing tag.
        // filter and remove the found tag
        for (let y = rangedOpeningTags.length; y--; ) {
          if (rangedOpeningTags[y].name === tag.name) {
            // we'll remove from opening tag's opening bracket to closing tag's
            // closing bracket because whitespace will be taken care of separately,
            // when tags themselves will be removed.
            // Basically, for each range tag there will be 3 removals:
            // opening tag, closing tag and all from opening to closing tag.
            // We keep removing opening and closing tags along whole range
            // because of few reasons: 1. cases of broken/dirty code, 2. keeping
            // the algorithm simpler, 3. opts that control whitespace removal
            // around tags.

            // 1. add range without caring about surrounding whitespace around
            // the range
            console.log(
              `rangesToDelete.current(): ${JSON.stringify(
                rangesToDelete.current(),
                null,
                0
              )}`
            );

            // if (
            //   Number.isInteger(tag.lastClosingBracketAt) &&
            //   (!allTagLocations.length ||
            //     allTagLocations[allTagLocations.length - 1][0] !==
            //       tag.lastOpeningBracketAt)
            // ) {
            //   // submit the tag
            //   allTagLocations.push([
            //     tag.lastOpeningBracketAt,
            //     tag.lastClosingBracketAt + 1,
            //   ]);
            //   console.log(
            //     `276 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${
            //       tag.lastOpeningBracketAt
            //     }, ${tag.lastClosingBracketAt + 1}] to allTagLocations`
            //   );
            // }

            console.log(
              `283 ABOUT TO cb()-PUSH RANGE: [${rangedOpeningTags[y].lastOpeningBracketAt}, ${i}]`
            );
            if (punctuation.has(str[i])) {
              opts.cb({
                tag,
                deleteFrom: rangedOpeningTags[y].lastOpeningBracketAt,
                deleteTo: i,
                insert: null,
                rangesArr: rangesToDelete,
                proposedReturn: [
                  rangedOpeningTags[y].lastOpeningBracketAt,
                  i,
                  null,
                ],
              });
              // null will remove any spaces added so far. Opening and closing range tags might
              // have received spaces as separate entities, but those might not be necessary for range:
              // "text <script>deleteme</script>."
            } else {
              opts.cb({
                tag,
                deleteFrom: rangedOpeningTags[y].lastOpeningBracketAt,
                deleteTo: i,
                insert: "",
                rangesArr: rangesToDelete,
                proposedReturn: [
                  rangedOpeningTags[y].lastOpeningBracketAt,
                  i,
                  "",
                ],
              });
            }
            // 2. delete the reference to this range from rangedOpeningTags[]
            // because there might be more ranged tags of the same name or
            // different, overlapping or encompassing ranged tags with same
            // or different name.
            rangedOpeningTags.splice(y, 1);
            console.log(
              `321 new \u001b[${33}m${`rangedOpeningTags`}\u001b[${39}m = ${JSON.stringify(
                rangedOpeningTags,
                null,
                4
              )}`
            );
            // 3. stop the loop
            break;
          }
        }
      } else {
        // opening tag.
        console.log(
          `334 \u001b[${31}m${`treatRangedTags():`}\u001b[${39}m opening ranged tag`
        );
        rangedOpeningTags.push(tag);
        console.log(
          `338 pushed tag{} to \u001b[${33}m${`rangedOpeningTags`}\u001b[${39}m\nwhich is now equal to:\n${JSON.stringify(
            rangedOpeningTags,
            null,
            4
          )}`
        );
      }
    }
  }

  function calculateWhitespaceToInsert(
    str2, // whole string
    currCharIdx, // current index
    fromIdx, // leftmost whitespace edge around tag
    toIdx, // rightmost whitespace edge around tag
    lastOpeningBracketAt, // tag actually starts here (<)
    lastClosingBracketAt // tag actually ends here (>)
  ) {
    console.log(
      `357 \u001b[${35}m${`calculateWhitespaceToInsert() called`}\u001b[${39}m`
    );
    console.log(
      `360 calculateWhitespaceToInsert(): ${`\u001b[${33}m${`currCharIdx`}\u001b[${39}m`} = ${JSON.stringify(
        currCharIdx,
        null,
        0
      )}; ${`\u001b[${33}m${`str2[currCharIdx]`}\u001b[${39}m`} = ${JSON.stringify(
        str2[currCharIdx],
        null,
        0
      )}; ${`\u001b[${33}m${`str2[tag.leftOuterWhitespace]`}\u001b[${39}m`} = ${JSON.stringify(
        str2[tag.leftOuterWhitespace],
        null,
        0
      )}; ${`\u001b[${33}m${`str2[tag.leftOuterWhitespace - 1]`}\u001b[${39}m`} = ${JSON.stringify(
        str2[tag.leftOuterWhitespace - 1],
        null,
        0
      )}; ${`\u001b[${33}m${`fromIdx`}\u001b[${39}m`} = ${JSON.stringify(
        fromIdx,
        null,
        0
      )}; ${`\u001b[${33}m${`toIdx`}\u001b[${39}m`} = ${JSON.stringify(
        toIdx,
        null,
        0
      )}`
    );
    let strToEvaluateForLineBreaks = "";
    if (fromIdx < lastOpeningBracketAt) {
      strToEvaluateForLineBreaks += str2.slice(fromIdx, lastOpeningBracketAt);
      console.log(
        `390 strToEvaluateForLineBreaks = ${JSON.stringify(
          strToEvaluateForLineBreaks,
          null,
          0
        )} (length ${
          strToEvaluateForLineBreaks.length
        }; sliced [${fromIdx}, ${lastOpeningBracketAt}])`
      );
    }
    if (toIdx > lastClosingBracketAt + 1) {
      // limit whitespace that follows the tag, stop at linebreak. That's to make
      // the algorithm composable - we include linebreaks in front but not after.
      const temp = str2.slice(lastClosingBracketAt + 1, toIdx);
      if (temp.includes("\n") && str2[toIdx] === "<") {
        strToEvaluateForLineBreaks += " ";
      } else {
        strToEvaluateForLineBreaks += temp;
      }
      console.log(
        `409 strToEvaluateForLineBreaks = ${JSON.stringify(
          strToEvaluateForLineBreaks,
          null,
          0
        )} (length ${strToEvaluateForLineBreaks.length}; sliced [${
          lastClosingBracketAt + 1
        }, ${toIdx}])`
      );
    }
    console.log(
      `419 strToEvaluateForLineBreaks = ${JSON.stringify(
        strToEvaluateForLineBreaks,
        null,
        0
      )} (length ${strToEvaluateForLineBreaks.length})`
    );
    if (!punctuation.has(str2[currCharIdx]) && str2[currCharIdx] !== "!") {
      const foundLineBreaks = strToEvaluateForLineBreaks.match(/\n/g);
      if (Array.isArray(foundLineBreaks) && foundLineBreaks.length) {
        if (foundLineBreaks.length === 1) {
          return "\n";
        }
        if (foundLineBreaks.length === 2) {
          return "\n\n";
        }
        // return three line breaks maximum
        return "\n\n\n";
      }
      // default spacer - a single space
      return " ";
    }
    // default case: space
    return "";
  }

  function calculateHrefToBeInserted(opts) {
    if (
      opts.dumpLinkHrefsNearby.enabled &&
      Object.keys(hrefDump).length &&
      hrefDump.tagName === tag.name &&
      tag.lastOpeningBracketAt &&
      ((hrefDump.openingTagEnds &&
        tag.lastOpeningBracketAt > hrefDump.openingTagEnds) ||
        !hrefDump.openingTagEnds)
    ) {
      hrefInsertionActive = true;
      console.log(
        `456 calculateHrefToBeInserted(): hrefInsertionActive = "${hrefInsertionActive}"`
      );
    }

    if (hrefInsertionActive) {
      const lineBreaks = opts.dumpLinkHrefsNearby.putOnNewLine ? "\n\n" : "";
      stringToInsertAfter = `${lineBreaks}${hrefDump.hrefValue}${lineBreaks}`;
      console.log(
        `464 calculateHrefToBeInserted(): stringToInsertAfter = ${stringToInsertAfter}`
      );
    }
  }

  // validation
  // ===========================================================================
  if (typeof str !== "string") {
    throw new TypeError(
      `string-strip-html/stripHtml(): [THROW_ID_01] Input must be string! Currently it's: ${(typeof str).toLowerCase()}, equal to:\n${JSON.stringify(
        str,
        null,
        4
      )}`
    );
  }
  if (originalOpts && !isObj(originalOpts)) {
    throw new TypeError(
      `string-strip-html/stripHtml(): [THROW_ID_02] Optional Options Object must be a plain object! Currently it's: ${(typeof originalOpts).toLowerCase()}, equal to:\n${JSON.stringify(
        originalOpts,
        null,
        4
      )}`
    );
  }

  // eslint-disable-next-line consistent-return
  function resetHrefMarkers() {
    // reset the hrefDump
    if (hrefInsertionActive) {
      hrefDump = {};
      hrefInsertionActive = false;
    }
  }

  // prep opts
  // ===========================================================================
  const defaults = {
    ignoreTags: [],
    onlyStripTags: [],
    stripTogetherWithTheirContents: [...stripTogetherWithTheirContentsDefaults],
    skipHtmlDecoding: false,
    trimOnlySpaces: false,
    dumpLinkHrefsNearby: {
      enabled: false,
      putOnNewLine: false,
      wrapHeads: "",
      wrapTails: "",
    },
    cb: null,
  };
  const opts = { ...defaults, ...originalOpts };

  if (Object.prototype.hasOwnProperty.call(opts, "returnRangesOnly")) {
    throw new TypeError(
      `string-strip-html/stripHtml(): [THROW_ID_03] opts.returnRangesOnly has been removed from the API since v.5 release.`
    );
  }

  // filter non-string or whitespace entries from the following arrays or turn
  // them into arrays:
  opts.ignoreTags = prepHopefullyAnArray(opts.ignoreTags, "opts.ignoreTags");
  opts.onlyStripTags = prepHopefullyAnArray(
    opts.onlyStripTags,
    "opts.onlyStripTags"
  );

  // let's define the onlyStripTagsMode. Since opts.onlyStripTags can cancel
  // out the entries in opts.onlyStripTags, it can be empty but this mode has
  // to be switched on:
  const onlyStripTagsMode = !!opts.onlyStripTags.length;

  // if both opts.onlyStripTags and opts.ignoreTags are set, latter is respected,
  // we simply exclude ignored tags from the opts.onlyStripTags.
  if (opts.onlyStripTags.length && opts.ignoreTags.length) {
    opts.onlyStripTags = without(opts.onlyStripTags, ...opts.ignoreTags);
  }

  if (!isObj(opts.dumpLinkHrefsNearby)) {
    opts.dumpLinkHrefsNearby = { ...defaults.dumpLinkHrefsNearby };
  }
  // Object.assign doesn't deep merge, so we take care of opts.dumpLinkHrefsNearby:
  opts.dumpLinkHrefsNearby = defaults.dumpLinkHrefsNearby;
  if (
    isObj(originalOpts) &&
    Object.prototype.hasOwnProperty.call(originalOpts, "dumpLinkHrefsNearby") &&
    existy(originalOpts.dumpLinkHrefsNearby)
  ) {
    /* istanbul ignore else */
    if (isObj(originalOpts.dumpLinkHrefsNearby)) {
      opts.dumpLinkHrefsNearby = {
        ...defaults.dumpLinkHrefsNearby,
        ...originalOpts.dumpLinkHrefsNearby,
      };
    } else if (originalOpts.dumpLinkHrefsNearby) {
      // checking to omit value as number zero
      throw new TypeError(
        `string-strip-html/stripHtml(): [THROW_ID_04] Optional Options Object's key dumpLinkHrefsNearby was set to ${typeof originalOpts.dumpLinkHrefsNearby}, equal to ${JSON.stringify(
          originalOpts.dumpLinkHrefsNearby,
          null,
          4
        )}. The only allowed value is a plain object. See the API reference.`
      );
    }
  }

  if (!opts.stripTogetherWithTheirContents) {
    opts.stripTogetherWithTheirContents = [];
  } else if (
    typeof opts.stripTogetherWithTheirContents === "string" &&
    opts.stripTogetherWithTheirContents.length > 0
  ) {
    opts.stripTogetherWithTheirContents = [opts.stripTogetherWithTheirContents];
  }

  const somethingCaught = {};
  if (
    opts.stripTogetherWithTheirContents &&
    Array.isArray(opts.stripTogetherWithTheirContents) &&
    opts.stripTogetherWithTheirContents.length &&
    !opts.stripTogetherWithTheirContents.every((el, i) => {
      if (!(typeof el === "string")) {
        somethingCaught.el = el;
        somethingCaught.i = i;
        return false;
      }
      return true;
    })
  ) {
    throw new TypeError(
      `string-strip-html/stripHtml(): [THROW_ID_05] Optional Options Object's key stripTogetherWithTheirContents was set to contain not just string elements! For example, element at index ${
        somethingCaught.i
      } has a value ${
        somethingCaught.el
      } which is not string but ${(typeof somethingCaught.el).toLowerCase()}.`
    );
  }

  // prep the opts.cb
  console.log(`603 opts.cb type = ${typeof opts.cb}`);
  if (!opts.cb) {
    opts.cb = ({ rangesArr, proposedReturn }) => {
      rangesArr.push(...proposedReturn);
    };
  }

  console.log(
    `611 string-strip-html: final ${`\u001b[${33}m${`opts`}\u001b[${39}m`} = ${JSON.stringify(
      opts,
      null,
      4
    )}; ${`\u001b[${33}m${`input`}\u001b[${39}m`} = "${str}"`
  );

  // if the links have to be on a new line, we need to increase the allowance for line breaks
  // in Ranges class, it's the ranges-push API setting opts.limitLinebreaksCount
  // see https://www.npmjs.com/package/ranges-push#optional-options-object
  const rangesToDelete = new Ranges({
    limitToBeAddedWhitespace: true,
    limitLinebreaksCount: 2,
  });

  // TODO - that's crummy
  // use ranges-ent-decode
  if (!opts.skipHtmlDecoding) {
    while (str !== ent.decode(str)) {
      // eslint-disable-next-line no-param-reassign
      str = ent.decode(str);
    }
  }

  // step 1.
  // ===========================================================================

  for (let i = 0, len = str.length; i < len; i++) {
    console.log(
      `\u001b[${36}m${`===============================`}\u001b[${39}m \u001b[${35}m${`str[ ${i} ] = ${`\u001b[${31}m${
        str[i].trim() === ""
          ? str[i] === null
            ? "null"
            : str[i] === "\n"
            ? "line break"
            : str[i] === "\t"
            ? "tab"
            : "space"
          : str[i]
      }\u001b[${39}m`}`}\u001b[${39}m \u001b[${36}m${`===============================`}\u001b[${39}m`
    );

    // catch the first ending of the spaces chunk that follows the closing bracket.
    // -------------------------------------------------------------------------
    // There can be no space after bracket, in that case, the result will be that character that
    // follows the closing bracket.
    // There can be bunch of spaces that end with EOF. In that case it's fine, this variable will
    // be null.
    if (
      Object.keys(tag).length > 1 &&
      tag.lastClosingBracketAt &&
      tag.lastClosingBracketAt < i &&
      str[i] !== " " &&
      spacesChunkWhichFollowsTheClosingBracketEndsAt === null
    ) {
      spacesChunkWhichFollowsTheClosingBracketEndsAt = i;
    }

    // catch the closing bracket of dirty tags with missing opening brackets
    // -------------------------------------------------------------------------
    if (str[i] === ">") {
      console.log(`672 closing bracket caught`);
      // tend cases where opening bracket of a tag is missing:
      if ((!tag || Object.keys(tag).length < 2) && i > 1) {
        console.log("675 TRAVERSE BACKWARDS");

        // traverse backwards either until start of string or ">" is found
        for (let y = i; y--; ) {
          console.log(`\u001b[${35}m${`str[${y}] = ${str[y]}`}\u001b[${39}m`);
          if (str[y - 1] === undefined || str[y] === ">") {
            console.log("681 BREAK");

            const startingPoint = str[y - 1] === undefined ? y : y + 1;
            const culprit = str.slice(startingPoint, i + 1);
            console.log(
              `686 CULPRIT: "${`\u001b[${31}m${culprit}\u001b[${39}m`}"`
            );

            // Check if the culprit starts with a tag that's more likely a tag
            // name (like "body" or "article"). Single-letter tag names are excluded
            // because they can be plausible, ie. in math texts and so on.
            // Nobody uses puts comparison signs between words like: "article > ",
            // but single letter names can be plausible: "a > b" in math.

            console.log(
              `696 "${trim(
                culprit
                  .trim()
                  .split(/\s+/)
                  .filter((val2) => val2.trim())
                  .filter((val3, i3) => i3 === 0),
                "/>"
              )}"`
            );

            if (
              str !== `<${trim(culprit.trim(), "/>")}>` && // recursion prevention
              [...definitelyTagNames].some(
                (val) =>
                  trim(
                    culprit
                      .trim()
                      .split(/\s+/)
                      .filter((val2) => val2.trim())
                      .filter((val3, i3) => i3 === 0),
                    "/>"
                  ).toLowerCase() === val
              ) &&
              stripHtml(`<${culprit.trim()}>`, opts).result === ""
            ) {
              /* istanbul ignore else */
              if (
                !allTagLocations.length ||
                allTagLocations[allTagLocations.length - 1][0] !==
                  tag.lastOpeningBracketAt
              ) {
                allTagLocations.push([startingPoint, i + 1]);
                console.log(
                  `729 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${
                    tag.lastOpeningBracketAt
                  }, ${tag.lastClosingBracketAt + 1}] to allTagLocations`
                );
              }

              /* istanbul ignore else */
              if (
                !filteredTagLocations.length ||
                filteredTagLocations[filteredTagLocations.length - 1][0] !==
                  tag.lastOpeningBracketAt
              ) {
                filteredTagLocations.push([startingPoint, i + 1]);
                console.log(
                  `743 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${
                    tag.lastOpeningBracketAt
                  }, ${tag.lastClosingBracketAt + 1}] to filteredTagLocations`
                );
              }

              const whiteSpaceCompensation = calculateWhitespaceToInsert(
                str,
                i,
                startingPoint,
                i + 1,
                startingPoint,
                i + 1
              );
              console.log(
                `758 \u001b[${33}m${`SUBMIT RANGE #3: [${startingPoint}, ${
                  i + 1
                }, "${whiteSpaceCompensation}"]`}\u001b[${39}m`
              );
              let deleteUpTo = i + 1;
              if (str[deleteUpTo] && !str[deleteUpTo].trim()) {
                for (let z = deleteUpTo; z < len; z++) {
                  if (str[z].trim()) {
                    deleteUpTo = z;
                    break;
                  }
                }
              }
              console.log(
                `772 cb()-PUSHING [${startingPoint}, ${deleteUpTo}, "${whiteSpaceCompensation}"]`
              );
              opts.cb({
                tag,
                deleteFrom: startingPoint,
                deleteTo: deleteUpTo,
                insert: whiteSpaceCompensation,
                rangesArr: rangesToDelete,
                proposedReturn: [
                  startingPoint,
                  deleteUpTo,
                  whiteSpaceCompensation,
                ],
              });
            }
            break;
          }
        }
      }
    }

    // catch slash
    // -------------------------------------------------------------------------
    if (
      str[i] === "/" &&
      !(tag.quotes && tag.quotes.value) &&
      Number.isInteger(tag.lastOpeningBracketAt) &&
      !Number.isInteger(tag.lastClosingBracketAt)
    ) {
      console.log(`801 \u001b[${33}m${`tag.slashPresent`}\u001b[${39}m = true`);
      tag.slashPresent = i;
    }

    // catch double or single quotes
    // -------------------------------------------------------------------------
    if (str[i] === '"' || str[i] === "'") {
      if (
        tag.nameStarts &&
        tag.quotes &&
        tag.quotes.value &&
        tag.quotes.value === str[i]
      ) {
        // 1. finish assembling the "attrObj{}"
        attrObj.valueEnds = i;
        attrObj.value = str.slice(attrObj.valueStarts, i);
        console.log(
          `818 PUSHING ${`\u001b[${33}m${`attrObj`}\u001b[${39}m`} = ${JSON.stringify(
            attrObj,
            null,
            4
          )}`
        );
        tag.attributes.push(attrObj);
        // reset:
        attrObj = {};
        // 2. finally, delete the quotes marker, we don't need it any more
        tag.quotes = undefined;
        // 3. if opts.dumpLinkHrefsNearby.enabled is on, catch href
        let hrefVal;
        if (
          opts.dumpLinkHrefsNearby.enabled &&
          // eslint-disable-next-line
          tag.attributes.some((obj) => {
            if (obj.name && obj.name.toLowerCase() === "href") {
              hrefVal = `${opts.dumpLinkHrefsNearby.wrapHeads || ""}${
                obj.value
              }${opts.dumpLinkHrefsNearby.wrapTails || ""}`;
              return true;
            }
          })
        ) {
          hrefDump = {
            tagName: tag.name,
            hrefValue: hrefVal,
          };
          console.log(
            `848 SET ${`\u001b[${33}m${`hrefDump`}\u001b[${39}m`} = ${JSON.stringify(
              hrefDump,
              null,
              4
            )}`
          );
        }
      } else if (!tag.quotes && tag.nameStarts) {
        // 1. if it's opening marker, record the type and location of quotes
        console.log(
          `858 SET tag.quotes = {}, tag.quotes.value = ${str[i]}, tag.quotes.start = ${i}`
        );
        tag.quotes = {};
        tag.quotes.value = str[i];
        tag.quotes.start = i;
        // 2. start assembling the attribute object which we'll dump into tag.attributes[] array:
        if (
          attrObj.nameStarts &&
          attrObj.nameEnds &&
          attrObj.nameEnds < i &&
          attrObj.nameStarts < i &&
          !attrObj.valueStarts
        ) {
          attrObj.name = str.slice(attrObj.nameStarts, attrObj.nameEnds);
          console.log(
            `873 SET ${`\u001b[${33}m${`attrObj`}\u001b[${39}m`} = ${JSON.stringify(
              attrObj,
              null,
              4
            )}`
          );
        }
      }
    }

    // catch the ending of the tag name:
    // -------------------------------------------------------------------------
    if (
      tag.nameStarts !== undefined &&
      tag.nameEnds === undefined &&
      (!str[i].trim() || !characterSuitableForNames(str[i]))
    ) {
      // 1. mark the name ending
      tag.nameEnds = i;
      console.log(
        `893 SET \u001b[${33}m${`tag.nameEnds`}\u001b[${39}m = ${tag.nameEnds}`
      );
      // 2. extract the full name string
      tag.name = str.slice(
        tag.nameStarts,
        tag.nameEnds +
          /* istanbul ignore next */
          (str[i] !== ">" && str[i] !== "/" && str[i + 1] === undefined ? 1 : 0)
      );
      console.log(
        `903 SET \u001b[${33}m${`tag.name`}\u001b[${39}m = ${tag.name}`
      );

      console.log(
        `907 ${`\u001b[${33}m${`tag`}\u001b[${39}m`} is currently = ${JSON.stringify(
          tag,
          null,
          4
        )}`
      );

      if (
        // if we caught "----" from "<----" or "---->", bail:
        (str[tag.nameStarts - 1] !== "!" && // protection against <!--
          !tag.name.replace(/-/g, "").length) ||
        // if tag name starts with a number character
        /^\d+$/.test(tag.name[0])
      ) {
        tag = {};
        continue;
      }

      if (str[i] === "<") {
        // process it because we need to tackle this new tag
        console.log(`927 opening bracket caught`);

        calculateHrefToBeInserted(opts);
        console.log(
          `931 ${`\u001b[${33}m${`stringToInsertAfter`}\u001b[${39}m`} = ${JSON.stringify(
            stringToInsertAfter,
            null,
            4
          )}`
        );

        // calculateWhitespaceToInsert() API:
        // str, // whole string
        // currCharIdx, // current index
        // fromIdx, // leftmost whitespace edge around tag
        // toIdx, // rightmost whitespace edge around tag
        // lastOpeningBracketAt, // tag actually starts here (<)
        // lastClosingBracketAt // tag actually ends here (>)
        const whiteSpaceCompensation = calculateWhitespaceToInsert(
          str,
          i,
          tag.leftOuterWhitespace,
          i,
          tag.lastOpeningBracketAt,
          i
        );

        console.log(
          `955 \u001b[${33}m${`cb()-PUSH: [${tag.leftOuterWhitespace}, ${
            i + 1
          }, "${whiteSpaceCompensation}${stringToInsertAfter}${whiteSpaceCompensation}"]`}\u001b[${39}m`
        );
        console.log(
          `960 ${`\u001b[${33}m${`tag`}\u001b[${39}m`} = ${JSON.stringify(
            tag,
            null,
            4
          )}`
        );

        // if (
        //   !allTagLocations.length ||
        //   allTagLocations[allTagLocations.length - 1][0] !==
        //     tag.lastOpeningBracketAt
        // ) {
        //   // prevent duplicates
        //   allTagLocations.push([tag.lastOpeningBracketAt, i]);
        //   console.log(
        //     `973 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${
        //       tag.lastOpeningBracketAt
        //     }, ${i}] to allTagLocations`
        //   );
        // }

        opts.cb({
          tag,
          deleteFrom: tag.leftOuterWhitespace,
          deleteTo: i,
          insert: `${whiteSpaceCompensation}${stringToInsertAfter}${whiteSpaceCompensation}`,
          rangesArr: rangesToDelete,
          proposedReturn: [
            tag.leftOuterWhitespace,
            i,
            `${whiteSpaceCompensation}${stringToInsertAfter}${whiteSpaceCompensation}`,
          ],
        });
        resetHrefMarkers();

        // also,
        treatRangedTags(i, opts, rangesToDelete);
      }
    }

    // catch beginning of an attribute value
    // -------------------------------------------------------------------------
    if (
      tag.quotes &&
      tag.quotes.start &&
      tag.quotes.start < i &&
      !tag.quotes.end &&
      attrObj.nameEnds &&
      attrObj.equalsAt &&
      !attrObj.valueStarts
    ) {
      console.log(
        `1012 SET \u001b[${33}m${`attrObj.valueStarts`}\u001b[${39}m = ${
          attrObj.valueStarts
        }`
      );
      attrObj.valueStarts = i;
    }

    // catch rare cases when attributes name has some space after it, before equals
    // -------------------------------------------------------------------------
    if (
      !tag.quotes &&
      attrObj.nameEnds &&
      str[i] === "=" &&
      !attrObj.valueStarts &&
      !attrObj.equalsAt
    ) {
      attrObj.equalsAt = i;
      console.log(
        `1030 SET \u001b[${33}m${`attrObj.equalsAt`}\u001b[${39}m = ${
          attrObj.equalsAt
        }`
      );
    }

    // catch the ending of the whole attribute
    // -------------------------------------------------------------------------
    // for example, <a b c> this "c" ends "b" because it's not "equals" sign.
    // We even anticipate for cases where whitespace anywhere between attribute parts:
    // < article class = " something " / >
    if (
      !tag.quotes &&
      attrObj.nameStarts &&
      attrObj.nameEnds &&
      !attrObj.valueStarts &&
      str[i].trim() &&
      str[i] !== "="
    ) {
      // if (!tag.attributes) {
      //   tag.attributes = [];
      // }
      tag.attributes.push(attrObj);
      console.log("1053 PUSHED attrObj into tag.attributes, reset attrObj");
      attrObj = {};
    }

    // catch the ending of an attribute's name
    // -------------------------------------------------------------------------
    if (!tag.quotes && attrObj.nameStarts && !attrObj.nameEnds) {
      console.log("1060");
      if (!str[i].trim()) {
        attrObj.nameEnds = i;
        console.log(
          `1064 SET ${`\u001b[${33}m${`attrObj.nameEnds`}\u001b[${39}m`} = ${JSON.stringify(
            attrObj.nameEnds,
            null,
            4
          )}`
        );
        attrObj.name = str.slice(attrObj.nameStarts, attrObj.nameEnds);
      } else if (str[i] === "=") {
        console.log(`1072 equal char clauses`);
        /* istanbul ignore else */
        if (!attrObj.equalsAt) {
          console.log(`1075 equal hasn't been met`);
          attrObj.nameEnds = i;
          console.log(
            `1078 SET ${`\u001b[${33}m${`attrObj.nameEnds`}\u001b[${39}m`} = ${JSON.stringify(
              attrObj.nameEnds,
              null,
              4
            )}`
          );
          attrObj.equalsAt = i;
          console.log(
            `1086 SET ${`\u001b[${33}m${`attrObj.equalsAt`}\u001b[${39}m`} = ${JSON.stringify(
              attrObj.equalsAt,
              null,
              4
            )}`
          );
          attrObj.name = str.slice(attrObj.nameStarts, attrObj.nameEnds);
        }
      } else if (str[i] === "/" || str[i] === ">") {
        console.log(
          `1096 SET ${`\u001b[${33}m${`attrObj.nameEnds`}\u001b[${39}m`} = ${JSON.stringify(
            attrObj.nameEnds,
            null,
            4
          )}`
        );
        attrObj.nameEnds = i;
        attrObj.name = str.slice(attrObj.nameStarts, attrObj.nameEnds);
        console.log(
          `1105 \u001b[${33}m${`PUSH attrObj and wipe`}\u001b[${39}m`
        );
        // if (!tag.attributes) {
        //   tag.attributes = [];
        // }
        tag.attributes.push(attrObj);
        attrObj = {};
      } else if (str[i] === "<") {
        console.log(
          `1114 \u001b[${33}m${`ATTR NAME ENDS WITH NEW TAG`}\u001b[${39}m - ${`\u001b[${31}m${`TODO`}\u001b[${39}m`}`
        );
        // TODO - address both cases of onlyPlausible
        attrObj.nameEnds = i;
        attrObj.name = str.slice(attrObj.nameStarts, attrObj.nameEnds);
        // if (!tag.attributes) {
        //   tag.attributes = [];
        // }
        tag.attributes.push(attrObj);
        attrObj = {};
      }
    }

    // catch the beginning of an attribute's name
    // -------------------------------------------------------------------------
    if (
      !tag.quotes &&
      tag.nameEnds < i &&
      !str[i - 1].trim() &&
      str[i].trim() &&
      !`<>/!`.includes(str[i]) &&
      !attrObj.nameStarts &&
      !tag.lastClosingBracketAt
    ) {
      attrObj.nameStarts = i;
      console.log(
        `1140 SET \u001b[${33}m${`attrObj.nameStarts`}\u001b[${39}m = ${
          attrObj.nameStarts
        }`
      );
    }

    // catch "< /" - turn off "onlyPlausible"
    // -------------------------------------------------------------------------
    if (
      tag.lastOpeningBracketAt !== null &&
      tag.lastOpeningBracketAt < i &&
      str[i] === "/" &&
      tag.onlyPlausible
    ) {
      tag.onlyPlausible = false;
    }

    // catch character that follows an opening bracket:
    // -------------------------------------------------------------------------
    if (
      tag.lastOpeningBracketAt !== null &&
      tag.lastOpeningBracketAt < i &&
      str[i] !== "/" // there can be closing slashes in various places, legit and not
    ) {
      // 1. identify, is it definite or just plausible tag
      if (tag.onlyPlausible === undefined) {
        if ((!str[i].trim() || str[i] === "<") && !tag.slashPresent) {
          tag.onlyPlausible = true;
        } else {
          tag.onlyPlausible = false;
        }
        console.log(
          `1172 SET \u001b[${33}m${`tag.onlyPlausible`}\u001b[${39}m = ${
            tag.onlyPlausible
          }`
        );
      }
      // 2. catch the beginning of the tag name. Consider custom HTML tag names
      // and also known (X)HTML tags:
      if (
        str[i].trim() &&
        tag.nameStarts === undefined &&
        str[i] !== "<" &&
        str[i] !== "/" &&
        str[i] !== ">" &&
        str[i] !== "!"
      ) {
        tag.nameStarts = i;
        tag.nameContainsLetters = false;
        console.log(
          `1190 \u001b[${33}m${`tag.nameStarts`}\u001b[${39}m = ${
            tag.nameStarts
          }`
        );
      }
    }

    // Catch letters in the tag name. Necessary to filter out false positives like "<------"
    if (
      tag.nameStarts &&
      !tag.quotes &&
      str[i].toLowerCase() !== str[i].toUpperCase()
    ) {
      tag.nameContainsLetters = true;
    }

    // catch closing bracket
    // -------------------------------------------------------------------------
    if (str[i] === ">") {
      if (tag.lastOpeningBracketAt !== undefined) {
        // 1. mark the index
        tag.lastClosingBracketAt = i;

        console.log(
          `1214 SET tag.lastClosingBracketAt = ${tag.lastClosingBracketAt}`
        );
        // 2. reset the spacesChunkWhichFollowsTheClosingBracketEndsAt
        spacesChunkWhichFollowsTheClosingBracketEndsAt = null;
        // 3. push attrObj into tag.attributes[]
        if (Object.keys(attrObj).length) {
          console.log(
            `1221 PUSH \u001b[${33}m${`attrObj`}\u001b[${39}m & reset`
          );
          // if (!tag.attributes) {
          //   tag.attributes = [];
          // }
          tag.attributes.push(attrObj);
          attrObj = {};
        }
        // 4. if opts.dumpLinkHrefsNearby.enabled is on and we just recorded an href,
        if (
          opts.dumpLinkHrefsNearby.enabled &&
          hrefDump.tagName &&
          !hrefDump.openingTagEnds
        ) {
          // finish assembling the hrefDump{}
          hrefDump.openingTagEnds = i; // or tag.lastClosingBracketAt, same
          console.log(
            `1238 SET ${`\u001b[${33}m${`hrefDump`}\u001b[${39}m`} = ${JSON.stringify(
              hrefDump,
              null,
              4
            )}`
          );
        }
      }
    }

    // catch the ending of the tag
    // -------------------------------------------------------------------------
    // the tag is "released" into "rangesApply":

    if (tag.lastOpeningBracketAt !== undefined) {
      console.log(`1253 opening bracket has been met`);
      if (tag.lastClosingBracketAt === undefined) {
        console.log(`1255 closing bracket hasn't been met`);
        if (
          tag.lastOpeningBracketAt < i &&
          str[i] !== "<" && // to prevent cases like "text <<<<<< text"
          (str[i + 1] === undefined || str[i + 1] === "<") &&
          tag.nameContainsLetters
        ) {
          console.log(`1262 str[i + 1] = ${str[i + 1]}`);
          // find out the tag name earlier than dedicated tag name ending catching section:
          // if (str[i + 1] === undefined) {
          tag.name = str
            .slice(tag.nameStarts, tag.nameEnds ? tag.nameEnds : i + 1)
            .toLowerCase();
          console.log(
            `1269 SET ${`\u001b[${33}m${`tag.name`}\u001b[${39}m`} = ${JSON.stringify(
              tag.name,
              null,
              4
            )}`
          );

          // submit tag to allTagLocations
          /* istanbul ignore else */
          if (
            !allTagLocations.length ||
            allTagLocations[allTagLocations.length - 1][0] !==
              tag.lastOpeningBracketAt
          ) {
            allTagLocations.push([tag.lastOpeningBracketAt, i + 1]);
            console.log(
              `1285 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${
                tag.lastOpeningBracketAt
              }, ${i + 1}] to allTagLocations`
            );
          }

          if (
            // if it's an ignored tag
            opts.ignoreTags.includes(tag.name) ||
            // or just plausible and unrecognised
            (tag.onlyPlausible && !definitelyTagNames.has(tag.name))
          ) {
            console.log(
              `1298 Ignored tag - \u001b[${31}m${`WIPE AND RESET`}\u001b[${39}m`
            );
            tag = {};
            attrObj = {};
            continue;
          }

          // if the tag is only plausible (there's space after opening bracket) and it's not among
          // recognised tags, leave it as it is:

          console.log(`1308`);
          if (
            ((definitelyTagNames.has(tag.name) ||
              singleLetterTags.has(tag.name)) &&
              (tag.onlyPlausible === false ||
                (tag.onlyPlausible === true && tag.attributes.length))) ||
            str[i + 1] === undefined
          ) {
            calculateHrefToBeInserted(opts);
            console.log(
              `1318 ${`\u001b[${33}m${`stringToInsertAfter`}\u001b[${39}m`} = ${JSON.stringify(
                stringToInsertAfter,
                null,
                4
              )}`
            );

            const whiteSpaceCompensation = calculateWhitespaceToInsert(
              str,
              i,
              tag.leftOuterWhitespace,
              i + 1,
              tag.lastOpeningBracketAt,
              tag.lastClosingBracketAt
            );

            console.log(
              `1335 \u001b[${33}m${`cb()-PUSH: [${tag.leftOuterWhitespace}, ${
                i + 1
              }, "${whiteSpaceCompensation}${stringToInsertAfter}${whiteSpaceCompensation}"]`}\u001b[${39}m`
            );
            console.log(
              `1340 ${`\u001b[${33}m${`tag`}\u001b[${39}m`} = ${JSON.stringify(
                tag,
                null,
                4
              )}`
            );

            opts.cb({
              tag,
              deleteFrom: tag.leftOuterWhitespace,
              deleteTo: i + 1,
              insert: `${whiteSpaceCompensation}${stringToInsertAfter}${whiteSpaceCompensation}`,
              rangesArr: rangesToDelete,
              proposedReturn: [
                tag.leftOuterWhitespace,
                i + 1,
                `${whiteSpaceCompensation}${stringToInsertAfter}${whiteSpaceCompensation}`,
              ],
            });
            resetHrefMarkers();

            // also,
            treatRangedTags(i, opts, rangesToDelete);
          }
          console.log(`1364`);

          /* istanbul ignore else */
          if (
            !filteredTagLocations.length ||
            filteredTagLocations[filteredTagLocations.length - 1][0] !==
              tag.lastOpeningBracketAt
          ) {
            filteredTagLocations.push([tag.lastOpeningBracketAt, i + 1]);
            console.log(
              `1374 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${
                tag.lastOpeningBracketAt
              }, ${i + 1}] to filteredTagLocations`
            );
          }
        }
        console.log(`1380`);
      } else if (
        (i > tag.lastClosingBracketAt && str[i].trim()) ||
        str[i + 1] === undefined
      ) {
        console.log(`1385 closing bracket has been met`);
        // case 2. closing bracket HAS BEEN met
        // we'll look for a non-whitespace character and delete up to it
        // BUT, we'll wipe the tag object only if that non-whitespace character
        // is not a ">". This way we'll catch and delete sequences of closing brackets.

        // part 1.

        let endingRangeIndex = tag.lastClosingBracketAt === i ? i + 1 : i;
        console.log(
          `1395 ${`\u001b[${33}m${`endingRangeIndex`}\u001b[${39}m`} = ${JSON.stringify(
            endingRangeIndex,
            null,
            4
          )}`
        );

        if (
          opts.trimOnlySpaces &&
          endingRangeIndex === len - 1 &&
          spacesChunkWhichFollowsTheClosingBracketEndsAt !== null &&
          spacesChunkWhichFollowsTheClosingBracketEndsAt < i
        ) {
          endingRangeIndex = spacesChunkWhichFollowsTheClosingBracketEndsAt;
        }

        // if it's a dodgy suspicious tag where space follows opening bracket, there's an extra requirement
        // for this tag to be considered a tag - there has to be at least one attribute with equals if
        // the tag name is not recognised.

        console.log(
          `1416 ${`\u001b[${33}m${`tag.name`}\u001b[${39}m`} = ${JSON.stringify(
            tag.name,
            null,
            4
          )}`
        );

        // submit tag to allTagLocations
        /* istanbul ignore else */
        if (
          !allTagLocations.length ||
          allTagLocations[allTagLocations.length - 1][0] !==
            tag.lastOpeningBracketAt
        ) {
          allTagLocations.push([
            tag.lastOpeningBracketAt,
            tag.lastClosingBracketAt + 1,
          ]);
          console.log(
            `1435 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${
              tag.lastOpeningBracketAt
            }, ${tag.lastClosingBracketAt + 1}] to allTagLocations`
          );
        }

        if (
          (!onlyStripTagsMode && opts.ignoreTags.includes(tag.name)) ||
          (onlyStripTagsMode && !opts.onlyStripTags.includes(tag.name))
        ) {
          // ping the callback with nulls:
          opts.cb({
            tag,
            deleteFrom: null,
            deleteTo: null,
            insert: null,
            rangesArr: rangesToDelete,
            proposedReturn: [],
          });

          // don't submit the tag onto "filteredTagLocations"

          // then reset:
          console.log(
            `1459 Ignored tag - \u001b[${31}m${`WIPE AND RESET`}\u001b[${39}m`
          );
          tag = {};
          attrObj = {};
          // continue;
        } else if (
          !tag.onlyPlausible ||
          // tag name is recognised and there are no attributes:
          (tag.attributes.length === 0 &&
            tag.name &&
            (definitelyTagNames.has(tag.name.toLowerCase()) ||
              singleLetterTags.has(tag.name.toLowerCase()))) ||
          // OR there is at least one equals that follow the attribute's name:
          (tag.attributes &&
            tag.attributes.some((attrObj2) => attrObj2.equalsAt))
        ) {
          // submit tag to filteredTagLocations
          /* istanbul ignore else */
          if (
            !filteredTagLocations.length ||
            filteredTagLocations[filteredTagLocations.length - 1][0] !==
              tag.lastOpeningBracketAt
          ) {
            filteredTagLocations.push([
              tag.lastOpeningBracketAt,
              tag.lastClosingBracketAt + 1,
            ]);
            console.log(
              `1487 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${
                tag.lastOpeningBracketAt
              }, ${tag.lastClosingBracketAt + 1}] to filteredTagLocations`
            );
          }

          // if this was an ignored tag name, algorithm would have bailed earlier,
          // in stage "catch the ending of the tag name".

          const whiteSpaceCompensation = calculateWhitespaceToInsert(
            str,
            i,
            tag.leftOuterWhitespace,
            endingRangeIndex,
            tag.lastOpeningBracketAt,
            tag.lastClosingBracketAt
          );
          console.log(
            `1505 ${`\u001b[${33}m${`whiteSpaceCompensation`}\u001b[${39}m`} = ${JSON.stringify(
              whiteSpaceCompensation,
              null,
              4
            )} (length: ${whiteSpaceCompensation.length})`
          );

          // calculate optional opts.dumpLinkHrefsNearby.enabled HREF to insert
          stringToInsertAfter = "";
          hrefInsertionActive = false;

          calculateHrefToBeInserted(opts);

          console.log(
            `1519 ${`\u001b[${33}m${`stringToInsertAfter`}\u001b[${39}m`} = ${JSON.stringify(
              stringToInsertAfter,
              null,
              4
            )}`
          );
          let insert;
          if (isStr(stringToInsertAfter) && stringToInsertAfter.length) {
            insert = `${whiteSpaceCompensation}${stringToInsertAfter}${
              /* istanbul ignore next */
              whiteSpaceCompensation === "\n\n" ? "\n" : whiteSpaceCompensation
            }`;
            console.log(
              `1532 SET ${`\u001b[${33}m${`insert`}\u001b[${39}m`} = ${JSON.stringify(
                insert,
                null,
                4
              )}`
            );
          } else {
            insert = whiteSpaceCompensation;
            console.log(
              `1541 SET ${`\u001b[${33}m${`insert`}\u001b[${39}m`} = ${JSON.stringify(
                insert,
                null,
                4
              )}`
            );
          }

          if (
            tag.leftOuterWhitespace === 0 ||
            !right(str, endingRangeIndex - 1)
          ) {
            insert = "";
            console.log(
              `1555 SET ${`\u001b[${33}m${`insert`}\u001b[${39}m`} = ${JSON.stringify(
                insert,
                null,
                4
              )}`
            );
          }

          // pass the range onto the callback function, be it default or user's
          console.log(
            `1565 \u001b[${33}m${`cb()-SUBMIT RANGE #2: [${
              tag.leftOuterWhitespace
            }, ${endingRangeIndex}, ${JSON.stringify(
              insert,
              null,
              0
            )}]`}\u001b[${39}m`
          );
          opts.cb({
            tag,
            deleteFrom: tag.leftOuterWhitespace,
            deleteTo: endingRangeIndex,
            insert,
            rangesArr: rangesToDelete,
            proposedReturn: [tag.leftOuterWhitespace, endingRangeIndex, insert],
          });
          resetHrefMarkers();

          // also,
          treatRangedTags(i, opts, rangesToDelete);
        } else {
          console.log(`1586 \u001b[${33}m${`RESET tag{}`}\u001b[${39}m`);
          tag = {};
        }

        // part 2.
        if (str[i] !== ">") {
          console.log(`1592 \u001b[${33}m${`RESET tag{}`}\u001b[${39}m`);
          tag = {};
        }
      }
    }

    // catch an opening bracket
    // -------------------------------------------------------------------------
    if (str[i] === "<" && str[i - 1] !== "<") {
      console.log(`1601 caught opening bracket`);
      // cater sequences of opening brackets "<<<<div>>>"
      if (str[right(str, i)] === ">") {
        // cater cases like: "<><><>"
        console.log(`1605 cases like <><><>`);
        continue;
      } else {
        console.log(`1608 opening brackets else clauses`);
        // 1. Before (re)setting flags, check, do we have a case of a tag with a
        // missing closing bracket, and this is a new tag following it.

        console.log(
          `1613 R1: ${!!tag.nameEnds}; R2: ${
            tag.nameEnds < i
          }; R3: ${!tag.lastClosingBracketAt}`
        );
        if (tag.nameEnds && tag.nameEnds < i && !tag.lastClosingBracketAt) {
          console.log(`1618`);
          console.log(
            `1620 R1: ${!!tag.onlyPlausible}; R2: ${!definitelyTagNames.has(
              tag.name
            )}; R3: ${!singleLetterTags.has(tag.name)}; R4: ${!(
              tag.attributes && tag.attributes.length
            )}`
          );
          if (
            (tag.onlyPlausible === true &&
              tag.attributes &&
              tag.attributes.length) ||
            tag.onlyPlausible === false
          ) {
            console.log(`1632`);
            // tag.onlyPlausible can be undefined too
            const whiteSpaceCompensation = calculateWhitespaceToInsert(
              str,
              i,
              tag.leftOuterWhitespace,
              i,
              tag.lastOpeningBracketAt,
              i
            );

            console.log(
              `1644 cb()-PUSH range [${tag.leftOuterWhitespace}, ${i}, "${whiteSpaceCompensation}"]`
            );
            opts.cb({
              tag,
              deleteFrom: tag.leftOuterWhitespace,
              deleteTo: i,
              insert: whiteSpaceCompensation,
              rangesArr: rangesToDelete,
              proposedReturn: [
                tag.leftOuterWhitespace,
                i,
                whiteSpaceCompensation,
              ],
            });

            // also,
            treatRangedTags(i, opts, rangesToDelete);

            // then, for continuity, mark everything up accordingly if it's a new bracket:
            tag = {};
            attrObj = {};
          }
        }

        // 2. if new tag starts, reset:
        if (
          tag.lastOpeningBracketAt !== undefined &&
          tag.onlyPlausible &&
          tag.name &&
          !tag.quotes
        ) {
          // reset:
          tag.lastOpeningBracketAt = undefined;
          tag.onlyPlausible = false;
        }

        if (
          (tag.lastOpeningBracketAt === undefined || !tag.onlyPlausible) &&
          !tag.quotes
        ) {
          tag.lastOpeningBracketAt = i;
          tag.slashPresent = false;
          tag.attributes = [];

          // since 2.1.0 we started to care about not trimming outer whitespace which is not spaces.
          // For example, " \t <a> \n ". Tag's whitespace boundaries should not extend to string
          // edges but until "\t" on the left and "\n" on the right IF opts.trimOnlySpaces is on.

          if (chunkOfWhitespaceStartsAt === null) {
            tag.leftOuterWhitespace = i;
          } else if (opts.trimOnlySpaces && chunkOfWhitespaceStartsAt === 0) {
            // if whitespace extends to the beginning of a string, there's a risk it might include
            // not only spaces. To fix that, switch to space-only range marker:

            /* istanbul ignore next */
            tag.leftOuterWhitespace = chunkOfSpacesStartsAt || i;
          } else {
            tag.leftOuterWhitespace = chunkOfWhitespaceStartsAt;
          }

          // tag.leftOuterWhitespace =
          //   chunkOfWhitespaceStartsAt === null ? i : chunkOfWhitespaceStartsAt;

          console.log(
            `1708 SET \u001b[${33}m${`tag.leftOuterWhitespace`}\u001b[${39}m = ${
              tag.leftOuterWhitespace
            }; \u001b[${33}m${`tag.lastOpeningBracketAt`}\u001b[${39}m = ${
              tag.lastOpeningBracketAt
            }; \u001b[${33}m${`tag.slashPresent`}\u001b[${39}m = false`
          );

          // tend the HTML comments: <!-- --> or CDATA: <![CDATA[ ... ]]>
          // if opening comment tag is detected, traverse forward aggressively
          // until EOL or "-->" is reached and offset outer index "i".
          if (
            `${str[i + 1]}${str[i + 2]}${str[i + 3]}` === "!--" ||
            `${str[i + 1]}${str[i + 2]}${str[i + 3]}${str[i + 4]}${str[i + 5]}${
              str[i + 6]
            }${str[i + 7]}${str[i + 8]}` === "![CDATA["
          ) {
            console.log(
              `1725 \u001b[${31}m${`███████████████████████████████████████`}\u001b[${39}m`
            );
            // make a note which one it is:
            let cdata = true;
            if (str[i + 2] === "-") {
              cdata = false;
            }
            console.log("1732 traversing forward");
            let closingFoundAt;
            for (let y = i; y < len; y++) {
              console.log(
                `${`\u001b[${33}m${`str[${y}]`}\u001b[${39}m`} = ${str[y]}`
              );
              if (
                (!closingFoundAt &&
                  cdata &&
                  `${str[y - 2]}${str[y - 1]}${str[y]}` === "]]>") ||
                (!cdata && `${str[y - 2]}${str[y - 1]}${str[y]}` === "-->")
              ) {
                closingFoundAt = y;
                console.log(`1745 closingFoundAt = ${closingFoundAt}`);
              }

              if (
                closingFoundAt &&
                ((closingFoundAt < y && str[y].trim()) ||
                  str[y + 1] === undefined)
              ) {
                console.log("1753 END detected");
                let rangeEnd = y;
                if (
                  (str[y + 1] === undefined && !str[y].trim()) ||
                  str[y] === ">"
                ) {
                  rangeEnd += 1;
                }

                // submit the tag
                /* istanbul ignore else */
                if (
                  !allTagLocations.length ||
                  allTagLocations[allTagLocations.length - 1][0] !==
                    tag.lastOpeningBracketAt
                ) {
                  allTagLocations.push([
                    tag.lastOpeningBracketAt,
                    closingFoundAt + 1,
                  ]);
                  console.log(
                    `1774 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${
                      tag.lastOpeningBracketAt
                    }, ${closingFoundAt + 1}] to allTagLocations`
                  );
                }

                /* istanbul ignore else */
                if (
                  !filteredTagLocations.length ||
                  filteredTagLocations[filteredTagLocations.length - 1][0] !==
                    tag.lastOpeningBracketAt
                ) {
                  filteredTagLocations.push([
                    tag.lastOpeningBracketAt,
                    closingFoundAt + 1,
                  ]);
                  console.log(
                    `1791 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${
                      tag.lastOpeningBracketAt
                    }, ${closingFoundAt + 1}] to filteredTagLocations`
                  );
                }

                const whiteSpaceCompensation = calculateWhitespaceToInsert(
                  str,
                  y,
                  tag.leftOuterWhitespace,
                  rangeEnd,
                  tag.lastOpeningBracketAt,
                  closingFoundAt
                );
                console.log(
                  `1806 cb()-PUSH range [${tag.leftOuterWhitespace}, ${rangeEnd}, "${whiteSpaceCompensation}"]`
                );
                opts.cb({
                  tag,
                  deleteFrom: tag.leftOuterWhitespace,
                  deleteTo: rangeEnd,
                  insert: whiteSpaceCompensation,
                  rangesArr: rangesToDelete,
                  proposedReturn: [
                    tag.leftOuterWhitespace,
                    rangeEnd,
                    whiteSpaceCompensation,
                  ],
                });

                // offset:
                i = y - 1;
                if (str[y] === ">") {
                  i = y;
                }
                // resets:
                tag = {};
                attrObj = {};
                // finally,
                break;
              }
            }
          }
        }
      }
    }

    // catch whitespace
    // -------------------------------------------------------------------------
    if (str[i].trim() === "") {
      // 1. catch chunk boundaries:
      if (chunkOfWhitespaceStartsAt === null) {
        chunkOfWhitespaceStartsAt = i;
        console.log(
          `1845 SET \u001b[${33}m${`chunkOfWhitespaceStartsAt`}\u001b[${39}m = ${chunkOfWhitespaceStartsAt}`
        );
        if (
          tag.lastOpeningBracketAt !== undefined &&
          tag.lastOpeningBracketAt < i &&
          tag.nameStarts &&
          tag.nameStarts < tag.lastOpeningBracketAt &&
          i === tag.lastOpeningBracketAt + 1 &&
          // insurance against tail part of ranged tag being deleted:
          !rangedOpeningTags.some(
            // eslint-disable-next-line no-loop-func
            (rangedTagObj) => rangedTagObj.name === tag.name
          )
        ) {
          console.log(
            `1860 RESET ALL \u001b[${31}m${`███████████████████████████████████████`}\u001b[${39}m`
          );
          tag.onlyPlausible = true;
          tag.name = undefined;
          tag.nameStarts = undefined;
        }
      }
    } else if (chunkOfWhitespaceStartsAt !== null) {
      console.log("1868");
      // 1. piggyback the catching of the attributes with equal and no value
      if (
        !tag.quotes &&
        attrObj.equalsAt > chunkOfWhitespaceStartsAt - 1 &&
        attrObj.nameEnds &&
        attrObj.equalsAt > attrObj.nameEnds &&
        str[i] !== '"' &&
        str[i] !== "'"
      ) {
        /* istanbul ignore else */
        if (isObj(attrObj)) {
          console.log(
            `1881 PUSHING ${`\u001b[${33}m${`attrObj`}\u001b[${39}m`} = ${JSON.stringify(
              attrObj,
              null,
              4
            )}`
          );
          tag.attributes.push(attrObj);
        }

        // reset:
        attrObj = {};
        tag.equalsSpottedAt = undefined;
      }
      // 2. reset whitespace marker
      chunkOfWhitespaceStartsAt = null;
      console.log(
        `1897 SET \u001b[${33}m${`chunkOfWhitespaceStartsAt`}\u001b[${39}m = ${chunkOfWhitespaceStartsAt}`
      );
    }

    // catch spaces-only chunks (needed for outer trim option opts.trimOnlySpaces)
    // -------------------------------------------------------------------------

    if (str[i] === " ") {
      // 1. catch spaces boundaries:
      if (chunkOfSpacesStartsAt === null) {
        chunkOfSpacesStartsAt = i;
        console.log(
          `1909 SET \u001b[${33}m${`chunkOfSpacesStartsAt`}\u001b[${39}m = ${chunkOfSpacesStartsAt}`
        );
      }
    } else if (chunkOfSpacesStartsAt !== null) {
      // 2. reset the marker
      chunkOfSpacesStartsAt = null;
      console.log(
        `1916 SET \u001b[${33}m${`chunkOfSpacesStartsAt`}\u001b[${39}m = ${chunkOfSpacesStartsAt}`
      );
    }

    // log all
    // -------------------------------------------------------------------------
    console.log(`\u001b[${32}m${`===============`}\u001b[${39}m`);
    // console.log(
    //   `${`\u001b[${33}m${`chunkOfSpacesStartsAt`}\u001b[${39}m`} = ${JSON.stringify(
    //     chunkOfSpacesStartsAt,
    //     null,
    //     4
    //   )}`
    // );
    console.log(
      `${`\u001b[${33}m${`rangedOpeningTags`}\u001b[${39}m`} = ${JSON.stringify(
        rangedOpeningTags,
        null,
        4
      )}`
    );
    console.log(
      `1938 ${`\u001b[${33}m${`spacesChunkWhichFollowsTheClosingBracketEndsAt`}\u001b[${39}m`} = ${JSON.stringify(
        spacesChunkWhichFollowsTheClosingBracketEndsAt,
        null,
        4
      )}`
    );
    // console.log(
    //   `${`\u001b[${33}m${`chunkOfWhitespaceStartsAt`}\u001b[${39}m`} = ${JSON.stringify(
    //     chunkOfWhitespaceStartsAt,
    //     null,
    //     4
    //   )}`
    // );
    console.log(
      `1952 ${`\u001b[${33}m${`hrefDump`}\u001b[${39}m`} = ${JSON.stringify(
        hrefDump,
        null,
        4
      )}`
    );
    console.log(
      `1959 ${`\u001b[${33}m${`attrObj`}\u001b[${39}m`} = ${JSON.stringify(
        attrObj,
        null,
        4
      )}`
    );
    console.log(
      `${
        Object.keys(tag).length
          ? `${`\u001b[${35}m${`tag`}\u001b[${39}m`} = ${Object.keys(tag)
              // eslint-disable-next-line no-loop-func
              .map((key) => {
                return `${`\u001b[${90}m${`\u001b[${7}m${key}\u001b[${27}m`}\u001b[${39}m`} ${`\u001b[${90}m: ${
                  isObj(tag[key]) || Array.isArray(tag[key])
                    ? JSON.stringify(tag[key], null, 4)
                    : tag[key]
                }\u001b[${39}m`}`;
              })
              .join(",\n")}\n`
          : ""
      }${
        rangesToDelete.current()
          ? `RANGES: ${JSON.stringify(rangesToDelete.current(), null, 0)}`
          : ""
      }`
    );
  }

  console.log("\n\n\n\n\n\n END \n\n\n\n\n\n");

  // trim but in ranges
  // first tackle the beginning on the string
  if (
    str &&
    // if only spaces were meant to be trimmed,
    ((opts.trimOnlySpaces &&
      // and first character is a space
      str[0] === " ") ||
      // if normal trim is requested
      (!opts.trimOnlySpaces &&
        // and the first character is whitespace character
        !str[0].trim()))
  ) {
    console.log(`2002 trim frontal part`);
    for (let i = 0, len = str.length; i < len; i++) {
      if (
        (opts.trimOnlySpaces && str[i] !== " ") ||
        (!opts.trimOnlySpaces && str[i].trim())
      ) {
        console.log(`2008 PUSH [0, ${i}]`);
        rangesToDelete.push([0, i]);
        break;
      } else if (!str[i + 1]) {
        // if end has been reached and whole string has been trimmable
        console.log(`2013 PUSH [0, ${i + 1}]`);
        rangesToDelete.push([0, i + 1]);
      }
    }
  }

  if (
    str &&
    // if only spaces were meant to be trimmed,
    ((opts.trimOnlySpaces &&
      // and last character is a space
      str[str.length - 1] === " ") ||
      // if normal trim is requested
      (!opts.trimOnlySpaces &&
        // and the last character is whitespace character
        !str[str.length - 1].trim()))
  ) {
    for (let i = str.length; i--; ) {
      if (
        (opts.trimOnlySpaces && str[i] !== " ") ||
        (!opts.trimOnlySpaces && str[i].trim())
      ) {
        console.log(`2035 PUSH [i + 1, ${str.length}]`);
        rangesToDelete.push([i + 1, str.length]);
        break;
      }
      // don't tackle end-to-end because it would have been already caught on the
      // start-to-end direction loop above.
    }
  }

  // last correction, imagine we've got text-whitespace-tag.
  // That last part "tag" was removed but "whitespace" in between is left.
  // We need to trim() that too if applicable.
  // By now we'll be able to tell, is starting/ending range array touching
  // the start (index 0) or end (str.length - 1) character indexes, and if so,
  // their inner sides will need to be trimmed accordingly, considering the
  // "opts.trimOnlySpaces" of course.
  if ((!originalOpts || !originalOpts.cb) && rangesToDelete.current()) {
    // check front - the first range of gathered ranges, does it touch start (0)
    if (rangesToDelete.current()[0] && !rangesToDelete.current()[0][0]) {
      console.log(
        `2055 ${`\u001b[${33}m${`the first range`}\u001b[${39}m`} = ${JSON.stringify(
          rangesToDelete.current()[0],
          null,
          4
        )}`
      );
      const startingIdx = rangesToDelete.current()[0][1];
      // check the character at str[startingIdx]
      console.log(
        `2064 ${`\u001b[${33}m${`startingIdx`}\u001b[${39}m`} = ${JSON.stringify(
          startingIdx,
          null,
          4
        )}`
      );

      // call to current() merges and sorts, mutating but cleaning array.
      rangesToDelete.current();
      // hard edit:
      rangesToDelete.ranges[0] = [
        rangesToDelete.ranges[0][0],
        rangesToDelete.ranges[0][1],
      ];
    }

    // check end - the last range of gathered ranges, does it touch the end (str.length)
    // PS. remember ending is not inclusive, so ranges covering the whole ending
    // would go up to str.length, not up to str.length - 1!
    if (
      rangesToDelete.current()[rangesToDelete.current().length - 1] &&
      rangesToDelete.current()[rangesToDelete.current().length - 1][1] ===
        str.length
    ) {
      console.log(
        `2089 ${`\u001b[${33}m${`the last range`}\u001b[${39}m`} = ${JSON.stringify(
          rangesToDelete.current()[rangesToDelete.current().length - 1],
          null,
          4
        )}; str.length = ${str.length}`
      );
      const startingIdx = rangesToDelete.current()[
        rangesToDelete.current().length - 1
      ][0];
      // check character at str[startingIdx - 1]
      console.log(
        `2100 ${`\u001b[${33}m${`startingIdx`}\u001b[${39}m`} = ${JSON.stringify(
          startingIdx,
          null,
          4
        )}`
      );
      // remove third element from the last range "what to add" - because
      // ranges will crop aggressively, covering all whitespace, but they
      // then restore missing spaces (in which case it's not missing).
      // We already have tight crop, we just need to remove that "what to add"
      // third element.

      // call to current() merges and sorts, mutating but cleaning array.
      rangesToDelete.current();
      // hard edit:

      let startingIdx2 =
        rangesToDelete.ranges[rangesToDelete.ranges.length - 1][0];

      if (
        str[startingIdx2 - 1] &&
        ((opts.trimOnlySpaces && str[startingIdx2 - 1] === " ") ||
          (!opts.trimOnlySpaces && !str[startingIdx2 - 1].trim()))
      ) {
        startingIdx2 -= 1;
      }

      const backupWhatToAdd =
        rangesToDelete.ranges[rangesToDelete.ranges.length - 1][2];

      rangesToDelete.ranges[rangesToDelete.ranges.length - 1] = [
        startingIdx2,
        rangesToDelete.ranges[rangesToDelete.ranges.length - 1][1],
      ];

      // for cases of opts.dumpLinkHrefsNearby
      if (backupWhatToAdd && backupWhatToAdd.trim()) {
        rangesToDelete.ranges[rangesToDelete.ranges.length - 1].push(
          backupWhatToAdd.trimEnd()
        );
      }
    }
  }

  const res = {
    log: {
      timeTakenInMilliseconds: Date.now() - start,
    },
    result: rangesApply(str, rangesToDelete.current()),
    ranges: rangesToDelete.current(),
    allTagLocations,
    filteredTagLocations,
  };
  console.log(
    `2154 ${`\u001b[${32}m${`FINAL RESULT`}\u001b[${39}m`} = ${JSON.stringify(
      res,
      null,
      4
    )}`
  );

  return res;
}

export default stripHtml;
