import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBoard, Selection } from "./gameSlice";
import { Piece } from "./Piece";
import { Slot } from "./Slot";

export function Game() {
  const board = useSelector(selectBoard);

  return (
    <div>
      {board.map((col, x) => (
        <div>
          {col.map((cell, y) =>
            cell === Selection.NONE ? (
              <Slot cell={cell} location={{ x, y }} />
            ) : (
              <Piece cell={cell} location={{ x, y }} />
            )
          )}
        </div>
      ))}
    </div>
  );
}
