08/01/2026 - 09/01/2026

This is a README file for Rock Paper Scissor mini project

This project aims to implement what i've learnt so far

I’ve explored the fundamentals of interactive JavaScript programming by building a Rock–Paper–Scissors game. Here are the key concepts i’ve mastered:

- Randomization with Math.random(): i learned how to generate a random number and use it to let the computer pick between Rock, Paper, or Scissor with equal probability.

- Conditional Logic (if / else if / else): i practiced comparing the player’s move against the computer’s move to determine the outcome: win, lose, or tie.

- Function Design and Responsibilities:
  - playGame() handles the round logic: deciding the result and showing what happened.
  - updateScore() is responsible for updating the scoreboard based on the result.
 I saw how separating responsibilities makes your code cleaner and easier to maintain.

- Global Variables for State: i understood why scores (playerScore and computerScore) need to be declared outside functions so they persist across multiple rounds instead of resetting each time.

- DOM Manipulation with document.querySelector(): i learned how to select HTML elements and update their textContent dynamically, so the game displays results and scores directly on the page.

- Game Flow: i now see the full loop:
  1. Player clicks a button → triggers playGame().
  2. Computer generates a move.
  3. Moves are compared → result is decided.
  4. Result is displayed.
  5. updateScore() runs → scoreboard updates.

- Final Result Display: You experimented with comparing the player’s score and the computer’s score overall, storing the outcome in a finalResult variable, and showing it inside the score section.

In short: i’ve learned how to combine randomness, conditional logic, functions, global state, and DOM updates to create a fully interactive browser game.

13/01/2026

## 📘 What I Learned Today

Today I focused on improving my Rock–Paper–Scissors game. I learned how to:

- Control game flow: I added a round counter so the game stops after 10 rounds.  
- Final results: Instead of showing win/lose/tie after every round, I now only display the final result at the end with the total scores.  
- Button states: I practiced enabling and disabling buttons:
  - The reset button stays disabled until the game finishes.  
  - After 10 rounds, the reset button activates and the play buttons deactivate.  
- Reset logic: I built a reset function that clears scores, resets the round counter, disables the reset button again, and re‑enables the play buttons.  
- CSS selectors: I learned that when styling multiple buttons with `:disabled`, I need to separate them with commas, like this:
  .rock-button:disabled,
  .scissor-button:disabled,
  .paper-button:disabled {
    background-color: gray;
    cursor: not-allowed;
    opacity: 0.5;
  }

### 🎯 Reflection
I now understand how to manage button states, round limits, and final results in a small game. Today’s work helped me connect JavaScript logic with HTML and CSS more effectively, making my project feel complete and ready to share.

#####16/01/2026

Code update:
Today I re-coded my Rock–Paper–Scissors game using objects.
I organized the game logic inside a single object to keep scores, rounds, and elements together.
I feel satisfied that the game is cleaner and easier to maintain after switching to an object-based structure.
