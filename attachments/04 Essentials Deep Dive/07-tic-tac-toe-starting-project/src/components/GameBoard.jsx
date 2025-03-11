import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

const initial = [null, null, null];

export default function GameBoard({onSelectSquare, playerSymbol}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelect(row, col) {
        console.log(row + " " + col)
        setGameBoard((prev) => {
            let gb = [...gameBoard.map(inner => [...inner])]
            gb[row][col] = playerSymbol
            return gb
        })

        onSelectSquare();
    }

    return (
    <ol id="game-board">
        {gameBoard.map((row, rowIndex) => 
        <li key={rowIndex}>
            <ol>
                {row.map((cell, cellIndex) => 
                <li key={rowIndex*10+cellIndex}>
                    
                    <button onClick={() => handleSelect(rowIndex, cellIndex)}>{gameBoard[rowIndex][cellIndex]}</button>
                </li>)}
            </ol>    
        </li>)}
    </ol>
    )
}