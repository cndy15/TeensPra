// TASK
for (let platform = 1; platform <= 3; platform++) {
    console.log(`Platform created ${platform}`);
    for (let carrot = 1; carrot <= 2; carrot++) {
        console.log(`--- Carrot ${carrot}`);
    }
}

// TASK2

let input;
do {
    input = 'keyword'; 
    console.log(input);
} while (input !== 'stop');

let randomNumber;
const expectedNumber = 5;

do {
    randomNumber = Math.floor(Math.random() * 11);
    console.log(randomNumber);
} while (randomNumber !== expectedNumber);

console.log('Found it! Number: ' + randomNumber);