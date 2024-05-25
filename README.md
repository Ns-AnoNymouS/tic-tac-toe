# Tic Tac Toe Game with AI Opponent

## Description

This repository contains a React-based Tic Tac Toe game where users can play against a robot opponent. The game offers three difficulty levels: Easy, Medium, and Hard. The AI opponent uses the Minimax algorithm to make intelligent moves, providing a challenging experience for players.

You can play the game live [here](https://ns-anonymous.github.io/tic-tac-toe/).

## Features

- **Three Difficulty Levels:** Choose between Easy, Medium, and Hard levels to match your skill.
- **AI Opponent:** Play against a computer opponent that uses Minimax pruning for optimal moves.
- **Interactive UI:** Simple and intuitive user interface built with React.
- **Real-time Feedback:** Displays the game status (e.g., winner or tie) as you play.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Ns-AnoNymouS/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. **Install the dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm start
   ```

   This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## How to Play

1. **Select Difficulty:** Use the dropdown menu to choose the difficulty level (Easy, Medium, Hard).
2. **Make Your Move:** Click on any empty square to place your move.
3. **AI Move:** The AI will automatically make its move after you.
4. **Game Status:** The game status will update in real-time, indicating the winner or if the game is a tie.

## Code Overview

### Components

- **Square:** Represents a single square on the Tic Tac Toe board.
- **Board:** Manages the game state and handles user interactions.
- **App:** The main component that includes the game board, difficulty selection, and game status.

### Key Functions

- **changeSymbol(symbol):** Switches between 'X' and 'O'.
- **choose(probability):** Determines whether the AI makes an optimal move based on the difficulty level.
- **minimax(currentState, symbol, isMaximizing, depth):** Implements the Minimax algorithm to find the best move for the AI.
- **calculateWinner(squares):** Checks if there is a winner.
- **isFull(squares):** Checks if the board is full.

## Note

This version of the game implements the Minimax algorithm. If you want to explore the Alpha-Beta Pruning implementation, please check the [alpha-beta-pruning branch](https://github.com/Ns-AnoNymouS/tic-tac-toe/tree/alpha-beta-pruning).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any changes or enhancements.
