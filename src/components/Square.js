import React from "react";

import "./Square.css";

export const Square = ({ value, onClick }) => {
  const player = value === "X" ? "square x" : "square o";
  return (
    <button className={player} onClick={onClick}>
      {value}
    </button>
  );
};
