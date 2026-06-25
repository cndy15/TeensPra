const currentScore = 1858;
const xpInterval = 500;

const remainder = currentScore % xpInterval;
const scoresNeeded = xpInterval - remainder;

console.log(scoresNeeded);