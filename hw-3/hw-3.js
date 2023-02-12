'use strict';
const number1 = prompt('Please enter your numbers', 'for example 2');
const number2 = prompt('Please enter your numbers', 'for example 2');
if (Number(`${number1}` ?? `${number2}`)){
    alert(`User entered ${number1} and ${number2}:\n
     ${number1}+${number2}`+'='+Number(Number(`${number1}`)+Number(`${number2}`))+'\n'+
    `     ${number1}-${number2}`+'='+Number(Number(`${number1}`)-Number(`${number2}`))+'\n'+
    `     ${number1}*${number2}`+'='+Number(Number(`${number1}`)*Number(`${number2}`))+'\n'+
    `     ${number1}/${number2}`+'='+Number(Number(`${number1}`)/Number(`${number2}`)));
}
