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
	}

	verify() {
    if (this.gameEnded) {
      return
    }

		const guess = document.getElementById('guessingInput').value;
		console.log(this.secretNumber);

		if (parseInt(guess) === this.secretNumber) {
			document.getElementById('result').innerHTML = 'YOU WIN!';
			this.gameEnded = true;
		} else {
			this.chances--;

			if (this.chances > 0) {
				if (guess > this.secretNumber) {
					document.getElementById(
						'result'
					).innerHTML = `YOU LOSE! TRY AGAIN. ${this.chances} CHANCES LEFT! TIP: TRY A SMALLEST NUMBER.`;
				} else if (guess < this.secretNumber) {
					document.getElementById(
						'result'
					).innerHTML = `YOU LOSE! TRY AGAIN. ${this.chances} CHANCES LEFT! TIP: TRY A LARGEST NUMBER.`;
				}
			} else {
				document.getElementById(
					'result'
				).innerHTML = `YOU DON'T HAVE CHANCES REMAINING. GAME OVER! THE NUMBER I THOUGHT WAS THE ${this.secretNumber}`;
				this.gameEnded = true;
			}
		}
	}
}

const game = new GuessingGame();
