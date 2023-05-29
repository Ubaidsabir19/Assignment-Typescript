class NumberGuessGame {
    private secretNumber: number;
    private attempts: number;
  
    constructor() {
      this.secretNumber = Math.floor(Math.random() * 100) + 1;
      this.attempts = 0;
    }
  
    play(guess: number): string {
      this.attempts++;
  
      if (guess === this.secretNumber) {
        return `Congratulations! You guessed the correct number (${this.secretNumber}) in ${this.attempts} attempts.`;
      } else if (guess < this.secretNumber) {
        return "Too low! Try guessing a higher number.";
      } else {
        return "Too high! Try guessing a lower number.";
      }
    }
  }
  
  // Usage
  const game = new NumberGuessGame();
  console.log(game.play(50));   
  console.log(game.play(75));  
  console.log(game.play(90));   
  console.log(game.play(80));   
  console.log(game.play(82));  
  console.log(game.play(83));   
  console.log(game.play(84));   
  console.log(game.play(85));   
  console.log(game.play(86));  
  console.log(game.play(87));   
  console.log(game.play(88)); 