"use strict";
import * as readline from 'readline';

export let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Choose stage [1/2]:', (answer) => {
    stageFilter(answer);
    rl.close();
});

/**
 * Choose function by stage input
 *
 * @param stage
 */
function stageFilter(stage: string) {

    switch (stage) {
        case '1':
            stage1();
            break;
        case '2':
            stage2();
            break;
        default:
            console.log('Incorrect answer')
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
        } else if (num % 3 == 0) {
            console.log('Fizz');
        } else if (num % 5 == 0) {
            console.log('Buzz');
        } else {
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