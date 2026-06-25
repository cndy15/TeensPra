// // TASK1
const numbers = [-40, 50, 0];
numbers.forEach(num => {
    if (num > 0) {
        console.log('positive');
    } else if (num < 0) {
        console.log('negative');
    } else {
        console.log('not negative or positive');
    }
});


const ages = [8, 17, 20];
ages.forEach(age => {
    if (age >= 17) {
        console.log('Eligible for driver\'s license');
    } else {
        console.log('Not eligible for driver\'s license');
    }
});


const grades = [95, 80, 65, 50];
grades.forEach(grade => {
    if (grade > 90) {
        console.log('A');
    } else if (grade > 75) {
        console.log('B');
    } else if (grade > 60) {
        console.log('C');
    } else {
        console.log('D');
    }
});


const totalPayment = 200000;
const member = true;

if (member) {
    const discount = totalPayment * 0.10;
    console.log(totalPayment - discount);
} else {
    console.log(totalPayment);
}


const choosenPlayer = 'Knight';

if (choosenPlayer === 'Knight') {
    console.log('Welcome, Knight the hero!');
} else if (choosenPlayer === 'Wizard') {
    console.log('Welcome, Wizard the witch!');
}

// TASK2

const x = 5;  
const y = 3;   

if (x > 0 && y > 0) {
    console.log('Top Right');
} else if (x < 0 && y < 0) {
    console.log('Bottom Left');
} else if (x > 0 && y < 0) {
    console.log('Bottom Right');
} else if (x < 0 && y > 0) {
    console.log('Top Left');
} else {
    console.log('Middle');
}