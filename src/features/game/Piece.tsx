import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  movePiece,
  selectActiveCell,
  Selection,
  Location,
  isValidMovement,
  setActiveCell
} from "./gameSlice";
import { useDrag, useDrop } from "react-dnd";

interface Props {
  cell: number;
  location: Location;
}

export function Piece({ cell, location }: Props) {
  const dispatch = useDispatch();
  const { x, y } = location;
  const activeCell = useSelector(selectActiveCell);

  const [{ isDragging }, drag] = useDrag({
    item: { payload: { x, y }, type: Selection.PLAYER1.toString() },
    collect: monitor => ({ isDragging: !!monitor.isDragging() }),
    begin: () => dispatch(setActiveCell({ x, y }))
  });

  return (
    <button
      ref={drag}
      style={{
        padding: 20,
        margin: 5,
        border: `1px solid ${
          activeCell && activeCell.x === x && activeCell.y === y
            ? "blue"
            : "black"
        }`,
        background: cell === Selection.PLAYER1 ? "black" : "red",
        borderRadius: "50%",
        cursor: "move",
        opacity: isDragging ? 0.5 : 1,
        outlineStyle: "none"
      }}
    />
  );
}
