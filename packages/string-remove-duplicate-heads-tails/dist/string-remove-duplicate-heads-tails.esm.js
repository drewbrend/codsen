import checkTypes from 'check-types-mini';
import isObj from 'lodash.isplainobject';
import arrayiffy from 'arrayiffy-if-string';
import { matchLeftIncl, matchRightIncl } from 'string-match-left-right';
import Ranges from 'ranges-push';
import rangesApply from 'ranges-apply';
import trimSpaces from 'string-trim-spaces-only';

/* eslint max-len:0, no-param-reassign:0, no-continue:0 */

function removeDuplicateHeadsTails(str, originalOpts = {}) {
  //

  function existy(x) {
    return x != null;
  }
  const has = Object.prototype.hasOwnProperty;
  function isStr(something) {
    return typeof something === "string";
  }

  // ===================== insurance =====================

  if (str === undefined) {
    throw new Error(
      "string-remove-duplicate-heads-tails: [THROW_ID_01] The input is missing!"
    );
  }
  if (typeof str !== "string") {
    return str;
  }
  if (existy(originalOpts) && !isObj(originalOpts)) {
    throw new Error(
      `string-remove-duplicate-heads-tails: [THROW_ID_03] The given options are not a plain object but ${typeof originalOpts}!`
    );
  }
  if (existy(originalOpts) && has.call(originalOpts, "heads")) {
    if (!arrayiffy(originalOpts.heads).every(val => isStr(val))) {
      throw new Error(
        "string-remove-duplicate-heads-tails: [THROW_ID_04] The opts.heads contains elements which are not string-type!"
      );
    } else if (isStr(originalOpts.heads)) {
      originalOpts.heads = arrayiffy(originalOpts.heads);
    }
  }
  if (existy(originalOpts) && has.call(originalOpts, "tails")) {
    if (!arrayiffy(originalOpts.tails).every(val => isStr(val))) {
      throw new Error(
        "string-remove-duplicate-heads-tails: [THROW_ID_05] The opts.tails contains elements which are not string-type!"
      );
    } else if (isStr(originalOpts.tails)) {
      originalOpts.tails = arrayiffy(originalOpts.tails);
    }
  }

  // trim but only if it's not trimmable to zero length (in that case return intact)
  const temp = trimSpaces(str);
  if (temp.length === 0) {
    return str;
  }
  str = temp;

  const defaults = {
    heads: ["{{"],
    tails: ["}}"]
  };
  const opts = Object.assign({}, defaults, originalOpts);
  checkTypes(opts, defaults, {
    msg: "string-remove-duplicate-heads-tails: [THROW_ID_06*]"
  });

  // first, let's trim heads and tails' array elements:
  opts.heads = opts.heads.map(el => el.trim());
  opts.tails = opts.tails.map(el => el.trim());

  //                        P R E P A R A T I O N S

  // this flag is on after the first non-heads/tails chunk
  let firstNonMarkerChunkFound = false;

  // When second non-heads/tails chunk is met, this flag is turned on.
  // It wipes all conditional ranges and after that, only second heads/tails-onwards
  // that leads to string-end or whitespace and string-end will be moved to real slices
  // ranges array.
  let secondNonMarkerChunkFound = false;

  // Real ranges array is the array that we'll process in the end, cropping pieces
  // out of the string:
  const realRanges = new Ranges({ limitToBeAddedWhitespace: true });

  // Conditional ranges array depends of the conditions what follows them. If the
  // condition is satisfied, range is merged into realRanges[]; if not, it's deleted.
  // For example, for leading head chunks, condition would be other heads/tails following
  // precisely after (not counting whitespace). For another example, for trailing
  // chunks, condition would be end of the string or other heads/tails that leads to
  // the end of the string:
  const conditionalRanges = new Ranges({ limitToBeAddedWhitespace: true });

  // this flag is requirement for cases where there are at least two chunks
  // wrapped with heads/tails, and we can't "peel off" the first tail that follows
  // the last chunk - each chunk has its wrapping:
  // {{ {{ chunk1}} {{chunk2}} }}
  //                        ^^ That's these tails we're talking about.
  //                           We don't want these deleted!
  let itsFirstTail = true;

  // This is a flag to mark the first letter in a non-head/tail/whitespace chunk.
  // Otherwise, second letter would trigger "secondNonMarkerChunkFound = true" and
  // we don't want that.
  let itsFirstLetter = true;

  // = heads or tails:
  let lastMatched = "";

  //                              P A R T   I

  // delete leading empty head-tail clumps as in "((()))((())) a"
  function delLeadingEmptyHeadTailChunks(str1, opts1) {
    let noteDownTheIndex;
    // do heads, from beginning of the input string:
    const resultOfAttemptToMatchHeads = matchRightIncl(str1, 0, opts1.heads, {
      trimBeforeMatching: true,
      cb: (char, theRemainderOfTheString, index) => {
        noteDownTheIndex = index;
        return true;
      },
      relaxedApi: true
    });
    if (!resultOfAttemptToMatchHeads) {
      // if heads were not matched, bail - there's no point matching trailing tails
      return str1;
    }
    // do tails now:
    const resultOfAttemptToMatchTails = matchRightIncl(
      str1,
      noteDownTheIndex,
      opts1.tails,
      {
        trimBeforeMatching: true,
        cb: (char, theRemainderOfTheString, index) => {
          // reassign noteDownTheIndex to new value, this time shifted right by
          // the width of matched tails
          noteDownTheIndex = index;
          return true;
        },
        relaxedApi: true
      }
    );
    if (resultOfAttemptToMatchTails) {
      return str1.slice(noteDownTheIndex);
    }
    return str1;
  }
  // action
  while (str !== delLeadingEmptyHeadTailChunks(str, opts)) {
    str = trimSpaces(delLeadingEmptyHeadTailChunks(str, opts));
  }

  // delete trailing empty head-tail clumps as in "a ((()))((()))"
  function delTrailingEmptyHeadTailChunks(str1, opts1) {
    let noteDownTheIndex;
    // do tails now - match from the end of a string, trimming along:
    const resultOfAttemptToMatchTails = matchLeftIncl(
      str1,
      str1.length - 1,
      opts1.tails,
      {
        trimBeforeMatching: true,
        cb: (char, theRemainderOfTheString, index) => {
          noteDownTheIndex = index;
          return true;
        },
        relaxedApi: true
      }
    );
    if (!resultOfAttemptToMatchTails) {
      // if tails were not matched, bail - there's no point checking preceding heads
      return str1;
    }
    // do heads that precede those tails:
    const resultOfAttemptToMatchHeads = matchLeftIncl(
      str1,
      noteDownTheIndex,
      opts1.heads,
      {
        trimBeforeMatching: true,
        cb: (char, theRemainderOfTheString, index) => {
          // reassign noteDownTheIndex to new value, this time shifted left by
          // the width of matched heads
          noteDownTheIndex = index;
          return true;
        },
        relaxedApi: true
      }
    );
    if (resultOfAttemptToMatchHeads) {
      return str1.slice(0, noteDownTheIndex + 1);
    }
    return str1;
  }
  // action
  while (str !== delTrailingEmptyHeadTailChunks(str, opts)) {
    str = trimSpaces(delTrailingEmptyHeadTailChunks(str, opts));
  }

  //                      E A R L Y    E N D I N G
  if (
    !matchRightIncl(str, 0, opts.heads, {
      trimBeforeMatching: true,
      relaxedApi: true
    }) ||
    !matchLeftIncl(str, str.length - 1, opts.tails, {
      trimBeforeMatching: true,
      relaxedApi: true
    })
  ) {
    return trimSpaces(str);
  }

  //                             P A R T   II

  // iterate the input string
  for (let i = 0, len = str.length; i < len; i++) {
    //
    // console log bits for development

    // catch whitespace
    if (str[i].trim() === "") ; else {
      // so it's not a whitespace character.

      // "beginning" is a special state which lasts until first non-head/tail
      // character is met.
      // For example: {{{  }}} {{{ {{{ something }}} }}}
      // ------------>             <----------------
      //                 ^^^ indexes where "beginning" is "true"

      // match heads
      let noteDownTheIndex;
      const resultOfAttemptToMatchHeads = matchRightIncl(str, i, opts.heads, {
        trimBeforeMatching: true,
        cb: (char, theRemainderOfTheString, index) => {
          noteDownTheIndex = index;
          return true;
        },
        relaxedApi: true
      });
      if (resultOfAttemptToMatchHeads) {
        // reset marker
        itsFirstLetter = true;
        // reset firstTails
        if (itsFirstTail) {
          itsFirstTail = true;
        }

        // 0. Just in case, check maybe there are tails following right away,
        // in that case definitely remove both
        let tempIndexUpTo;
        const resultOfAttemptToMatchTails = matchRightIncl(
          str,
          noteDownTheIndex,
          opts.tails,
          {
            trimBeforeMatching: true,
            cb: (char, theRemainderOfTheString, index) => {
              tempIndexUpTo = index;
              return true;
            },
            relaxedApi: true
          }
        );
        if (resultOfAttemptToMatchTails) {
          realRanges.push(i, tempIndexUpTo);
        }

        // 1. At this moment, in case {{ hi {{ name }}! }}
        // when we reach the second "{{", first "{{" are still in conditional
        // holding array. We'll evaluate the situation by "lastMatched" variable.

        if (
          conditionalRanges.current() &&
          firstNonMarkerChunkFound &&
          lastMatched !== "tails"
        ) {
          realRanges.push(conditionalRanges.current());
        }

        // 2. let's evaluate the situation and possibly submit this range of indexes
        // to conditional ranges array.

        // if it's the beginning of a file, where no non-head/tail character was
        // met yet, add it to conditionals array:
        if (!firstNonMarkerChunkFound) {
          // deal with any existing content in the conditionals:
          if (conditionalRanges.current()) {
            // first, if there are any conditional ranges, they become real-ones:
            realRanges.push(conditionalRanges.current());
            // then, wipe conditionals:
            conditionalRanges.wipe();
          }
          // then, add this new range:
          conditionalRanges.push(i, noteDownTheIndex);
        } else {
          // Every heads or tails go to conditional array. First encountered
          // non-head/tail wipes all.
          conditionalRanges.push(i, noteDownTheIndex);
        }

        // 3. set the new lastMatched
        lastMatched = "heads";

        // 4. offset the index
        i = noteDownTheIndex - 1;
        continue;
      }

      // match tails
      const resultOfAttemptToMatchTails = matchRightIncl(str, i, opts.tails, {
        trimBeforeMatching: true,
        cb: (char, theRemainderOfTheString, index) => {
          noteDownTheIndex = existy(index) ? index : str.length;
          return true;
        },
        relaxedApi: true
      });
      if (resultOfAttemptToMatchTails) {
        // reset marker
        itsFirstLetter = true;

        if (!itsFirstTail) {
          // if that's a second chunk, this means each chunk will be wrapped
          // and we can't peel of those wrappings, hence only the second tail
          // can be added to conditionals' array.
          conditionalRanges.push(i, noteDownTheIndex);
        } else {
          // 1.
          if (lastMatched === "heads") {
            conditionalRanges.wipe();
          }

          // 2. if it's just the first tail, do nothing, but turn off the flag
          itsFirstTail = false;
        }

        // set lastMatched
        lastMatched = "tails";

        // 2. offset the index
        i = noteDownTheIndex - 1;
        continue;
      }

      // if we reached this point, this means, it's neither head nor tail, also
      // not a whitespace

      if (itsFirstTail) {
        itsFirstTail = true;
      }
      if (itsFirstLetter && !firstNonMarkerChunkFound) {
        // wipe the conditionals:
        // conditionalRanges.wipe()

        // set the flags:
        firstNonMarkerChunkFound = true;
        itsFirstLetter = false;
      } else if (itsFirstLetter && !secondNonMarkerChunkFound) {
        secondNonMarkerChunkFound = true;
        itsFirstTail = true;
        itsFirstLetter = false;

        // wipe the conditionals.
        // That's for example where we reached "n" in "{{ hi {{ name }}! }}"
        if (lastMatched === "heads") {
          conditionalRanges.wipe();
        }
      } else if (itsFirstLetter && secondNonMarkerChunkFound) {
        // in this case we reached "!" in "{{ hi }} name {{! }}", for example.
        // Let's wipe the conditionals
        conditionalRanges.wipe();
      }
    }
    //
  }

  if (conditionalRanges.current()) {
    realRanges.push(conditionalRanges.current());
  }
  if (realRanges.current()) {
    return rangesApply(str, realRanges.current()).trim();
  }
  return str.trim();
}

export default removeDuplicateHeadsTails;
