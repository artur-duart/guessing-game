'use strict';

class GuessingGame {
	constructor() {
		let interval = parseInt(prompt('Enter the maximum draw interval: '));
		document.getElementById(
			'subtitle'
		).innerHTML = `Between 1 and ${interval}, guess the number!`;

		this.secretNumber = Math.round(Math.random() * interval);
		this.chances = Math.round(Math.log2(interval));
		this.gameEnded = false;

		console.log(this.secretNumber);
	}

	restart() {
		window.location.reload();
	}

	verify() {
		if (this.gameEnded) {
			return;
		}

		const guess = parseInt(document.getElementById('guessingInput').value);

		if (guess === this.secretNumber) {
			document.getElementById('result').innerHTML = 'YOU WIN!';
			this.gameEnded = true;
			mainButton.textContent = 'Play again';
		} else {
			this.chances--;

			if (this.chances > 0) {
				if (guess > this.secretNumber) {
					result.innerHTML = `YOU LOSE! TRY AGAIN. ${this.chances} CHANCES LEFT! TIP: TRY A SMALLEST NUMBER.`;

					guessingInput.value = '';
				} else if (guess < this.secretNumber) {
					result.innerHTML = `YOU LOSE! TRY AGAIN. ${this.chances} CHANCES LEFT! TIP: TRY A LARGEST NUMBER.`;

					guessingInput.value = '';
				}
			} else {
				result.innerHTML = `YOU DON'T HAVE CHANCES REMAINING. GAME OVER! THE NUMBER I THOUGHT WAS THE ${this.secretNumber}`;
				guessingInput.value = '';
				this.gameEnded = true;
				mainButton.textContent = 'Play again';
			}
		}
	}
}

const game = new GuessingGame();

if (isNaN(game.secretNumber)) {
	game.restart();
}

let guessingInput = document.getElementById('guessingInput');
let result = document.getElementById('result');

const mainButton = document.getElementById('mainButton');
mainButton.addEventListener('click', () => {
	if (guessingInput.value == '') {
		result.innerHTML = 'PLEASE, INSERT A GUESSING!';
	} else {
		if (game.gameEnded) {
			game.restart();
		} else {
			game.verify();
		}
	}
});
