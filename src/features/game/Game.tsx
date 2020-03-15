import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectBoard,
  movePiece,
  selectActiveCell,
  Selection
} from "./gameSlice";

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
                }`,
                background:
                  cell === Selection.PLAYER1
                    ? "black"
                    : cell === Selection.PLAYER2
                    ? "red"
                    : "white"
              }}
              onClick={() => dispatch(movePiece({ to: { x, y } }))}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
