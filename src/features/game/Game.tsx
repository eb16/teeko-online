import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBoard, movePiece, selectActiveCell } from "./gameSlice";
import styles from "./Board.module.css";

export function Game() {
  const board = useSelector(selectBoard);
  const activeCell = useSelector(selectActiveCell);
  const dispatch = useDispatch();

  return (
    <div>
      {board.map((col, x) => (
        <div>
          {col.map((cell, y) => (
            <button
              style={{
                padding: 20,
                margin: 5,
                border: `1px solid ${
                  activeCell && activeCell.x === x && activeCell.y === y
                    ? "blue"
                    : "black"
                }`
              }}
              onClick={() => dispatch(movePiece({ to: { x, y } }))}
            >
              {cell}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
