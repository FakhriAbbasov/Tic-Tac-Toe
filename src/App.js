import { useState } from "react";

import { Grid } from "./components/Grid";

import { Score } from "./components/Score";

import "./App.css";

function App() {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [grid, setGrid] = useState(Array(9).fill(null));

  const [player, setPlayer] = useState("x");

  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });

  const [gameOver, setGameOver] = useState(false);

  const squareClicked = (square) => {
    const updatedGrid = grid.map((value, index) => {
      if (index === square) {
        return player === "x" ? "X" : "O";
      } else {
        return value;
      }
    });
    const winner = checkWin(updatedGrid);
    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }
    setGrid(updatedGrid);
    setPlayer(player === "x" ? "o" : "x");
  };

  const checkWin = (grid) => {
    for (let i = 0; i < win.length; i++) {
      const [x, y, z] = win[i];

      if (grid[x] && grid[x] === grid[y] && grid[y] === grid[z]) {
        setGameOver(true);
        return grid[x];
      }
    }
  };

  const resetGrid = () => {
    setGameOver(false);
    setGrid(Array(9).fill(null));
    setPlayer("x");
  };

  const resetScore = () => {
    setScores({ xScore: 0, oScore: 0 });
  };

  return (
    <div className="App">
      <Score scores={scores} player={player} />
      <Grid grid={grid} onClick={gameOver ? resetGrid : squareClicked} />
      <button className="resetGrid" onClick={resetGrid}>
        Reset Grid
      </button>
      <button className="resetScore" onClick={resetScore}>
        Reset Score
      </button>
    </div>
  );
}

export default App;
