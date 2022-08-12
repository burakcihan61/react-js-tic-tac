import React from "react";
import uuid from "react-uuid";

import { Box } from "./Box";
import "./Board.css";

export const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
        return (
          <Box
            key={uuid()}
            value={value}
            onClick={() => value === null && onClick(idx)}
          />
        );
      })}
    </div>
  );
};
