import leven from "leven";
import { processCommaSep } from "string-process-comma-separated";
import type { Ranges } from "../../../ops/typedefs/common";

import {
  loop,
  recognisedMediaTypes,
  lettersOnlyRegex,
  Opts,
  ResObj,
} from "./util";
import { version as v } from "../package.json";

const version: string = v;

declare let DEV: boolean;

const defaults = {
  offset: 0,
};

// See https://drafts.csswg.org/mediaqueries/
// Also https://csstree.github.io/docs/validator.html
// Also, test in Chrome yourself
function isMediaD(originalStr: string, originalOpts?: Partial<Opts>): ResObj[] {
  let opts: Opts = { ...defaults, ...originalOpts };
  // insurance first
  if (opts.offset && !Number.isInteger(opts.offset)) {
    throw new Error(
      `is-media-descriptor: [THROW_ID_01] opts.offset must be an integer, it was given as ${
        opts.offset
      } (type ${typeof opts.offset})`
    );
  }
  if (!opts.offset) {
    // to cater false/null
    opts.offset = 0;
  }

  // quick ending
  if (typeof originalStr !== "string") {
    DEV &&
      console.log(
        `044 isMediaD(): early exit, ${`\u001b[${31}m${`RETURN`}\u001b[${39}m`} []`
      );
    return [];
  }
  if (!originalStr.trim()) {
    DEV &&
      console.log(
        `051 isMediaD(): early exit, ${`\u001b[${31}m${`RETURN`}\u001b[${39}m`} []`
      );
    return [];
  }

  let res: ResObj[] = [];

  // We pay extra attention to whitespace. These two below
  // mark the known index of the first and last non-whitespace
  // character (a'la trim)
  let nonWhitespaceStart = 0;
  let nonWhitespaceEnd = originalStr.length;

  let str = originalStr.trim();

  DEV &&
    console.log(
      `068 FINAL ${`\u001b[${33}m${`opts`}\u001b[${39}m`} = ${JSON.stringify(
        opts,
        null,
        4
      )}`
    );

  // ---------------------------------------------------------------------------

  // check for inner whitespace, for example,
  // " screen and (color), projection and (color)"
  //  ^
  //
  // as in...
  //
  // <link media=" screen and (color), projection and (color)" rel="stylesheet" href="example.css">
  //
  // ^ notice rogue space above

  if (originalStr !== originalStr.trim()) {
    let ranges = [];
    if (!originalStr[0].trim()) {
      DEV && console.log(`090 traverse forward`);
      for (let i = 0, len = originalStr.length; i < len; i++) {
        if (originalStr[i].trim()) {
          ranges.push([0 + opts.offset, i + opts.offset]);
          nonWhitespaceStart = i;
          break;
        }
      }
    }
    if (!originalStr[originalStr.length - 1].trim()) {
      DEV && console.log(`100 traverse backwards from the end`);
      for (let i = originalStr.length; i--; ) {
        if (originalStr[i].trim()) {
          ranges.push([i + 1 + opts.offset, originalStr.length + opts.offset]);
          nonWhitespaceEnd = i + 1;
          break;
        }
      }
    }
    DEV &&
      console.log(
        `111 PUSH [${ranges[0][0]}, ${ranges[ranges.length - 1][1]}]`
      );
    res.push({
      idxFrom: ranges[0][0],
      idxTo: ranges[ranges.length - 1][1],
      message: "Remove whitespace.",
      fix: {
        ranges: ranges as Ranges,
      },
    });
  }

  // ---------------------------------------------------------------------------

  DEV &&
    console.log(
      `127 isMediaD(): ██ working non-whitespace range: [${`\u001b[${35}m${nonWhitespaceStart}\u001b[${39}m`}, ${`\u001b[${35}m${nonWhitespaceEnd}\u001b[${39}m`}]`
    );

  // quick checks first - cover the most common cases, to make checks the
  // quickest possible when everything's all right
  if (recognisedMediaTypes.includes(str)) {
    //
    //
    //
    //
    //
    //
    //
    //
    // 1. string-only, like "screen"
    //
    //
    //
    //
    //
    //
    //
    //
    DEV &&
      console.log(
        `152 isMediaD(): whole string matched! ${`\u001b[${32}m${`RETURN`}\u001b[${39}m`}`
      );
    return res;
  }
  if (["only", "not"].includes(str)) {
    DEV &&
      console.log(
        `159 isMediaD(): PUSH [${nonWhitespaceStart + opts.offset}, ${
          nonWhitespaceEnd + opts.offset
        }]`
      );
    res.push({
      idxFrom: nonWhitespaceStart + opts.offset,
      idxTo: nonWhitespaceEnd + opts.offset,
      message: `Missing media type or condition.`,
      fix: null,
    });
  } else if (
    str.match(lettersOnlyRegex) &&
    !str.includes("(") &&
    !str.includes(")")
  ) {
    //
    //
    //
    //
    //
    //
    //
    //
    // 2. string-only, unrecognised like "screeeen"
    //
    //
    //
    //
    //
    //
    //
    //
    DEV && console.log(`191 isMediaD(): mostly-letters clauses`);

    for (let i = 0, len = recognisedMediaTypes.length; i < len; i++) {
      DEV &&
        console.log(
          `196 isMediaD(): leven ${recognisedMediaTypes[i]} = ${leven(
            recognisedMediaTypes[i],
            str
          )}`
        );
      if (leven(recognisedMediaTypes[i], str) === 1) {
        DEV &&
          console.log(
            `204 isMediaD(): ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`}`
          );
        res.push({
          idxFrom: nonWhitespaceStart + opts.offset,
          idxTo: nonWhitespaceEnd + opts.offset,
          message: `Did you mean "${recognisedMediaTypes[i]}"?`,
          fix: {
            ranges: [
              [
                nonWhitespaceStart + opts.offset,
                nonWhitespaceEnd + opts.offset,
                recognisedMediaTypes[i],
              ],
            ],
          },
        });
        break;
      }

      if (i === len - 1) {
        // it means nothing was matched
        DEV && console.log(`225 isMediaD(): end reached`);
        DEV &&
          console.log(
            `228 isMediaD(): ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${`\u001b[${33}m${
              nonWhitespaceStart + opts.offset
            }\u001b[${39}m`}, ${`\u001b[${33}m${
              nonWhitespaceEnd + opts.offset
            }\u001b[${39}m`}] (not offset [${`\u001b[${33}m${nonWhitespaceStart}\u001b[${39}m`}, ${`\u001b[${33}m${nonWhitespaceEnd}\u001b[${39}m`}])`
          );
        res.push({
          idxFrom: nonWhitespaceStart + opts.offset,
          idxTo: nonWhitespaceEnd + opts.offset,
          message: `Unrecognised media type "${str}".`,
          fix: null,
        });
        DEV &&
          console.log(
            `242 isMediaD(): ${`\u001b[${33}m${`res`}\u001b[${39}m`} = ${JSON.stringify(
              res,
              null,
              4
            )}`
          );
      }
    }
  } else {
    //
    //
    //
    //
    //
    //
    //
    //
    // 3. mixed, like "screen and (color)"
    //
    //
    //
    //
    //
    //
    //
    //

    // PART 1.
    // ███████████████████████████████████████

    DEV &&
      console.log(
        `274 isMediaD(): ${`\u001b[${36}m${`PART I.`}\u001b[${39}m`} Preliminary checks.`
      );

    // Preventive checks will help to simplify the algorithm - we won't need
    // to cater for so many edge cases later.

    let wrongOrder = false;
    let [openingBracketCount, closingBracketCount] = Array.from(str).reduce(
      (acc, curr, idx) => {
        if (curr === ")") {
          // if at any time, there are more closing brackets than opening-ones,
          // this means order is messed up
          if (!wrongOrder && acc[1] + 1 > acc[0]) {
            DEV &&
              console.log(
                `289 isMediaD(): set ${`\u001b[${33}m${`wrongOrder`}\u001b[${39}m`} = true`
              );
            wrongOrder = true;
          }
          return [acc[0], acc[1] + 1];
        }
        if (curr === "(") {
          return [acc[0] + 1, acc[1]];
        }
        if (curr === ";") {
          res.push({
            idxFrom: idx + opts.offset,
            idxTo: idx + 1 + opts.offset,
            message: "Semicolon found!",
            fix: null,
          });
        }
        return acc;
      },
      [0, 0]
    );

    // we raise this error only when there is equal amount of brackets,
    // only the order is messed up:
    if (wrongOrder && openingBracketCount === closingBracketCount) {
      DEV &&
        console.log(
          `316 isMediaD(): ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} the wrong order error`
        );
      res.push({
        idxFrom: nonWhitespaceStart + opts.offset,
        idxTo: nonWhitespaceEnd + opts.offset,
        message: "Some closing brackets are before their opening counterparts.",
        fix: null,
      });
    }
    DEV &&
      console.log(
        `327 isMediaD(): ${`\u001b[${33}m${`openingBracketCount`}\u001b[${39}m`} = ${JSON.stringify(
          openingBracketCount,
          null,
          4
        )}`
      );
    DEV &&
      console.log(
        `335 isMediaD(): ${`\u001b[${33}m${`closingBracketCount`}\u001b[${39}m`} = ${JSON.stringify(
          closingBracketCount,
          null,
          4
        )}`
      );

    // reporting that there were more one kind
    // of brackets than the other:
    if (openingBracketCount > closingBracketCount) {
      res.push({
        idxFrom: nonWhitespaceStart + opts.offset,
        idxTo: nonWhitespaceEnd + opts.offset,
        message: "More opening brackets than closing.",
        fix: null,
      });
    } else if (closingBracketCount > openingBracketCount) {
      res.push({
        idxFrom: nonWhitespaceStart + opts.offset,
        idxTo: nonWhitespaceEnd + opts.offset,
        message: "More closing brackets than opening.",
        fix: null,
      });
    }

    if (!res.length && str.match(/\(\s*\)/g)) {
      DEV && console.log(`361 empty brackets pair detected`);
      // now find out where
      let lastOpening = null;
      let nonWhitespaceFound;
      for (let i = 0, len = str.length; i < len; i++) {
        if (str[i] === "(") {
          lastOpening = i;
          nonWhitespaceFound = false;
        } else if (str[i] === ")" && lastOpening) {
          if (!nonWhitespaceFound) {
            DEV &&
              console.log(
                `373 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${lastOpening}, ${
                  i + 1
                }]`
              );
            res.push({
              idxFrom: lastOpening + opts.offset,
              idxTo: i + 1 + opts.offset,
              message: "Empty bracket pair.",
              fix: null,
            });
          } else {
            nonWhitespaceFound = true;
          }
        } else if (str[i].trim()) {
          nonWhitespaceFound = true;
        }
      }
    }

    if (res.length) {
      // report errors early, save resources
      DEV &&
        console.log(
          `396 isMediaD(): early ${`\u001b[${32}m${`RETURN`}\u001b[${39}m`}`
        );
      return res;
    }

    // PART 2.
    // ███████████████████████████████████████

    DEV &&
      console.log(
        `406 isMediaD(): ${`\u001b[${36}m${`PART II.`}\u001b[${39}m`} The main loop.`
      );
    // first parse comma-separated chunks
    processCommaSep(str, {
      offset: opts.offset,
      leadingWhitespaceOK: false,
      trailingWhitespaceOK: false,
      oneSpaceAfterCommaOK: true,
      innerWhitespaceAllowed: true,
      separator: ",",
      cb: (idxFrom: number, idxTo: number) => {
        DEV &&
          console.log(
            `419 isMediaD(): chunk [${idxFrom - opts.offset}, ${
              idxTo - opts.offset
            }] extracted, passing to loop()`
          );
        loop(
          str,
          {
            ...opts,
            idxFrom: idxFrom - opts.offset,
            idxTo: idxTo - opts.offset,
          },
          res
        );
      },
      errCb: (ranges: Ranges, message: string) => {
        DEV &&
          console.log(
            `436 isMediaD(): received error range ${JSON.stringify(
              ranges,
              null,
              4
            )} and message: "${message}"`
          );
      },
    });

    // PART 3.
    // ███████████████████████████████████████

    // if (!res.length) {
    //   // finally, if no errors were caught, parse:
    //   DEV && console.log(`329 PART III. Run through CSS Tree parser.`);
    //   const temp = cssTreeValidate(`@media ${str} {}`);
    //   DEV && console.log(
    //     `332 ${`\u001b[${31}m${`██`}\u001b[${39}m`} ${`\u001b[${33}m${`temp`}\u001b[${39}m`} = ${JSON.stringify(
    //       temp,
    //       null,
    //       4
    //     )}`
    //   );
    // }
  }

  // ---------------------------------------------------------------------------

  DEV &&
    console.log(
      `466 isMediaD(): ${`\u001b[${32}m${`FINAL RETURN`}\u001b[${39}m`}`
    );
  DEV &&
    console.log(
      `470 isMediaD(): ${`\u001b[${33}m${`res`}\u001b[${39}m`} = ${JSON.stringify(
        res,
        null,
        4
      )}`
    );
  return res;
}

export { isMediaD, defaults, version };
