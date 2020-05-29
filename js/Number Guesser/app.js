/*
GAME FUNCTION
- Player must guess a number between a min and max
- Player gets a certain amount if guesses
- Notify player of guesses remaining
- Notify the player correct number if loose
- Let player choose to play again 
*/

// Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guesseLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    guessMessage = document.querySelector('.message');

// Assign UI min max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function (event) {
    if (event.target.className === 'play-again') {
        window.location.reload();
    }
});


// Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);
    console.log(guess);
    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    } else {

        // Check if won
        if (guess === winningNum) {
            // Game over - Won
            gameOver(true, `${winningNum} is correct, YOU WIN`);

        } else {
            // Wrong number
            guesseLeft -= 1;

            if (guesseLeft === 0) {
                // Game over - Lost
                gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
            } else {
                // Game continues - answer wrong

                // Change border color
                guessInput.style.borderColor = 'red';

                // Clear input
                guessInput.value = '';

                // Set Message
                setMessage(`${guess} is not correct, ${guesseLeft}  guesses left`, 'red');
            }

        }
    }
});

// Game Over
function gameOver(won, msg) {

    let color = won ? 'green' : 'red';

    // Disable input
    guessInput.disabled = true;

    // Change border color
    guessInput.style.borderColor = color;

    // Set Message
    setMessage(msg, color);

    // Play Again ?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}


// Get winning number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Set message
function setMessage(message, color) {
    guessMessage.style.color = color;
    guessMessage.textContent = message;
}