'use strict';
const number1 = prompt('Please enter your numbers', 'for example 9');
const number2 = prompt('Please enter your numbers', 'for example 7');
const number3 = prompt('Please enter your numbers', 'for example 33');
let mean=(+number2 + +number3 + +number1)/3;
alert(`Mean arithmetic of these numbers, ${Math.round((mean))}`);