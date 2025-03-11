import { useState } from 'react';
import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
import Log from './components/Log.jsx'
import { WINNING_COMBINATIONS } from './assets/winning-combinations.js';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function App() {
  const [activePlayer, setActivePlayer] = useState('X')
  const [gameTurns, setGameTurns] = useState([])

  let gameBoard = initialGameBoard;

  for (const {square, player} of gameTurns) {
      gameBoard[square.row][square.col] = player
  }
  console.log("determine winner");

  let winner = undefined
  for (const combination of WINNING_COMBINATIONS) {    
    const [c1, c2, c3] = combination
    const p1 = gameBoard[c1.row][c1.column];
    const p2 = gameBoard[c2.row][c2.column];
    const p3 = gameBoard[c3.row][c3.column];

    //console.log(`${c1.row} ${c1.col} ${c2.row} ${c2.col} ${c3.row} ${c3.col}`);
    if (p1 == p2 && p2 == p3) {
      
      winner = p1
      console.log(`winner is ${winner}`);
    }
  }

  function handleSelectSquare(row, col) {        
    setActivePlayer(old => old == 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      const currentPlayer = (prevTurns.length > 0 && prevTurns[0].player == 'X')
        ? 'O'
        : 'X'  

      const n = [
        {player: currentPlayer, square: {row:row, col:col}}, 
        ...prevTurns]


      return n
    })
  }

  return (
    <main>
      <div id="game-container">      
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer == 'X'} />
          <Player name="Player 2" symbol="O" isActive={activePlayer == 'O'}/>
        </ol>

        {winner
          ? <div>Player {winner} wins </div>
          : <GameBoard gameBoard={gameBoard} onSelectSquare={handleSelectSquare} />
        }
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
