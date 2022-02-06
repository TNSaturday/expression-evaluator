// Написать функцию вычисления простых выражений
// Example:
// bar("1+2*3") -> 7
// bar("4/2*4-3") -> 5
// bar("12-3") -> 9
import { operatorPrecedence} from "./operator-precedence.js";
import { Stack } from "./Stack.js";

const elementsStack = new Stack();

console.log(elementsStack.push(1));
console.log(operatorPrecedence);