import React from "react";

import "./Score.css";

export const Score = ({ scores, player }) => {
  const { xScore, oScore } = scores;
  return (
    <div className="score">
      <span className={`x-score ${player === "o" && "notPlaying"}`}>
        X - {xScore}
      </span>
      <span className={`o-score ${player === "x" && "notPlaying"}`}>
        O - {oScore}
      </span>
    </div>
  );
};
