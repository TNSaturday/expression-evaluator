// Написать функцию вычисления простых выражений
// Example:
// bar("1+2*3") -> 7
// bar("4/2*4-3") -> 5
// bar("12-3") -> 9

import { operatorPrecedence } from "./operatorPrecedence.js";
import { calculate } from "./operations.js";
import { Stack } from "./Stack.js";

// console.log(calculateExpression(5));
console.log(calculateExpression("3+4/2-3"));

function calculateExpression(stringExpression) {
    if (typeof stringExpression !== "string") {
        throw new TypeError(`String expected, got ${typeof stringExpression}`);
    }

    const numbersStack = new Stack();
    const operationsStack = new Stack();

    // Let's start with the assumption, that our input string consists of single digit numbers and binary operators
    for (let i = 0; i < stringExpression.length; i++) {
        if (parseInt(stringExpression[i])) {
            numbersStack.push(parseInt(stringExpression[i]));
        } else {
            if (operationsStack.isEmpty()) {
                operationsStack.push(stringExpression[i]);
            } else {
                if (operatorPrecedence[operationsStack.peek()] <= operatorPrecedence[stringExpression[i]]) {
                    operationsStack.push(stringExpression[i]);
                } else {
                    // If the next operator has higher power than the previous one, take the
                    // last two numbers from the numbers stack and execute the previous operation on them
                    const number2 = numbersStack.pop();
                    const number1 = numbersStack.pop();
                    const operator = operationsStack.pop();
                    numbersStack.push(calculate[operator](number1, number2));
                    operationsStack.push(stringExpression[i]);
                }
            }
        }
    }

    return {numbersStack, operationsStack};
}