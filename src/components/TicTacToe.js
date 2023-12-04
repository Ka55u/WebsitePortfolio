import React, { useState } from 'react';
import styles from './TicTacToe.module.css';

// Create a square component
function Square({ value, onClick }) {
    return (
        <button className={styles.button} onClick={onClick}>
            {value}
        </button>
    );
}

// Create the Tic Tac Toe board
function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(i) {
        const squaresCopy = squares.slice();
        if (calculateWinner(squaresCopy).winner || squaresCopy[i]) {
            return;
        }
        squaresCopy[i] = xIsNext ? 'X' : 'O';
        setSquares(squaresCopy);
        setXIsNext(!xIsNext);
        if (!calculateWinner(squaresCopy).winner) {
            setTimeout(() => {
                // 20% chance for bot to make a random move
                if (Math.random() < 0.2) {
                    let availableSquares = squaresCopy.map((value, index) => value === null ? index : -1).filter(index => index !== -1);
                    let randomMove = availableSquares[Math.floor(Math.random() * availableSquares.length)];
                    squaresCopy[randomMove] = 'O';
                } else {
                    const bestMove = minimax(squaresCopy, 0, true).move;
                    squaresCopy[bestMove] = 'O';
                }
                setSquares(squaresCopy);
                setXIsNext(true);
            }, 0);
        }
    }
    

    function renderSquare(i) {
        return (
            <Square
                value={squares[i]}
                onClick={() => handleClick(i)}
            />
        );
    }

    const winner = calculateWinner(squares).winner;
    let status;
    if (winner) {
        if (winner === "X"){
            status = "Voitit! Onneksi olkoon";
        }else{
            status = "Hävisit! parempi tuuri ensi kerralla";
        }
    }else {
        status = "Pelaa vähän ristonollaa!"
    }

    return (
        <div className={styles.game}>
            <div className={styles.status}>{status}</div>
            <div className={styles["board-row"]}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className={styles["board-row"]}>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className={styles["board-row"]}>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <button onClick={resetGame} className={styles.resetButton}>Reset Game</button>
        </div>
    );
    
    

    function resetGame() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }
}

// Helper function to calculate the winner
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {winner: squares[a], line: lines[i]};
        }
    }
    return {winner: null, line: null};
}

// Helper function to check if the board is full
function isBoardFull(squares) {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === null) return false;
    }
    return true;
}


// Minimax function to compute the optimal move
function minimax(squares, depth, isMaximizingPlayer) {
    const result = calculateWinner(squares);
    if (result.winner !== null) {
        if (result.winner === 'O') return {score: 10 - depth};
        else if (result.winner === 'X') return {score: depth - 10};
    } else if (isBoardFull(squares)) {
        return {score: 0};
    }

    if (isMaximizingPlayer) {
        let bestScore = -Infinity;
        let move;

        for (let i = 0; i < squares.length; i++) {
            if (squares[i] === null) {
                squares[i] = 'O'; // AI is 'O'
                let score = minimax(squares, depth + 1, false).score;
                squares[i] = null;

                if (score > bestScore) {
                    bestScore = score;
                    move = i;
                }
            }
        }
        return {score: bestScore, move: move};
    } else {
        let bestScore = Infinity;
        let move;

        for (let i = 0; i < squares.length; i++) {
            if (squares[i] === null) {
                squares[i] = 'X'; // Human is 'X'
                let score = minimax(squares, depth + 1, true).score;
                squares[i] = null;

                if (score < bestScore) {
                    bestScore = score;
                    move = i;
                }
            }
        }
        return {score: bestScore, move: move};
    }
}

export default TicTacToe;
