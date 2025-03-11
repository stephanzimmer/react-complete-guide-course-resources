import { useState } from 'react';
import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function App() {
  const [activePlayer, setActivePlayer] = useState('X')
  const [gameTurns, setGameTurns] = useState([])
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(row, col) {    
    setGameBoard((prev) => {
      let gb = [...gameBoard.map(inner => [...inner])]
      gb[row][col] = activePlayer
      return gb
    })

    setActivePlayer(old => old == 'X' ? 'O' : 'X');
    setGameTurns(old => {
      const n = [{player: activePlayer, square: {row:row, col:col}}, ...old]
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
      
        <GameBoard gameBoard={gameBoard} onSelectSquare={handleSelectSquare} />
      </div>
    </main>
  )
}

export default App
