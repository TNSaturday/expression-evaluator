function calculateExpression(stringExpression) {
    return evaluateExpression(tokenizeString(stringExpression));
}

/**
 * The algorithm that I came up with is such:
 * 1. Find the first operator with maximum precedence of the operatorPrecedence object.
 * 2. Apply this operator for the operands, that surround it (e.g. expressionArray[i-1] and expressionArray[i+1].
 * 3. Remove said positions along with the operand itself from the array.
 * 4. Put back the computation from the step 2.
 * 5. Return new array and call function recursively.
 * 6. Until there is only one item left, stop.
 * @param expressionArray
 */
function evaluateExpression(expressionArray) {
    let operator = findOperatorWithBiggestPrecedence(expressionArray);
    let operatorIndex = expressionArray.findIndex(el => el === operator);

    let calculationResult = calculate[operator](expressionArray[operatorIndex-1], expressionArray[operatorIndex+1]);
    expressionArray.splice(operatorIndex - 1, 3, calculationResult);

    if (expressionArray.length === 1) {
        return expressionArray[0];
    } else {
        return evaluateExpression(expressionArray);
    }
}

/**
 * Find operator with the biggest precedence
 * @param array
 * @returns {string}
 */
function findOperatorWithBiggestPrecedence(array) {
    let operator = "";
    let maxPrecedence = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            if (operatorPrecedence[array[i]] > maxPrecedence) {
                maxPrecedence = operatorPrecedence[array[i]];
                operator = array[i];
            }
        }
    }

    return operator;
}

/**
 * Split string containing arithmetic expression into an array of operands and operators.
 * Input must be a string pf an infix notation containing integer numbers and arithmetic operands.
 * No parenthesis, variables or other operations support for the sake of simplicity.
 * @param expressionString
 * @returns {[]}
 */
function tokenizeString(expressionString) {
    const tokenArray = [];

    let token = "";
    for (let i = 0; i < expressionString.length; i++) {
        if (parseInt(expressionString[i])) {
            token += expressionString[i];
        } else {
            tokenArray.push(parseInt(token));
            token = "";
            tokenArray.push(expressionString[i]);
        }
    }

    if(token !== "") {
        tokenArray.push(parseInt(token));
    }

    return tokenArray;
}