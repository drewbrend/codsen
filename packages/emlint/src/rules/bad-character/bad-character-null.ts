import { Linter, RuleObjType } from "../../linter";
import { badChars } from "../../util/bad-character-all";

// rule: bad-character-null
// -----------------------------------------------------------------------------

// Catches raw character "NULL":
// https://www.fileformat.info/info/unicode/char/0000/index.htm

function badCharacterNull(context: Linter): RuleObjType {
  let charCode = 0;
  return {
    character({ chr, i }) {
      if (chr.charCodeAt(0) === charCode) {
        context.report({
          ruleId: badChars.get(charCode) as string,
          message: "Bad character - NULL.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]], // just delete it
          },
        });
      }
    },
  };
}

export default badCharacterNull;
