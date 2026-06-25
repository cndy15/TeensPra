// Step 1
var random = Math.floor(Math.random() * 10);

var adjectives = ['proudly', 'quickly', 'bravely', 'smartly', 'wildly',
                  'boldly', 'calmly', 'darkly', 'epically', 'freely'];

var nouns = ['Butterfly', 'Eagle', 'Dragon', 'Wolf', 'Phoenix',
             'Storm', 'Shadow', 'Blade', 'Fire', 'Star'];

var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '+'];

var newUsername;
var newPassword;

// Step 2
function generate(option) {
    random = Math.floor(Math.random() * 10);

    if (option == 1) {
        newUsername = adjectives[random] + nouns[random];
        console.log('Username: ' + newUsername);
    } else if (option == 2) {
        var randomNum = Math.floor(Math.random() * 100);
        newPassword = nouns[random].toUpperCase() + 
                      randomNum + 
                      symbols[random];
        console.log('Password: ' + newPassword);
    }
}

// Step 3
var userOption = 1; // ganti 1 atau 2

while (userOption != 1 && userOption != 2) {
    userOption = 1;
}

generate(userOption);