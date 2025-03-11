export default function GameBoard({onSelectSquare, gameBoard}) {    
    return (
    <ol id="game-board">
        {gameBoard.map((row, rowIndex) => 
        <li key={rowIndex}>
            <ol>
                {row.map((cell, cellIndex) => 
                <li key={rowIndex*10+cellIndex}>
                    
                    <button disabled={cell != null} onClick={() => onSelectSquare(rowIndex, cellIndex)}>{gameBoard[rowIndex][cellIndex]}</button>
                </li>)}
            </ol>    
        </li>)}
    </ol>
    )
}