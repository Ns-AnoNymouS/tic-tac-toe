import { useState } from 'react';
import './App.css';

function Square({ value, onSquareClick }) {
    let color = value === 'X' ? 'red' : 'black'
    return <button className='square' onClick={onSquareClick} style={{ color: color }}>{value}</button>;
}

const changeSymbol = (symbol) => { return symbol === 'O' ? 'X' : 'O' }

function choose(probability) {
    const random = Math.random();
    return random < probability ? true : false;
}

function minmax(currentState, symbol, isMaximizing) {
    let bestMove = null
    let winner = calculateWinner(currentState)
    if (winner) return [winner === 'X' ? -1 : 1, bestMove]
    if (isFull(currentState)) return [0, bestMove];
    let bestVal = isMaximizing ? -Infinity : Infinity;
    for (let i = 0; i < 9; i++) {
        if (currentState[i] === null) {
            currentState[i] = symbol;
            // eslint-disable-next-line no-unused-vars
            let [score, _] = minmax(currentState, changeSymbol(symbol), !isMaximizing)
            currentState[i] = null;
            if (isMaximizing && bestVal < score) {
                bestVal = score;
                bestMove = i;
            }
            if (!isMaximizing && bestVal > score) {
                bestVal = score;
                bestMove = i;
            }
        }
        if ((bestVal === 1 && isMaximizing) || (bestVal === -1 && !isMaximizing)) break;
    }
    return [bestVal, bestMove];
}

function Board({ status, squares, setSquares, difficulty, setDifficulty, xturn, setxTurn }) {
    function handleClick(i) {
        let probability = { 'Easy': 0.7, 'Medium': 0.9, 'Hard': 1 }
        if (status) {
            setxTurn(!xturn)
            let newSquares = Array(9).fill(null)
            if (xturn) {
                // eslint-disable-next-line no-unused-vars
                let [_, move] = minmax(newSquares, 'O', choose(probability[difficulty]));
                newSquares[move] = 'O'
            }
            return setSquares(newSquares);
        }
        if (squares[i]) {
            return;
        }
        if (calculateWinner(squares)) {
            return setSquares(squares);
        }
        let nextSquares = squares.slice();
        nextSquares[i] = "X";
        setSquares(nextSquares);

        // eslint-disable-next-line no-unused-vars
        let [_, move] = minmax(nextSquares, 'O', choose(probability[difficulty]));
        nextSquares = nextSquares.slice();
        nextSquares[move] = "O";
        setSquares(nextSquares);
    }
    return (
        <>
            <div className='board-row'>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className='board-row'>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className='board-row'>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    )
}

function calculateWinner(squares) {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function isFull(squares) {
    for (let i = 0; i < 9; i++) {
        if (squares[i] === null)
            return false;
    };
    return true;
}

function App() {
    const [xturn, setxTurn] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [difficulty, setDifficulty] = useState('Easy');
    let sts = null;
    if (isFull(squares)) {
        sts = `Tie`;
    }
    if (calculateWinner(squares)) {
        sts = `Winner: ${calculateWinner(squares)}`;
    }

    function handleChange(event) {
        setDifficulty(event.target.value);
    }

    return (
        <>
            <div className="status">{sts}</div>
            <span className="level">Level: </span>
            <select className="level" value={difficulty} onChange={handleChange}>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
            <div className="container">
                <Board status={sts} squares={squares} setSquares={setSquares}
                    difficulty={difficulty} setDifficulty={setDifficulty}
                    xturn={xturn} setxTurn={setxTurn}
                />
            </div>
        </>
    );
}

export default App;
