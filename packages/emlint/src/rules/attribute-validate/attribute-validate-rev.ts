import { Linter, RuleObjType } from "../../linter";

// rule: attribute-validate-rev
// -----------------------------------------------------------------------------

import { validateString, linkTypes } from "../../util/util";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare let DEV: boolean;

function attributeValidateRev(
  context: Linter,
  enforceLowercase = false
): RuleObjType {
  return {
    attribute(node) {
      DEV &&
        console.log(
          `███████████████████████████████████████ attributeValidateRev() ███████████████████████████████████████`
        );

      DEV &&
        console.log(
          `024 attributeValidateRev(): node = ${JSON.stringify(node, null, 4)}`
        );

      if (node.attribName === "rev") {
        // validate the parent
        if (!["a", "link"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-rev",
            idxFrom: node.attribStarts,
            idxTo: node.attribEnds,
            message: `Tag "${node.parent.tagName}" can't have attribute "${node.attribName}".`,
            fix: null,
          });
        }

        // check in two parts, first, a quick try, match the most common values only
        let errorArr = validateString(
          node.attribValueRaw, // value
          node.attribValueStartsAt as number, // offset
          {
            permittedValues: linkTypes,
            canBeCommaSeparated: false,
            caseInsensitive: !enforceLowercase,
          }
        );

        DEV &&
          console.log(
            `${`\u001b[${33}m${`errorArr`}\u001b[${39}m`} = ${JSON.stringify(
              errorArr,
              null,
              4
            )}`
          );

        errorArr.forEach((errorObj) => {
          DEV && console.log(`060 RAISE ERROR`);
          context.report({ ...errorObj, ruleId: "attribute-validate-rev" });
        });
      }
    },
  };
}

export default attributeValidateRev;
