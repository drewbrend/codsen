import { Linter, RuleObjType } from "../../linter";

// rule: attribute-validate-code
// -----------------------------------------------------------------------------

import checkForWhitespace from "../../util/checkForWhitespace";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare let DEV: boolean;

function attributeValidateCode(context: Linter): RuleObjType {
  return {
    attribute(node) {
      DEV &&
        console.log(
          `███████████████████████████████████████ attributeValidateCode() ███████████████████████████████████████`
        );

      DEV &&
        console.log(
          `021 attributeValidateCode(): node = ${JSON.stringify(node, null, 4)}`
        );

      if (node.attribName === "code") {
        // validate the parent
        if (node.parent.tagName !== "applet") {
          context.report({
            ruleId: "attribute-validate-code",
            idxFrom: node.attribStarts,
            idxTo: node.attribEnds,
            message: `Tag "${node.parent.tagName}" can't have attribute "${node.attribName}".`,
            fix: null,
          });
        }

        // if value is empty or otherwise does not exist
        if (!(node.attribValueStartsAt as number) || !node.attribValueEndsAt) {
          context.report({
            ruleId: "attribute-validate-code",
            idxFrom: node.attribStarts,
            idxTo: node.attribEnds,
            message: `Missing value.`,
            fix: null,
          });
        } else {
          // only validate the whitespace
          let { charStart, charEnd, errorArr } = checkForWhitespace(
            node.attribValueRaw,
            node.attribValueStartsAt as number
          );
          DEV &&
            console.log(
              `${`\u001b[${33}m${`charStart`}\u001b[${39}m`} = ${JSON.stringify(
                charStart,
                null,
                4
              )}; ${`\u001b[${33}m${`charEnd`}\u001b[${39}m`} = ${JSON.stringify(
                charEnd,
                null,
                4
              )}`
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
            DEV && console.log(`073 RAISE ERROR`);
            context.report({ ...errorObj, ruleId: "attribute-validate-code" });
          });
        }
      }
    },
  };
}

export default attributeValidateCode;
