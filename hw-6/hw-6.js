'use strict';
const year = prompt('What year were you born?', '1988');
const city = prompt('What city do you live in now?', 'Kyiv');
const sport = prompt('What is your favorite sport?', 'Powerlifting');
let count=0;
let yearUser;
if(year===''||year===null||year===' '||
    year.match(/[/.EXABCDEF/-/+/s/:punct:]/gi)){
    ++count;
}else {
    yearUser=2023- +year;
}
let cityUser;
switch (city) {
    case 'Kyiv':
    case 'Kiev':
        cityUser = 'You live in the capital of Ukraine.';
        break;
    case 'London':
    case 'Great Wen':
    case 'Ldn':
        cityUser = 'You live in the capital of England and the United Kingdom.';
        break;
    case 'Washington':
    case 'WA':
        cityUser = 'You live in the capital of the United States of America.';
        break;
    case '':
    case null:
    case ' ':
        count+=2;
        break;
    default:
        cityUser = 'Do you live in a town ' + city + '.';
        break;
}
let sportUser;
switch (sport) {
    case 'Powerlifting':
    case 'powerlifting':
        sportUser='Cool! Do you want to be like Oleksandr Rubets.';
        break;
    case 'Weightlifting':
    case 'weightlifting':
        sportUser='Cool! Do you want to be like Vasily Ivanovich Alekseev.';
        break;
    case 'Basketball':
    case 'basketball':
    case 'NBA':
    case 'nba':
        sportUser='Cool! Do you want to be like Michael Jeffrey Jordan.';
        break;
    case '':
    case null:
    case ' ':
        count+=4;
        break;
    default:
        sportUser='Cool! Favorite sport '+ sport;
}
switch (count) {
    case 0:
        alert('You are old '+yearUser+' '+cityUser+ ' '+sportUser);
        break;
    case 1:
        alert('It is a pity that you did not want to enter year were you born. ' +cityUser+' '+sportUser);
        break;
    case 2:
        alert('You are old '+yearUser+' It is a pity that you did not want to enter information city you live. '+ sportUser);
        break;
    case 4:
        alert('You are old '+yearUser+' '+cityUser+'It is a pity that you did not want to enter information favorite sport.');
        break;
    case 3:
        alert('It is a pity that you did not want to enter year were you born and enter information city you live. '+sportUser);
        break;
    case 5:
        alert('It is a pity that you did not want to enter year were you born and enter information favorite sport. '+cityUser);
        break;
    case 6:
        alert('You are old '+yearUser+' It is a pity that you did not want to enter information city you live and favorite sport.');
        break;
    default:
        alert('It is a pity that you did not want to enter year were you born, information city you live and favorite sport.');
        break;
}
