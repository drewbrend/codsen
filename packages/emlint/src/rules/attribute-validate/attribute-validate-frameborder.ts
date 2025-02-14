import { Linter, RuleObjType } from "../../linter";

// rule: attribute-validate-frameborder
// -----------------------------------------------------------------------------

import { validateString } from "../../util/util";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare let DEV: boolean;

function attributeValidateFrameborder(context: Linter): RuleObjType {
  return {
    attribute(node) {
      DEV &&
        console.log(
          `███████████████████████████████████████ attributeValidateFrameborder() ███████████████████████████████████████`
        );

      DEV &&
        console.log(
          `021 attributeValidateFrameborder(): node = ${JSON.stringify(
            node,
            null,
            4
          )}`
        );

      if (node.attribName === "frameborder") {
        // validate the parent
        if (!["frame", "iframe"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-frameborder",
            idxFrom: node.attribStarts,
            idxTo: node.attribEnds,
            message: `Tag "${node.parent.tagName}" can't have attribute "${node.attribName}".`,
            fix: null,
          });
        }

        // https://www.w3.org/TR/html4/present/frames.html#adef-frameborder
        let errorArr = validateString(
          node.attribValueRaw, // value
          node.attribValueStartsAt as number, // offset
          {
            permittedValues: ["0", "1"],
            canBeCommaSeparated: false,
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
          context.report({
            ...errorObj,
            ruleId: "attribute-validate-frameborder",
          });
        });
      }
    },
  };
}

export default attributeValidateFrameborder;
