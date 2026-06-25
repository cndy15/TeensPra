// Project 1: Calculator
var operator = '+';
var num1 = 14;
var num2 = 6;
var result;

if (typeof num1 === 'number' && typeof num2 === 'number') {
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else {
        result = 'no operator selected';
    }
}

console.log(`${num1} ${operator} ${num2} = ${result}`);

// Project 2: Trivia
const questions = [
    { question: 'Capital of Japan?', answer: 'tokyo' },
    { question: 'Capital of France?', answer: 'paris' },
    { question: 'Capital of Indonesia?', answer: 'jakarta' },
    { question: 'Capital of Australia?', answer: 'canberra' },
    { question: 'Capital of Brazil?', answer: 'brasilia' }
];

let score = 0;
const userAnswers = ['tokyo', 'paris', 'jakarta', 'canberra', 'brasilia'];

for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
        console.log('Correct!');
        score++;
    } else {
        console.log('Wrong! The answer is ' + questions[i].answer);
    }
}

console.log(`Your score: ${score} / ${questions.length}`);