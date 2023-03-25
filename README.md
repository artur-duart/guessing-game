# Guessing Game

This is a simple number guessing game where you need to guess a number randomly chosen by the computer.

## Technologies used

- HTML
- CSS
- JavaScript

## How to play

1. Open the `index.html` file.
2. Enter the maximum draw interval when prompted. For example, if you enter "10", the number to be guessed will be between 1 and 10.
3. Try to guess the number the computer chose by entering your guess in the input field and clicking the "Verify" button.
4. You have a limited number of chances to guess the correct number, so be careful!
5. If you manage to guess the correct number, you win! Otherwise, the game will give you a tip on whether your guess was too high or too low, and you can try again until you run out of chances.

## Code structure

The code for this game is divided into three files:

- `index.html`: the HTML markup for the game.
- `style.css`: the CSS styling for the game.
- `script.js`: the JavaScript code that handles the game logic.

### `index.html`

The HTML for this game is very simple, with just a container `div` element that holds the game title, subtitle, input field, "Verify" button, and result text.

### `style.css`

The CSS for this game is also very simple, with just some basic styles for the game container, input field, "Verify" button, and result text.

### `script.js`

The JavaScript code for this game is a bit more complex. It creates a `GuessingGame` class that handles the game logic, including generating the secret number, tracking the number of chances remaining, and verifying the player's guess.

## Acknowledgements

This game was created as a project for the "Computational Thinking and Application Server" course at FIAP.
