"use strict";
//Write the logic
function filterNum (num: number) {

    if (num % 15 == 0) {
        // console.log('FizzBuzz');
        return 'FizzBuzz';
    }
    else if (num % 3 == 0 || num.toString().includes('3')) {
        // console.log('Fizz');
        return 'Fizz';
    }
    else if (num % 5 == 0 || num.toString().includes('5')) {
        // console.log('Buzz');
        return 'Buzz';
    }
    else {
        // console.log(number1);
        return num;
    }
}

function Exercise1filterNum(num: number) {
    
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else {
        return num;
    }
    
}

    function countNums1 (){
        let numbers = 1;

        for (numbers = 1; numbers <= 100; numbers++) {
            // let n = new Exercise1();
            console.log(filterNum(numbers))
        }
    }

//introduction function
    countNums1();
