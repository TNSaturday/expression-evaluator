// Написать функцию вычисления простых выражений
// Example:
// bar("1+2*3") -> 7
// bar("4/2*4-3") -> 5
// bar("12-3") -> 9

import { operatorPrecedence } from "./operatorPrecedence.js";
import { Stack } from "./Stack.js";

// console.log(calculateExpression(5));
console.log(calculateExpression("1+2*3"));

function calculateExpression(stringExpression) {
    if (typeof stringExpression !== "string") {
        throw new TypeError(`String expected, got ${typeof stringExpression}`);
    }

    const numbersStack = new Stack();
    const operationsStack = new Stack();

    // Let's start with the assumption, that our input string consists of single digit numbers and binary operators
    for (let i = 0; i < stringExpression.length; i++) {
        // For now I just put all numbers into the numbers stack and all operators into operations stack
        if (parseInt(stringExpression[i])) {
            numbersStack.push(parseInt(stringExpression[i]));
        } else {
            operationsStack.push(stringExpression[i]);
        }
    }

    return {numbersStack, operationsStack};
}