import React from "react";

import { Square } from "./Square";
import "./Grid.css";

export const Grid = ({ grid, onClick }) => {
  return (
    <div className="container">
      <div className="grid">
        {grid.map((value, index) => {
          return (
            <Square
              value={value}
              onClick={() => value === null && onClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
};
