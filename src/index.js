// This is a test comment to trigger the CI pipeline workflow in a Pull Request
const unusedVariable = "I trigger an ESLint error";
import { add, isEven } from "./math.js";

console.log("2 + 3 =", add(2, 3));
console.log("Is 10 even?", isEven(10));
