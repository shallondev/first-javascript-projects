// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 1000;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attempts = 0;
let guess;
let running = true;

while(running) {

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)) {
        window.alert("Please enter a vlid number");
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number");
    }
    else {
        attempts++;
        if (guess < answer) {
            window.alert("Too low, try again!");
        }
        else if (guess > answer) {
            window.alert("Too high, try again!");
        }
        else {
            window.alert(`Congratuations! You win!!!! It took you ${attempts} attempts to guess ${answer}.`);
            running = false;
        }
    }
}