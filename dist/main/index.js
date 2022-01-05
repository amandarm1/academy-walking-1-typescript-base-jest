"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rl = void 0;
const readline = require("readline");
exports.rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
exports.rl.question('Choose stage [1/2]:', (answer) => {
    stageFilter(answer);
    exports.rl.close();
});
/**
 * Choose function by stage input
 *
 * @param stage
 */
function stageFilter(stage) {
    switch (stage) {
        case '1':
            stage1();
            break;
        case '2':
            stage2();
            break;
        default:
            console.log('Incorrect answer');
    }
}
/**
 * Stage 1
 * Filter num when is divisible by 3 and 5
 *
 * @returns string or number
 */
function stage1() {
    for (let num = 1; num <= 100; num++) {
        if (num % 3 == 0 && num % 5 == 0) {
            console.log('FizzBuzz');
        }
        else if (num % 3 == 0) {
            console.log('Fizz');
        }
        else if (num % 5 == 0) {
            console.log('Buzz');
        }
        else {
            console.log(num);
        }
    }
}
/**
 * Stage 2
 * Filter num when is divisible by 3, 5 and includes '3' and '5'
 *
 * @returns string or number
 */
function stage2() {
    for (let num = 1; num <= 100; num++) {
        if (num % 15 == 0) {
            console.log('FizzBuzz');
        }
        else if (num % 3 == 0 || num.toString().includes('3')) {
            console.log('Fizz');
        }
        else if (num % 5 == 0 || num.toString().includes('5')) {
            console.log('Buzz');
        }
        else {
            console.log(num);
        }
    }
}
//# sourceMappingURL=index.js.map