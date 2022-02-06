// Написать функцию вычисления простых выражений
// Example:
// bar("1+2*3") -> 7
// bar("4/2*4-3") -> 5
// bar("12-3") -> 9

import { operatorPrecedence } from "./operatorPrecedence.js";
import { calculate } from "./operations.js";

console.log(tokenizeString("12-3*2"));

function tokenizeString(expression) {
    const tokenArray = [];

    let token = "";
    for (let i = 0; i < expression.length; i++) {
        if (parseInt(expression[i])) {
            token += expression[i];
        } else {
            tokenArray.push(token);
            token = "";
            tokenArray.push(expression[i]);
        }
    }

    if(token !== "") {
        tokenArray.push(token);
    }

    return tokenArray;
}