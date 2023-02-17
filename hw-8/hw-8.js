'use strict';
// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
console.log('1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).');
let array = [];

for (let i = 20; i <= 30; i += 0.5) {
    array.push(i);
}

console.log('(' + array.toString().split(',').join(' ').replaceAll('.', ',') + ')');

// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
console.log('2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.');
let dollarExchangeRateToUa = 27;
let arrayDollarExchangeRateToUa = [];

for (let i = 10; i <= 100; i += 10) {
    arrayDollarExchangeRateToUa.push(i + 'USD' + ' = ' + dollarExchangeRateToUa * i + 'UA');
}

console.log(arrayDollarExchangeRateToUa.toString().replaceAll(',', ', '));

// 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
console.log('3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.');
let N = 1024;
let arrayNumber = [];

for (let i = 1; i <= 100; i++) {
    if ((i ** 2) <= N) {
        arrayNumber.push(i);
    }
}

console.log(arrayNumber.toString().replaceAll(',', ', '));

/* 4. Дане ціле число. З'ясувати, чи є воно простим
(простим називається число, більше 1, які не мають інших дільників крім 1 і себе).*/
console.log('4. Дане ціле число. З\'ясувати, чи є воно простим\n' +
    '(простим називається число, більше 1, які не мають інших дільників крім 1 і себе).');
let number = 11;
let simpleNumber;

if (number > 1) {
    for (let i = 2; i <= number; i++) {
        if (number % i === 0 && i !== number) {
            simpleNumber = number + ' is not simple number';
            break;
        } else if (i === number) {
            simpleNumber = number + ' is simple number';
            break;
        }
    }
} else {
    simpleNumber = number + ' is not simple number';
}

console.log(simpleNumber);

/* 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.
 (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).*/
console.log('5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.\n' +
    ' (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).')
let someNumber = 81;
let stringSomeNumber;

for (let i = 1; i <= someNumber; i++) {
    if (3 ** i === someNumber) {
        stringSomeNumber = someNumber + ' yes ' + 'degree = ' + i
        break;
    } else if (3 ** i > someNumber) {
        stringSomeNumber = someNumber + ' not'
        break;
    }
}

console.log(stringSomeNumber);