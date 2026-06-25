// TASK1
// 1. Print nama 20 baris
for (let i = 0; i < 20; i++) {
    console.log('Steve');
}

// 2. Urutan angka 1-20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 3. Kelipatan 5 dari 5-100
for (let i = 5; i <= 100; i += 5) {
    console.log(i);
}

// TASK2
const gameName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const hoursPlayed = [2, 2, 3, 3, 1, 4, 5];
const timeLimit = 2;

let totalTime = 0;
let exceededCount = 0;

for (let i = 0; i < hoursPlayed.length; i++) {
    totalTime += hoursPlayed[i];
    if (hoursPlayed[i] > timeLimit) {
        exceededCount++;
        console.log(gameName[i] + ': ' + hoursPlayed[i] + ' hours (exceeded!)');
    } else {
        console.log(gameName[i] + ': ' + hoursPlayed[i] + ' hours');
    }
}

console.log('Total time: ' + totalTime + ' hours');
console.log('Exceeded limit: ' + exceededCount + ' times');